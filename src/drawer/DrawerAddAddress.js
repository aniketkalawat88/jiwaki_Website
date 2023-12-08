import React from "react";
import { cardData } from "../Pages/DummyData";


function DrawerAddAddress({ value }) {
  
  return (
    <div className="overflow-y-scroll scrollbar-hide h-[99vh] overflow-x-hidden">
      <div className="">
        <div className="flex space-x-3 shadow-xl p-1 cursor-pointer fixed top-0  bg-white w-[100%]">
          <svg
            onClick={value}
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
          <span
            className="m-1 font-semibold text-[#E76308] text-xl"
            onClick={value}
          >
            My Cart
          </span>
        </div>
        <div className="flex mt-16 justify-between p-5 border-2 rounded-lg m-5 ">
          <div className="text-sm">
            <span className="font-semibold block">Deliver to : Sanjit kumar, 825301</span>
            <span>sindhur vinoba nagar, hazaribagh</span>
          </div>
          <button className="border-2 hover:bg-orange-500 hover:text-white border-orange-500 text-orange-500 p-1 w-24 font-semibold text-sm rounded-lg">change</button>
        </div>
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
                    <i className="fa-solid fa-minus" ></i>
                  </span>
                  <span>0</span>
                  <span className="cursor-pointer">
                    <i className="fa-solid fa-plus" ></i>
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
        
      </div>
      <div>
        
    <div className="border rounded-xl mx-10 px-3 m-1 text-xs p-1 ">
      <div className="text-[#B5B5B5] font-bold">Apply PROMOCODE</div>
      <label htmlFor="code" className="flex justify-between hover:text-green-400 hover:underline">
        <input type="checkbox" id="code" className="rounded-full"/>
        <span className="font-bold">Apply Promo Code</span>
        <svg className="hover:text-green-400"
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="24"
          viewBox="0 0 33 24"
          fill="none"
        >
          <path
            d="M12.4336 4.08002L21.1269 10.6C22.1536 11.37 22.1536 12.63 21.1269 13.4L12.4336 19.92"
            stroke="#222222"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </label>
      <div className="text-[#B5B5B5]">Get flat discount/Vouchers application in payment options.</div>
    </div>  
    
    {cardData?.MRP?.map((ele,i)=>(
     <div className="">
      <div className="border rounded-xl mx-10 px-3 m-2 p-1 text-xs">
          <div className="text-[#B5B5B5] font-bold text-sm">Payment detail</div>
          <ul className="px-3 space-y-1">
              <li className="flex justify-between font-medium text-[#5B4E4E]"><span>MRP Total </span> <span>₹ {ele.total}</span></li>
              <li className="flex justify-between font-medium text-[#5B4E4E]"><span>Discount</span> <span>₹ {ele.discount}</span></li>
              <li className="flex justify-between font-medium text-[#5B4E4E]"><span>Promo Code</span> <span>₹ {ele.PromoCode}</span></li>
              <li className="flex justify-between font-medium text-[#5B4E4E]"><span>Delivery charge</span> <span>₹ 0.{ele.DeliveryCharge}</span></li>
              <li className="flex justify-between font-medium text-[#E76308]"><span>Total Payable</span> <span>₹ {ele.TotalPay}</span></li>
              <li className="font-medium text-[#187618] m-2">You are save ₹ 100.00 on this order</li>
          </ul>
      </div>
      
      <div className="flex justify-between px-20 shadow-2xl shadow-black relative bg-white  p-2">
            <div className="">
                <span className="text-[#187618] text-xl font-semibold">₹ {ele.TotalPay}</span>
                <span className="text-[#1741D4] text-xs font-bold block cursor-pointer hover:underline">View detail</span>
            </div>
            <button className="w-36 text-sm hover: my-2 rounded-lg bg-[#187618] text-white hover:bg-green-900"  >
             Continue</button>
        </div>

     </div> 
    
    ))}
      </div>
      
    </div>
  );
}

export default DrawerAddAddress;
