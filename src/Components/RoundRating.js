import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ProductDetailDummy } from "../Pages/DummyData";

function  RoundRating() {
  return (
    <div className="space-y-5 border-2 w-[40rem] rounded-xl h-36 p-5 ">
    {ProductDetailDummy?.CircularRating?.map((ele , i)=>(
      <ul className="flex w-[35rem] justify-center space-x-12 ">
      <div className="">

        <li className="w-16 font-bold ms-2">
          <CircularProgressbar
            value={ele.one}
            text={`${(ele.one/100)*5}`}
            styles={buildStyles({
              textSize: '35px',
              pathColor: `green`,
              textColor: "black",
              backgroundColor: "green",
            })}
          />
        </li>
          <span className="block font-bold w-24">Easy to use</span>
      </div>
        <div>

        <li className="w-16 font-bold ms-7">
          <CircularProgressbar
            value={ele.two}
            text={`${(ele.two/100)*5}`}
            styles={buildStyles({
              textSize: '35px',
              pathColor: `green`,
              textColor: "black",
              backgroundColor: "green",
            })}
          />
        </li>
          <span className="block font-bold w-32">Recommendated</span>
        </div>
        <div>

        <li className="w-16 font-bold ">
          <CircularProgressbar
            value={ele.three}
            text={`${(ele.three/100)*5  }`}
            styles={buildStyles({
              textSize: '35px',
              pathColor: `green`,
              textColor: "black",
              backgroundColor: "green",
            })}
          />
        </li>
          <span className="block font-bold ms-2">Quality</span>
        </div>
        <div>

        <li className="w-16 font-bold ms-2">
          <CircularProgressbar
            value={ele.Four}
            text={`${(ele.Four/100)*5}`}
            styles={buildStyles({
              textSize: '35px',
              pathColor: `green`,
              textColor: "black",
              backgroundColor: "green",
            })}
          />
        </li>
          <span className="block font-bold w-24">Health Care</span>
        </div>
      </ul>

    ))}
    </div>
  );
}

export default RoundRating;
