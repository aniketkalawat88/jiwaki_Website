import React from 'react'

function Filter() {
  return (
    <div className='border space-y-3  p-12 border-black rounded-2xl w-72'>
      <span className='font-bold block text-2xl'>Filter</span>
      <span className='block text-[rgb(21,27,57)] font-semibold'>Prices</span>
      <div className='space-y-2 text-sm text-[#151B39]'>
        <label htmlFor="lowToHigh" className='block space-x-2 cursor-pointer font-semibold hover:text-orange-400 hover:font-semibold'>
            <input type="checkbox" name="" id="lowToHigh" />
            <span>Low to High</span>
        </label>
        <label htmlFor="HighTolow" className='block space-x-2 cursor-pointer font-semibold hover:text-orange-400 hover:font-semibold'>
            <input type="checkbox" name="" id="HighTolow" />
            <span>High to Low</span>
        </label>
        <label htmlFor="m50" className='block space-x-2 cursor-pointer font-semibold hover:text-orange-400 hover:font-semibold'>
            <input type="checkbox" name="" id="m50" />
            <span>₹50 - ₹350</span>
        </label>
        <label htmlFor="m350" className='block space-x-2 cursor-pointer font-semibold hover:text-orange-400 hover:font-semibold'>
            <input type="checkbox" name="" id="m350" />
            <span>₹350 - ₹1050</span>
        </label>
        <label htmlFor="more" className='block space-x-2 cursor-pointer font-semibold hover:text-orange-400 hover:font-semibold'>
            <input type="checkbox" name="" id="more" />
            <span>More than ₹2050</span>
        </label>
        <label htmlFor="all1" className='block space-x-2 cursor-pointer font-semibold hover:text-orange-400 hover:font-semibold'>
            <input type="checkbox" name="" id="all1" />
            <span>Any Price</span>
        </label>


      </div>

      <div className='space-y-2 font-semibold'>
      <span className='block text-[#151B39]'>Brands</span>
      <div className='space-y-2 text-sm text-[#151B39]'>
        <label htmlFor="01" className='block space-x-2 cursor-pointer hover:text-orange-400 hover:font-semibold'>
            <input type="checkbox" name="" id="01" />
            <span>Max factor</span>
        </label>
        <label htmlFor="02" className='block space-x-2 cursor-pointer hover:text-orange-400 hover:font-semibold'>
            <input type="checkbox" name="" id="02" />
            <span>Biotique</span>
        </label>
        <label htmlFor="03" className='block space-x-2 cursor-pointer hover:text-orange-400 hover:font-semibold'>
            <input type="checkbox" name="" id="03" />
            <span>Colorbar</span>
        </label>
        <label htmlFor="04" className='block space-x-2 cursor-pointer hover:text-orange-400 hover:font-semibold'>
            <input type="checkbox" name="" id="04" />
            <span>Face Canada</span>
        </label>
        <span className='text-[#187618] text-xs hover:underline cursor-pointer font-semibold'>See more</span>
        
      </div>


      </div>


      <div className='space-y-2 font-semibold'>
      <span className='block text-[#151B39]'>Discount</span>
      <div className='space-y-2 text-sm text-[#151B39]'>
        <label htmlFor="05" className='block space-x-2 cursor-pointer hover:text-orange-400 hover:font-semibold'>
            <input type="checkbox" name="" id="05" />
            <span>Less than 30%</span>
        </label>
        <label htmlFor="06" className='block space-x-2 cursor-pointer hover:text-orange-400 hover:font-semibold'>
            <input type="checkbox" name="" id="06" />
            <span>30%- 60%</span>
        </label>
        <label htmlFor="07" className='block space-x-2 cursor-pointer hover:text-orange-400 hover:font-semibold'>
            <input type="checkbox" name="" id="07" />
            <span>60%- 80%</span>
        </label>
        <label htmlFor="08" className='block space-x-2 cursor-pointer hover:text-orange-400 hover:font-semibold'>
            <input type="checkbox" name="" id="08" />
            <span>80%- 100%</span>
        </label>      
      </div>


      </div>
      
      <div className='space-y-2 font-semibold'>
      <span className='block text-[#151B39]'>Discount</span>
      <div className='space-y-2 text-sm text-[#151B39]'>
        <label htmlFor="09" className='block space-x-2 cursor-pointer text-orange-400 hover:font-semibold'>
            <input type="checkbox" name="" id="09" className='float-left m-1'/>
            <ul className='flex space-x-1'>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-regular fa-star"></i></li>
                <span className='float-right  text-black'>& Up</span>
            </ul>
        </label>
        <label htmlFor="10" className='block space-x-2 cursor-pointer text-orange-400 hover:font-semibold'>
            <input type="checkbox" name="" id="10" className='float-left m-1'/>
            <ul className='flex space-x-1'>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-regular fa-star"></i></li>
                <li><i class="fa-regular fa-star"></i></li>
                <span className='float-right text-black'>& Up</span>
            </ul>
        </label>
        <label htmlFor="11" className='block space-x-2 cursor-pointer text-orange-400 hover:font-semibold'>
            <input type="checkbox" name="" id="11" className='float-left m-1'/>
            <ul className='flex space-x-1'>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-regular fa-star"></i></li>
                <li><i class="fa-regular fa-star"></i></li>
                <li><i class="fa-regular fa-star"></i></li>
                <span className='float-right text-black'>& Up</span>
            </ul>
        </label>
        <label htmlFor="12" className='block space-x-2 cursor-pointer text-orange-400 hover:font-semibold'>
            <input type="checkbox" name="" id="12" className='float-left m-1'/>
            <ul className='flex space-x-1'>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-regular fa-star"></i></li>
                <li><i class="fa-regular fa-star"></i></li>
                <li><i class="fa-regular fa-star"></i></li>
                <li><i class="fa-regular fa-star"></i></li>
                <span className='float-right text-black'>& Up</span>
            </ul>
        </label>
            
      </div>


      </div>


    </div>
  )
}

export default Filter
