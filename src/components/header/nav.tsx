import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <nav className='flex justify-between items-center p-4 bg-[#171544]'>
        <div className='flex items-center space-x-4'>
          <Link href='/' className='text-white font-bold text-4xl'>
            imgur
          </Link>
          <Link
            href='/new-post'
            className='bg-[#1bb76e] text-white px-4 py-2 rounded-md font-bold'
          >
            New Post
          </Link>
        </div>

        {/* <div className='text-lg  hover:underline'> */}
          <Link
            href='/next-page'
            className='flex items-center space-x-1 text-white bg-[#4a58fb] font-bold px-4 py-2 text-bold rounded-md '
          >
            <span className='text-sm'>Next</span>
            <span>&gt;</span>
          </Link>
        {/* </div> */}
        <div className='flex justify-between items-center font-bold gap-8'>
          <p className='text-white'>Sign in</p>
          <p className='bg-[#1bb76e] text-white px-4 py-2 rounded-md'>
            Sign Up
          </p>
        </div>
      </nav>
    </>
  )
}
