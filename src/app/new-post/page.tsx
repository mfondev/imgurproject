import React from 'react'
import type { Metadata } from 'next'
import PostForm from '../../components/form/form'

export const metadata: Metadata = {
  title: 'Imgur Upload',
  description: 'Upload your posts',
}

export default function NewPosts() {
  return (
    <div>
      <PostForm />
    </div>
  )
}
