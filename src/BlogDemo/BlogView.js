import React from 'react'

function BlogView({ele}) {
  return (
    <div>
      <div className='flex border border-blue-200 w-[35rem] text-[#444444] justify-between rounded-xl'>
        <div className='w-[195px] h-[110px]'>
            <img src={require('../Assests/Images/Blog1.png')} alt="no preview" className='rounded-s-xl'/>

        </div>
        <div>
            <div className='space-x-2 hover:text-orange-500'>
                <span><i class="fa-solid fa-eye"></i></span>
                <span>{ele.view}</span>
            </div>
            <div className='space-y-1'>
                <div className='text-[20px] font-semibold text-black hover:text-orange-400 cursor-pointer'>{ele.name}</div>
                <div className='font-semibold hover:text-orange-400'>Category : {ele.category}</div>
                <div className='float-right mx-3 hover:text-orange-500'><i class="fa-solid fa-bookmark"></i></div>
                <div className=' hover:text-orange-400'>{ele.ago} ago</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BlogView
