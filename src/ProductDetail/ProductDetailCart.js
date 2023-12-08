import React from "react";
// import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import ProductSlider from "../Slides/ProductSlider";
import AddAddress from "../Components/AddAddress";

function ProductDetailCart() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="flex justify-center space-x-20 mt-16">
        <div>
          <ProductSlider />
        </div>

        <div className=" space-y-4 ">
          <h1 className="font-bold text-2xl cursor-pointer hover:underline w-[40rem]">
            Onion Hair Oil for Hair Regrowth and Hair Fall Control with
            Redensyl, 150ml
          </h1>
          <h3 className="text-[#828282] text-2xl font-semibold hover:font-bold cursor-pointer">
            Boosts Hair Growth | Adds Strength & Shine
          </h3>
          <div className="space-x-4">
            <span className="text-green-800 font-semibold text-lg">4.5★</span>
            <span className="text-[#828282] font-semibold text-lg">
              987 ratings
            </span>
          </div>
          <div className="text-[#828282] font-semibold text-2xl">
            Select Variant
          </div>
          <div className="flex space-x-4">
            <div className="w-40 space-x-4 cursor-pointer hover:shadow-2xl">
              <div className="bg-orange-500 rounded-t-2xl p-2 px-4 text-white font-bold hover:bg-[#8E8E8E]">
                250ml
              </div>
              <div className="space-x-3 p-1">
                <span className="font-bold ">₹353</span>
                <span className="font-bold text-[#8E8E8E] line-through">
                  ₹499
                </span>
              </div>
              <span className="font-bold text-sm p-1 text-orange-500 block">
                ₹87/ 100ml
              </span>
            </div>
            <div className="w-40 space-x-4 cursor-pointer hover:shadow-2xl">
              <div className="bg-orange-500 rounded-t-2xl p-2 px-4 text-white font-bold hover:bg-[#8E8E8E]">
                250ml
              </div>
              <div className="space-x-3 p-1">
                <span className="font-bold ">₹353</span>
                <span className="font-bold text-[#8E8E8E] line-through">
                  ₹499
                </span>
              </div>
              <span className="font-bold text-sm p-1 text-orange-500 block">
                ₹87/ 100ml
              </span>
            </div>
            <div className="w-40 space-x-4 cursor-pointer hover:shadow-2xl">
              <div className="bg-orange-500 rounded-t-2xl p-2 px-4 text-white font-bold hover:bg-[#8E8E8E]">
                250ml
              </div>
              <div className="space-x-3 p-1">
                <span className="font-bold ">₹353</span>
                <span className="font-bold text-[#8E8E8E] line-through">
                  ₹499
                </span>
              </div>
              <span className="font-bold text-sm p-1 text-orange-500 block">
                ₹87/ 100ml
              </span>
            </div>
            <div className="w-40 space-x-4 cursor-pointer hover:shadow-2xl">
              <div className="bg-orange-500 rounded-t-2xl p-2 px-4 text-white font-bold hover:bg-[#8E8E8E]">
                250ml
              </div>
              <div className="space-x-3 p-1">
                <span className="font-bold ">₹353</span>
                <span className="font-bold text-[#8E8E8E] line-through">
                  ₹499
                </span>
              </div>
              <span className="font-bold text-sm p-1 text-orange-500 block">
                ₹87/ 100ml
              </span>
            </div>
          </div>

          <div className="flex py-5">
            <div>
              <span className="font-bold text-3xl text-[#187618] hover:text-black">
                ₹ 353
              </span>
              <p className="text-[#828282] text-xs italic">
                Include of all taxes
              </p>
            </div>
            <div className="space-x-3 text-2xl">
              <span className="text-[#A4A4A4]">
                MRP <span className=" line-through"> ₹ 393.00</span>
              </span>
              <span className="text-[#A4A4A4]">|</span>
              <span className="text-[#E76308] font-semibold">10% OFF</span>
            </div>
          </div>

          <div className="space-x-4">
            <button
              className="bg-[#E76308] p-2 w-52 rounded-lg text-white font-bold space-x-1 hover:bg-[#828282]"
              type="button"
              onClick={() => setShowModal(true)}
            >
              <i class="fa-solid fa-cart-shopping"></i>
              <span>Add to Card</span>
            </button>

            <button className="text-[#E76308] p-2 w-52 rounded-lg bg-white font-bold border-[#E76308] border-2 hover:bg-[#828282] hover:text-white">
              Buy Now
            </button>
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
                  <AddAddress />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default ProductDetailCart;
