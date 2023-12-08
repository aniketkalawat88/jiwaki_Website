import React from 'react'  

function Customer({ele}) {
    // console.log(ele);
  return (
    <div className='shadow-2xl w-72 p-4 text-center space-y-2 '>
      <div className='flex justify-center space-x-5 p-10'>
        <img src={ele.image} alt="no preview" className='h-11 w-11 rounded-full object-cover' />
        <div>
            <span className='font-bold'>{ele.name}</span>
            <ul className='flex text-xs text-[#E2BE45] space-x-1'>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-regular fa-star"></i></li>
                <li><i className="fa-regular fa-star"></i></li>
                <li><i className="fa-regular fa-star"></i></li>
            </ul>   
        </div>
      </div>
      <div className=' font-semibold text-sm'>{ele.description}</div>
    </div>
  )
}

export default Customer
