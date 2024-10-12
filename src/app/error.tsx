'use client'

export default function FeedError() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#1a193d] to-[#27292d] text-white p-6'>
      <h2 className='text-3xl font-bold mb-4'>An error occurred!</h2>
      <p className='text-lg text-gray-300'>
        Unfortunately, something went wrong. We're working on it!
      </p>
    </div>
  )
}
