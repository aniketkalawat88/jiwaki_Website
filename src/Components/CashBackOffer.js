import React from "react";

function CashBackOffer({value1, value2}) {
  return (
    <div className="rounded-xl border-slate-500 border-2 bg-[#FAFAFA] p-1 px-2 flex-wrap w-60 cursor-pointer hover:shadow-2xl">
      <h1 className="font-bold text-2xl ">
        <i className="fa-solid fa-percent text-orange-400  text-xl rounded-full p-1 divide-dotted"></i>
        <span className=" text-[#E76308] text-xl m-2">{value1}</span>
      </h1>
      <p className="font-semibold text-lg hover:underline">
        {value2}
      </p>
      <span className="text-[#187618] font-bold italic text-xs">{`1 Offer >`}</span>
    </div>
  );
}

export default CashBackOffer;
