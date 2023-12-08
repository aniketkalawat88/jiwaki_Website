import React from "react";
import { BlogDetailDummy } from "../Pages/DummyData";
import Cart from "../Blog/Cart";

function SuggestedKit() {
  return (
    <div className=" p-14 space-y-4 border-b-4">
      <div className="flex justify-between">
        <div className="font-bold text-3xl hover:underline">Suggested Kit</div>
        <div className="text-[#187618] cursor-pointer font-bold hover:underline">
          See All
        </div>
      </div>
      <div className="flex justify-between">
        {BlogDetailDummy?.SuggestKit?.map((ele, i) => (
          <Cart ele={ele} key={i} />
        ))}
      </div>
    </div>
  );
}

export default SuggestedKit;
