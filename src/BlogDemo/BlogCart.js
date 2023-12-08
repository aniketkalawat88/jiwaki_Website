import React from 'react'
import { NavLink } from 'react-router-dom';

function BlogCart({ele}) {
    // console.log(ele);
  return (
    <>
        <div className=''>
            <div className='w-96 m-3  shadow space-y-1 border-blue-800 hover:shadow-2xl hover:shadow-orange-500 '>
            <div className='hover:opacity-90 relative'>
                <img src={require('../Assests/Images/Blog1.png')} alt="no preview" className='w-96'/>
                <span className='absolute top-0 right-0 m-3 text-[#444444] hover:text-black'><i className="fa-solid fa-share"></i></span>
            </div>
            <div className='flex justify-between text-[#444444] px-2 mx-4'>
                <span className='space-x-1 text-[#444444] hover:text-orange-500'>
                    <span className=''><i className="fa-solid fa-eye"></i></span>
                    <span>{ele.view}</span>
                </span>
                <span className='text-xl hover:text-red-500'><i className="fa-solid fa-heart"></i></span>
            </div>
            
           
            <div className='font-semibold text-xl text-center hover:text-orange-600'>
            <NavLink to={"BlogDetail"}>{ele.name}</NavLink>
            </div>
            </div>

        </div>


    </>
  )
}

export default BlogCart
