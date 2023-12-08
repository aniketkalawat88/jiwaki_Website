import React from 'react'
import { ProductDetailDummy } from '../Pages/DummyData'

function CustomerReview() {
  return (
    <div className='border  space-y-5 w-[40rem] p-5 rounded-2xl'>
      <h1 className='text-lg font-semibold '>Customer Review</h1>
      <div className='space-y-2'>
      {ProductDetailDummy?.customerReview?.map((ele,i)=>(
        <div className='flex space-x-4 '>
            <div>
                <img src={require('../Assests/Images/06.png')} alt="no preview" className='w-10 object-cover rounded-full'/>
            </div>
            <div className='w-[32rem] cursor-pointer'>
                <h2 className='text-[16px] font-semibold'>{ele.name}</h2>
                <p className='text-[#828282] text-[16px] '>{ele.review}</p>
            </div>
        </div>

      ))}

      <h1 className=' font-bold hover:text-blue-600 hover:underline'>Read all reviews!</h1>

      </div>
    </div>
  )
}

export default CustomerReview
