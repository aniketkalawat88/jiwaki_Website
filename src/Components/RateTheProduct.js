import React from "react";

function RateTheProduct() {
  return (
    <div>
      <div className="font-semibold text-2xl m-5">Rate this product</div>
      <div>
        <ul className="flex m-5 space-x-5 justify-center text-2xl text-[#444444]">
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
        </ul>
      </div>
      <div className="border-2 rounded-2xl">
        <div className="flex justify-between m-5">
          <span className="font-semibold text-xl">Easy to use</span>
          <ul className="text-[#444444] flex space-x-5 text-xl">
            <li>
              <i className="fa-solid fa-star"></i>
            </li>
            <li>
              <i className="fa-solid fa-star"></i>
            </li>
            <li>
              <i className="fa-solid fa-star"></i>
            </li>
            <li>
              <i className="fa-solid fa-star"></i>
            </li>
            <li>
              <i className="fa-solid fa-star"></i>
            </li>
          </ul>
        </div>
        <div className="flex justify-between m-5">
          <span className="font-semibold text-xl">Recommendated</span>
          <ul className="text-[#444444] flex space-x-5 text-xl">
            <li>
              <i className="fa-solid fa-star"></i>
            </li>
            <li>
              <i className="fa-solid fa-star"></i>
            </li>
            <li>
              <i className="fa-solid fa-star"></i>
            </li>
            <li>
              <i className="fa-solid fa-star"></i>
            </li>
            <li>
              <i className="fa-solid fa-star"></i>
            </li>
          </ul>
        </div>
        <div className="flex justify-between m-5">
          <span className="font-semibold text-xl">Quality</span>
          <ul className="text-[#444444] flex space-x-5 text-xl">
            <li>
              <i className="fa-solid fa-star"></i>
            </li>
            <li>
              <i className="fa-solid fa-star"></i>
            </li>
            <li>
              <i className="fa-solid fa-star"></i>
            </li>
            <li>
              <i className="fa-solid fa-star"></i>
            </li>
            <li>
              <i className="fa-solid fa-star"></i>
            </li>
          </ul>
        </div>
        <div className="flex justify-between m-5">
          <span className="font-semibold text-xl">Health Care</span>
          <ul className="text-[#444444] flex space-x-5 text-xl">
            <li>
              <i className="fa-solid fa-star"></i>
            </li>
            <li>
              <i className="fa-solid fa-star"></i>
            </li>
            <li>
              <i className="fa-solid fa-star"></i>
            </li>
            <li>
              <i className="fa-solid fa-star"></i>
            </li>
            <li>
              <i className="fa-solid fa-star"></i>
            </li>
          </ul>
        </div>

        <textarea
          name=""
          id=""
          cols="67"
          rows="3"
          placeholder="Share your experience"
          className="rounded-lg border-2 m-5 px-5 p-1"
        ></textarea>
        <div className="px-5 w-[100%] text-right  ">
          <button className="bg-[#E76308] text-white p-1 w-32 my-3 rounded-md  hover:bg-[#444444]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default RateTheProduct;
