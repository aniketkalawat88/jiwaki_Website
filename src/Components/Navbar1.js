import React from "react";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import CartDrawer from "./CartDrawer";

function Navbar1() {
  const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

  return (
    <>
      <nav className="flex justify-between p-5 mx-16">
        <div className="flex gap-36">
          <div className="cursor-pointer">
            <img
              src={require("../Assests/Images/01.png")}
              alt="no preview"
              className="h-16"
            />
          </div>

          <div className=" text-center rounded-xl h-10 border">
            <label htmlFor="sear">
              <span className=" p-2 cursor-pointer">
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                type="text"
                name=""
                id="sear"
                placeholder="Search for Beauty..."
                className="w-96 p-2 outline-none"
              />
            </label>

            <span className="text-white bg-orange-600 rounded-e-xl p-2 px-6 cursor-pointer hover:text-black ">
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
        </div>

        <div className="flex space-x-6">
          <div className="">
          <button onClick={toggleDrawer} className="space-x-2">
            <i className="fa-solid fa-cart-shopping text-orange-600 cursor-pointer hover:text-black"></i>
            <span className="text-xs font-semibold cursor-pointer hover:text-orange-600">
              Cart
            </span>
            </button>
          </div>
          <div className="space-x-2">
            <i className="fa-solid fa-user text-orange-600 cursor-pointer hover:text-black"></i>
            <span className="text-xs font-semibold cursor-pointer hover:text-orange-600">
              Login
            </span>
          </div>
        </div>
      </nav>

      <Drawer 
          open={isOpen}
          onClose={toggleDrawer}
          direction='right'
          className='bla bla bla'
          size={600}
      >
          <div className="h-96"><CartDrawer value={toggleDrawer}/></div>
      </Drawer>
    </>
  );
}

export default Navbar1;
