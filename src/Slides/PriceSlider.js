import React from "react";

function PriceSlider() {
  return (
    <div>
      <div className="border-2 w-40 space-x-4 cursor-pointer">
        <div className="bg-orange-500 rounded-t-2xl p-2 px-4 text-white font-bold hover:bg-[#8E8E8E]">
          250ml
        </div>
        <div className="space-x-3 p-1">
          <span className="font-bold ">₹353</span>
          <span className="font-bold text-[#8E8E8E] line-through">₹499</span>
        </div>
        <span className="font-bold text-sm p-1 text-orange-500 block">
          ₹87/ 100ml
        </span>
      </div>
    </div>
  );
}

export default PriceSlider;
