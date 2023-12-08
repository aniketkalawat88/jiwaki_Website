import React from "react";
import { NavLink } from "react-router-dom";

function Cart({ ele }) {
  // console.log(ele);
  return (
    <>
      <div className="w-72 relative shadow-2xl p-5 m-5 border-2 rounded-md hover:shadow-black">
        <div className="absolute right-4 text-[#444444] text-xl cursor-pointer hover:text-red-600">
          <i className="fa-solid fa-heart"></i>
        </div>
        <div className="cursor-pointer hover:opacity-90">
          <img src={ele.image} alt="no preview" />
        </div>
        <div className=" space-y-3">
          <div className="text-[#292929] font-semibold hover:underline">
            {ele.name}
          </div>
          <div className="flex justify-between">
            <div>
              <span className="bg-[#187618] text-white text-xs rounded-sm text-center font-semibold px-1  ">
                {ele.rating}★
              </span>
              <span className="text-xs font-bold text-[#8E8E8E] p-1">
                {ele.review} ratings
              </span>
            </div>
            <div className="">
              <span className="text-xs text-[#8E8E8E] p-1 line-through">
                ₹{ele.oldPrice}
              </span>
              <span className="font-semibold text-xl">₹{ele.newPrice}</span>
            </div>
          </div>
            <NavLink to="/ProductDetail">
            <button className="text-white bg-[#EA5F05] w-[100%] rounded-sm p-1 text-xs font-semibold hover:font-bold hover:bg-black">
              <i className="fa-solid fa-cart-shopping m-1"></i>Add to Card
            </button>
            </NavLink>
        </div>
      </div>
    </>
  );
}

export default Cart;
