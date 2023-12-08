import React from 'react'

function BlogNavbar() {
  return (
    <div className='mx-10'>
      
      <div className='m-5'>
        <ul className='flex justify-between text-[#6B6B6B] font-semibold'>
            <li className='border border-black rounded-3xl p-1  px-4 cursor-pointer hover:text-orange-500'>All</li>
            <li className='border border-black rounded-3xl p-1  px-4 cursor-pointer hover:text-orange-500'>Beauty Wash</li>
            <li className='border border-black rounded-3xl p-1  px-4 cursor-pointer hover:text-orange-500'>Beauty Cream</li>
            <li className='border border-black rounded-3xl p-1  px-4 cursor-pointer hover:text-orange-500'>Beauty Serum</li>
            <li className='border border-black rounded-3xl p-1  px-4 cursor-pointer hover:text-orange-500'>Beauty Mask</li>
            <li className='border border-black rounded-3xl p-1  px-4 cursor-pointer hover:text-orange-500'>Beauty Scrub</li>
            <li className='border border-black rounded-3xl p-1  px-4 cursor-pointer hover:text-orange-500'>Beauty Screen</li>
        </ul>
      </div>
    </div>
  )
}

export default BlogNavbar
