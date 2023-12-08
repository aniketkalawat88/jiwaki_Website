import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { ProductDetailDummy } from "../Pages/DummyData";

function CustomerRating() {

  return (
    <div className="">

      {ProductDetailDummy?.Rating?.map((ele, i)=>(
        <div className="space-y-4 border-2 w-[40rem] p-5 rounded-xl ">
          <h1 className="text-xl font-semibold">Ratings</h1>
          <div className="flex space-x-5 justify-between">
            <ul className="flex text-yellow-400 space-x-5 w-44">
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
            <div>{ele.Five} Users</div>
            <div className=" w-48">
              <ProgressBar completed={(ele.Five/100)} />
            </div>
          </div>
          <div className="flex space-x-5 justify-between">
            <ul className="flex text-yellow-400 space-x-5 w-44">
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
            <div>{ele.Four} Users</div>
            <div className=" w-48">
              <ProgressBar completed={(ele.Four/100)} />
            </div>
          </div>
          <div className="flex space-x-5 justify-between">
            <ul className="flex text-yellow-400 space-x-5 w-44">
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
            <div>{ele.Three} Users</div>
            <div className="w-48">
              <ProgressBar completed={(ele.Three/100)} />
            </div>
          </div>
          <div className="flex space-x-5 justify-between">
            <ul className="flex text-yellow-400 space-x-5 w-44">
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
            </ul>
            <div>{ele.two} Users</div>
            <div className=" w-48">
              <ProgressBar completed={(ele.two/100)} />
            </div>
          </div>
          <div className="flex space-x-5 justify-between">
            <ul className="flex text-yellow-400 space-x-5 w-44">
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
            </ul>
            <div>{ele.one} Users</div>
            <div className="w-48">
              <ProgressBar completed={ele.one} />
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}

export default CustomerRating;
