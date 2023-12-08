import React from 'react'
import PaymentModal from '../Modal/PaymentModal';

function BuyMembership() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
    <div className=''>
      <div className='border'>
        <img src={require('../Assests/Images/08.png')} alt="no preview" className='w-[100%] h-96 ' />
      </div>
      <div className='border-slate-600 border mx-20 p-10 m-10 rounded-lg space-y-2'>
        <h1 className='font-semibold text-base w-44'>Buy – 99 Membership What is 99 Program?</h1>
        <p className='text-sm'>99 Program is a performance-based marketing strategy that allows you to promote products from our company to your audience and create an additional source of income without having to create your own products and services. This program is based on revenue sharing.</p>
        <p className='text-sm'>‘99’ concept is simple: when an existing customer refers someone to this program and that person becomes a new customer, the referring customer receives some form of reward, such as incentive, discounts and coupons</p>
        <ul className='text-sm list-disc m-5'>
          <li>Get discount coupon of worth Rs. 3000 when you register under 99 program</li>
          <li>Get Rs 50 from each referral register using your referral link.</li>
          <li>Get referral bonus 10% of invoice value on each purchase made by them every time.</li>
          <li>Get Free Shipping on & above purchase Rs. 599/- for club members every time</li>
        </ul>
      </div>
      <div className=' my-10'>
        <form action="" className='border-slate-600 border p-10 mx-20 rounded-lg space-y-2'>
          <h1 className='text-xl font-semibold'>User Detail</h1>
          <input type="text" placeholder='Name' className='p-2 block border m-3 px-5 outline-none w-[100%] rounded-lg'/>
          <input type="tel" placeholder='Mobile no.' className='p-2 block border m-3 px-5 outline-none w-[100%] rounded-lg'/>
          <input type="email" placeholder='Email' className='p-2 block border m-3 px-5 outline-none w-[100%] rounded-lg'/>
          <input type="password" placeholder='Password' className='p-2 block border m-3 px-5 outline-none w-[100%] rounded-lg'/>
          <input type="password" placeholder='Confirm Password' className='p-2 block border m-3 px-5 outline-none w-[100%] rounded-lg'/>
        </form>
        <label className='mx-20 p-3 flex cursor-pointer text-[#6A6A6A]'>
          <input type="checkbox" />
          I agree to the Terms and Conditions, Return Policy & Privacy Policy
        </label>
        <div className='flex m-5 justify-center'>
          <button className='text-orange-400 block hover:bg-orange-400 hover:text-white shadow-2xl border-orange-500 shadow-orange-400 w-40 p-2 rounded-3xl font-bold text-xl'  onClick={() => setShowModal(true)}>Pay</button>
        </div>

      </div>
    </div>
    
    {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto mx-auto max-w-2xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <button className="text-end" onClick={() => setShowModal(false)}>
                  <span className="m-8 ">X</span>
                </button>
                <div className="">
                  <PaymentModal/>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

    </>
  )
}

export default BuyMembership
