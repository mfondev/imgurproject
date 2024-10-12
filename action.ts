'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function getPosts() {
  try {
    const res = await fetch('https://dummyjson.com/posts', {
      cache: 'no-store',
    })

    const posts = await res.json()
    console.log(posts)

    return posts
  } catch (error) {
    console.log('error:', error)
    throw error
  }
}


interface RawData {
  title: string
  content: string
  userId: number
}

interface FormState {
  error?: string[]
}

export async function createPost(prevState: FormState, formData: FormData) {
  try {
    const rawFormData: RawData = {
      title: formData.get('title') as string,
      content: formData.get('content') as string,
      userId: Number(formData.get('user-id')),
    }

    let title = rawFormData.title
    let content = rawFormData.content
    let userId = rawFormData.userId

    let errors: string[] = []

    if (!title || title.trim().length === 0) {
      errors.push('Insert title')
    }

    if (!content || content.trim().length === 0) {
      errors.push('Insert content')
    }

    if (userId < 0 || !userId) {
      errors.push('Insert credible user Id')
    }

    if (errors.length > 0) {
      return { errors }
    }

    const res = await fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
        userId,
      }),
    })

    const result = await res.json()
    console.log(result)

    if (result) {
      revalidatePath('/')
      redirect('/')
    } else {
      throw new Error('Failed to create post')
    }

    return result
  } catch (error) {
    console.error('Error creating post:', error)
    throw error
  }
}
