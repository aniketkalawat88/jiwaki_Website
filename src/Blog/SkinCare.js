import React from 'react'
import { cardData } from '../Pages/DummyData'
import Cart from './Cart'

function SkinCare() {
  return (
    <div className=' p-14 space-y-4 border-b-4'>
        <div className='flex justify-between'>
            <div className='font-bold text-3xl hover:underline'>Baby Care</div>
            <div className='text-[#187618] cursor-pointer font-bold hover:underline'>See All</div>
        </div>
        <div className='flex justify-between'>
            {cardData?.NewLaunches?.map((ele, i)=>(
                <Cart ele={ele} key={i}/>
            ))}
        </div>
    </div>
  )
}

export default SkinCare
