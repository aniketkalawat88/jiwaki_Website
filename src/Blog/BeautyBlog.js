import React from 'react'
import Cart from './Cart'
import { cardData } from '../Pages/DummyData'

function BeautyBlog() {
  return (
    <div className='p-12 space-y-4 border-b-4'>
        <div className='flex justify-between'>
            <div className='font-bold text-3xl hover:underline'>Beauty</div>
            <div className='text-[#187618] cursor-pointer font-bold hover:underline'>See All</div>
        </div>
        <div className='flex justify-between'>
            {cardData?.Beauty?.map((ele, i)=>(
                <Cart ele={ele} key={i}/>
            ))}
        </div>
    </div>
  )
}

export default BeautyBlog
