import React from "react";
import CashBackOffer from "../Components/CashBackOffer";

function ProductDetailAddress() {
  return (
    <div className="flex justify-center space-x-16">
      <div className="m-8 space-y-4">
        <h1 className="text-xl font-semibold">Share the Medicine</h1>
        <div className="ml-5 flex w-96 justify-between">
          <img
            src={require("../Assests/Images/linked.png")}
            alt="no preview"
            className="h-[44px] w-[44px]"
          />
          <img
            src={require("../Assests/Images/fb.png")}
            alt="no preview"
            className="h-[44px] w-[44px]"
          />
          <img
            src={require("../Assests/Images/Xbra.png")}
            alt="no preview"
            className="h-[44px] w-[44px]"
          />
          <img
            src={require("../Assests/Images/insta.png")}
            alt="no preview"
            className="h-[44px] w-[44px]"
          />
        </div>
        <div className="bg-[#58B6BD] w-[30rem] p-5 rounded-lg text-white space-y-2 flex">
          <div className=" justify-center mx-5">
            <h1 className="font-bold text-xl hover:text-black">
              Buy Membership
            </h1>
            <ul className=" mx-2">
              <li className="cursor-pointer hover:text-black">
                Discount coupon
              </li>
              <li className="cursor-pointer hover:text-black">
                Get Rs 50 from each referral
              </li>
              <li className="cursor-pointer hover:text-black">
                Get referral bonus 10%
              </li>
              <li className="cursor-pointer hover:text-black">
                Get Free Shipping
              </li>
            </ul>
            <button className="text-[#E76308] bg-white rounded-full p-2 text-xs w-24 hover:bg-black hover:text-white">
              Buy Now
            </button>
          </div>
          <div>
            <img
              src={require("../Assests/Images/04.png")}
              alt="no preview"
              className="w-52 mt-5"
            />
          </div>
        </div>
      </div>

      <div className="space-y-7 mt-16">
        <label htmlFor="deli" className="space-y-3">
          <h1 className="font-bold text-2xl cursor-pointer hover:text-orange-600">
            Delivering To
          </h1>
          <input
            type="text"
            name=""
            id="deli"
            placeholder="Add Delivery Address"
            className="shadow-lg p-3 border-orange-500 outline-none rounded-2xl w-56 font-semibold"
          />
        </label>
        <div>
          <div className="font-bold text-xl">Offers</div>
          <div className="flex space-x-3">
            <CashBackOffer value1="Cashback" value2="₹20 cashback. Buy with items in cart"/>
            <CashBackOffer value1="Bank Offer" value2="Up to ₹7000.00 discount on the selected credit cart"/>
            <CashBackOffer value1="Partner offer" value2="Get GST invoice. save up to 20% Business Purchage"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailAddress;
