'use client'

import { useFormStatus } from 'react-dom'

export function FormSubmit() {
  const status = useFormStatus()

  if (status.pending) {
    return <p>Creating post....</p>
  }
  return (
    <>
      <div className='flex justify-between'>
        <button
          type='submit'
          className='bg-[#1a193d] text-white py-2 px-4 rounded-lg hover:bg-[#27292d] transition duration-300'
        >
          Create Post
        </button>
        <button
          type='reset'
          className='bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-300'
        >
          Reset
        </button>
      </div>
    </>
  )
}
