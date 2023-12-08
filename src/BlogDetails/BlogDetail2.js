import React from 'react'
import { BlogDetailDummy } from '../Pages/DummyData'
import BlogDetailQuestion from './BlogDetailQuestion'

function BlogDetail2() {
  return (
    <>
    {BlogDetailDummy?.detailTwo?.map((ele, i)=>(
        <div className='m-20 space-y-12'>
        
        <div className="p-8 text-[#6A6A6A] text-xl border-l-4 border-orange-500 m-2 bg-[#F9F9F9]">
            {ele.description}
            </div>
            <div className="text-[#6A6A6A] text-xl  border-orange-500 m-2 ">
            {ele.para}
            </div>
            <div className="text-[#6A6A6A] text-xl  border-orange-500 m-2 ">
           {ele.para2}
            </div>
        </div>
        ))}
        <BlogDetailQuestion/>

    </>
  )
}

export default BlogDetail2
