'use client'

import React, { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getPosts } from '../../../action'
import LikeButton from '../like-icon'

interface Post {
  id: number
  title: string
  body: string
  tags: string[]
  reactions: {
    likes: number
    dislikes: number
  }
  views: number
  userId: number
}

interface PostsResponse {
  posts: Post[]
  total: number
  skip: number
  limit: number
}

export default function Feeds({ initialData }: { initialData: PostsResponse }) {
  const [postLimit, setPostLimit] = useState(10)
  const [randomDates, setRandomDates] = useState<{ [key: number]: string }>({})

  const {
    data = initialData,
    error,
    isLoading,
  } = useQuery<PostsResponse>({
    queryKey: ['posts'],
    queryFn: async () => getPosts(),
    initialData,
  })

  const randomDate = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const randomDay = Math.floor(Math.random() * 28) + 1
    const randomMonth = months[Math.floor(Math.random() * months.length)]
    return `${randomMonth} ${randomDay}`
  }

  useEffect(() => {
    const storedDates = localStorage.getItem('randomDates')
    let newRandomDates: { [key: number]: string } = storedDates
      ? JSON.parse(storedDates)
      : {}

    data.posts.forEach((post) => {
      if (!newRandomDates[post.id]) {
        newRandomDates[post.id] = randomDate()
      }
    })

    setRandomDates(newRandomDates)
    localStorage.setItem('randomDates', JSON.stringify(newRandomDates))
  }, [data.posts])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <div className='flex flex-col items-center min-h-screen p-4 mt-6'>
      <ul className='w-full max-w-2xl'>
        {data.posts.slice(0, postLimit).map((post) => (
          <li key={post.id} className='mb-8'>
            <p className='text-sm text-[#a5aa9b] mb-6'>
              {post.views} views • {randomDates[post.id]}
            </p>

            <div className='bg-white p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-bold mb-2'>{post.title}</h3>
              <p className='text-gray-700'>{post.body}</p>
            </div>

            <div className='flex justify-center mt-4'>
              <LikeButton />
              <p className='ml-2 text-sm text-[#a5aa9b]'>
                {post.reactions.likes} Likes
              </p>
            </div>
          </li>
        ))}
      </ul>

      {postLimit < data.total && (
        <button
          className='mt-8 bg-[#4a58fb] text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-all font-bold'
          onClick={() => setPostLimit(postLimit + 10)}
        >
          See More Posts
        </button>
      )}
    </div>
  )
}
