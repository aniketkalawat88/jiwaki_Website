import React from "react";
import { BlogDataDummy } from "../Pages/DummyData";

function PopularKeyword() {
  return (
    <div className="space-y-4">
      <div className="flex mx-10 ">
        <span className="text-[#E76308] font-bold text-xl">
          Popular keywords
        </span>
        <svg
          className="m-4"
          xmlns="http://www.w3.org/2000/svg"
          width="369"
          height="1"
          viewBox="0 0 369 1"
          fill="none"
        >
          <path d="M0.5 0.5H369" stroke="#E76308" />
        </svg>
      </div>
      <div className=" ">
        <ul className="flex space-x-10 flex-wrap font-semibold text-[#838383] text-xl text-left space-y-6 ">
          <li></li>
          {BlogDataDummy?.popularKeyword?.map((ele, i) => (
            <li className="border p-2">{ele.data}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PopularKeyword;
