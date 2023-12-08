import React from "react";
import Slider from "react-slick";
import Customer from "./Customer";
import { cardData } from "../../Pages/DummyData";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Review() {
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 4,
        slidesToShow: 5,
      };
  return (
    <div className="">
        <div className="text-center text-3xl font-bold hover:underline">What is customer say</div>
        <div className="flex justify-center p-5">
            <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="179"
            height="8"
            viewBox="0 0 179 8"
            fill="none"
            >
            <path
                d="M0 4C0 3.44238 0.442129 2.98518 0.999439 2.9665L89.5 0L178.001 2.9665C178.558 2.98518 179 3.44238 179 4C179 4.55762 178.558 5.01482 178.001 5.0335L89.5 8L0.99944 5.0335C0.442131 5.01482 0 4.55762 0 4Z"
                fill="url(#paint0_linear_61_3006)"
                fill-opacity="0.5"
            />
            <defs>
                <linearGradient
                id="paint0_linear_61_3006"
                x1="1.02107e-06"
                y1="4.00002"
                x2="184"
                y2="4.00004"
                gradientUnits="userSpaceOnUse"
                >
                <stop stop-color="#FFA500" stop-opacity="0" />
                <stop offset="0.495481" stop-color="#FFA500" />
                <stop offset="1" stop-color="#FFA500" stop-opacity="0" />
                </linearGradient>
            </defs>
            </svg>
        </div>
        
        <div className="w-[99%]">
            <div className="w-[99%]">
                <Slider {...settings}>
                    {cardData?.Review?.map((ele , i)=>(
                        <Customer ele={ele} key={i}/>
                    ))}
                </Slider>

            </div>
        </div>
    </div>
  );
}

export default Review;
