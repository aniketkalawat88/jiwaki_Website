import React from 'react'
import DrawerAddAddress from '../drawer/DrawerAddAddress'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'


function CartAddress({value}) {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
  return (
    <>
    <div>
      
      <div className="flex space-x-3 shadow-xl p-1 cursor-pointer  bg-white w-[100%]">
          <svg  onClick={value}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="35"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M10.0007 13.3333L3.33398 20M3.33398 20L10.0007 26.6666M3.33398 20H36.6673"
              stroke="#E76308"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="m-1 font-semibold text-[#E76308] text-xl"  onClick={value}>
          Add Address
          </span>
        </div>
        <div className='flex justify-center mt-10'>
            <form action="" className='space-y-5 m-5'>
                <input type="text" placeholder='Your Name' className='block border p-2 rounded-lg w-[30rem] text-lg' />
                <input type="tel" placeholder='Your Mobile no' className='block border p-2 rounded-lg w-[30rem] text-lg' />
                <input type="text" placeholder='State' className='block border p-2 rounded-lg w-[30rem] text-lg' />
                <input type="text" placeholder='City' className='block border p-2 rounded-lg w-[30rem] text-lg' />
                <input type="tel" placeholder='Pincode' className='block border p-2 rounded-lg w-[30rem] text-lg' />
                <input type="text" placeholder='Area/ street/ village' className='block border p-2 rounded-lg w-[30rem] text-lg'/>
                <input type="text" placeholder='Flat/ House no' className='block border p-2 rounded-lg w-[30rem] text-lg'/>
                <label htmlFor='check' className='space-x-3'>
                    <input type="checkbox" id='check' /> 
                    
                    <span className='text-[#B1B1B1]'>Make this is my default address.</span>
                </label>
                <div className="flex  justify-center">
            <div className="border-[#E76308] text-center border-2 block p-2 w-44 font-bold text-[#E76308] rounded-2xl hover:bg-orange-500 hover:text-white cursor-pointer mt-5"  onClick={toggleDrawer}>Add Address</div>
          </div>
            </form>

        </div>
    </div>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
                size={600}
            >
                <div><DrawerAddAddress value={toggleDrawer}/></div>
            </Drawer>
    </>
  )
}

export default CartAddress
