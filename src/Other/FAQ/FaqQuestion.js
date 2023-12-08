import React, { useState } from 'react'

function FaqQuestion({ele}) {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => {
        setToggle(!toggle);
      };
  return (
    <div className='shadow p-2 cursor-pointer space-y-4'>
        <div className='justify-between flex hover:text-orange-500'  onClick={handleClick} >
            <div className='font-bold text-xl '>{ele.Question}</div>
            <i className="fa-solid fa-caret-up p-2"></i>
        </div>
        {toggle && (
        <div className='font-semibold'>
            <div>{ele.Answer}</div>
        </div>
        
      )}

    </div>
  )
}

export default FaqQuestion
