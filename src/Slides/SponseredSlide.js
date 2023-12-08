import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cardData } from "../Pages/DummyData";


function SponseredSlide() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
    slidesToShow: 4,
  };
  return (
    <div className="w-[100%] flex justify-center mt-20">
      <div className="w-[60%]">
          <Slider {...settings}>
        {cardData?.sponsered?.map((ele, i) => (
            <div className="flex justify-center w-2 ">
                <span className="h-44">{ele.logo}</span>
                <span className="">{ele.name}</span>
            </div>
            
        ))}
          </Slider>
      </div>
    </div>
  );
}

export default SponseredSlide;
