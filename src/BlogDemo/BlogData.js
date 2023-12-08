import React from 'react'
import BlogCart from './BlogCart'
import { BlogDataDummy } from '../Pages/DummyData'
import BlogNext from './BlogNext'

function BlogData() {
  return (
    <div className='flex flex-wrap m-12'>
        {BlogDataDummy?.AllBeauty?.map((ele ,i)=>(
            <div className='px-8'>
                <BlogCart ele={ele} key={i}/>
            </div>
        ))}
        <div className='w-[100%]'>
          <BlogNext/>
        </div>
    </div>
  )
}

export default BlogData
