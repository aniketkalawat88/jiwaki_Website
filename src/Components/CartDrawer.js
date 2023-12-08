import React, { useState } from "react";
import { cardData } from "../Pages/DummyData";
import DrawerPromoCode from "./DrawerPromoCode";

function CartDrawer({value}) {
  const [count, setCount] = useState(0);
  const CountDec = () => {
    if (count > 0) setCount(count - 1);
  };
  const CountInc = () => {
    if (count < 7) setCount(count + 1);
  };

  return (
    <>
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
            My Cart
          </span>
        </div>
      <div className="overflow-y-scroll z overflow-x-hidden h-[94vh]  ">

        {cardData?.CartDetail?.map((ele, i) => (
          <div className="flex border w-[33rem] justify-between px-5 mx-8 m-3 p-2 rounded-xl hover:shadow-2xl ">
            <div className="self-center">
              <img
                src={require("../Assests/Images/cart.png")}
                alt="no preview"
                className="w-28"
              />
              <div className="font-semibold flex text-xs justify-between px-1 w-28 border text-[#E76308] border-[#E76308] rounded-lg ">
                <span className="cursor-pointer">
                  <i className="fa-solid fa-minus" onClick={CountDec}></i>
                </span>
                <span>{count}</span>
                <span className="cursor-pointer">
                  <i className="fa-solid fa-plus" onClick={CountInc}></i>
                </span>
              </div>
            </div>
            <div className="w-72 space-y-1 space-x-2">
              <h1 className="font-semibold hover:underline cursor-pointer">
                {ele.name}
              </h1>
              <span className="text-[#187618] text-sm">{ele.rate}★</span>
              <span className="text-[#8E8E8E] text-sm">{ele.rating} ratings</span>
              <h1 className="text-[#187618] font-bold text-base">
                ₹ {ele.price}
              </h1>
              <div className="flex justify-between">
                <button className="border text-xs border-[#E76308] p-1 w-32 rounded-lg text-[#E76308] hover:bg-[#E76308] hover:text-white">
                  Buy Now
                </button>
                <button className="border text-xs border-[#E76308] p-1 w-32 rounded-lg text-[#E76308] hover:bg-[#E76308] hover:text-white">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="border-2 border-orange-400 text-center mx-10 font-semibold text-sm text-orange-500 rounded-xl cursor-pointer hover:bg-orange-500 hover:text-white m-2">Add More items</div>
        <div><DrawerPromoCode /></div>
      </div>
    </>
  );
}

export default CartDrawer;
