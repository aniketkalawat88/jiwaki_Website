import React from 'react'
import { useLocation } from 'react-router-dom';


function Offers() {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <div className='bg-orange-500 text-white text-center p-2 font-semibold' style={(location.pathname === '/Blog')?{backgroundColor:'green'}:{backgroundColor:'#E77929'}}>
      <div>30 % Off on the occasion of Janmashtami | Shop Now | Buy 1 Get 1 Free</div>
    </div>
  )
}

export default Offers
