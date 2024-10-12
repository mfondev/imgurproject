
'use client'


import { createPost } from '../../../action'
import { useFormState } from 'react-dom'
import { FormSubmit } from '../formSubmit'

interface FormState {
  error: string[]
}

export default function PostForm() {
  // @ts-ignore
  const [state, formAction] = useFormState<FormState>(createPost, {
    error: [],
  })

  return (
    <div className='min-h-screen bg-gradient-to-b from-[#1a193d] to-[#27292d] flex justify-center items-center p-6'>
      <form
        action={formAction}
        className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'
      >
        <h2 className='text-2xl font-bold text-center mb-6 text-gray-800'>
          Create New Post
        </h2>

        <div className='mb-6'>
          <label
            htmlFor='user-id'
            className='block text-gray-700 font-semibold mb-2'
          >
            User Id:
          </label>
          <input
            type='number'
            id='user-id'
            name='user-id'
            // required
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a193d]'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='title'
            className='block text-gray-700 font-semibold mb-2'
          >
            Title:
          </label>
          <input
            type='text'
            id='title'
            name='title'
            // required
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a193d]'
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='body'
            className='block text-gray-700 font-semibold mb-2'
          >
            Content:
          </label>
          <textarea
            id='content'
            name='content'
            // required
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a193d] resize-none h-32'
          ></textarea>
        </div>

        <FormSubmit />
        <div>
          {/** @ts-ignore */}
          {state.errors && (
            <div className='mt-4 text-red-500'>
              <ul>
                {/** @ts-ignore */}
                {state.errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}
