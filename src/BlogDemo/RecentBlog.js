import React from 'react'
import BlogCart from './BlogCart'
import { BlogDataDummy } from '../Pages/DummyData'

function RecentBlog() {
  return (
    <div className='p-12 space-y-4 border-b-4'>
      <div className='flex justify-between m-4'>
            <div className='font-bold text-3xl hover:underline'>Recent Blog</div>
            <div className='text-[#187618] cursor-pointer font-bold hover:underline'>See All</div>
      </div>
      
      <div className='flex justify-between'>
        {BlogDataDummy?.RecentBlog?.map((ele , i)=>(
            <BlogCart ele={ele} key={i}/>

        ))}
        </div>
    </div>
  )
}

export default RecentBlog
