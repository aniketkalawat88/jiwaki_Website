import React from 'react'
import CustomerRating from '../Components/CustomerRating'
import RoundRating from '../Components/RoundRating'
import RateTheProduct from '../Components/RateTheProduct'
import CustomerReview from '../Components/CustomerReview'

function ProductDetailRating() {
  return (
    <div className='mx-20 p-4 flex space-x-20 justify-center'>
      <div className='space-y-6'>
        <CustomerRating/>
        <CustomerReview/>
      </div>
      <div className=''>
        <RoundRating/>
        <RateTheProduct/>

      </div>
    </div>
  )
}

export default ProductDetailRating
