import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { baseUrl } from "../Pages/DummyData";

function ProductSlider() {
    const settings = {
      customPaging: function(i) {
        return (
          <a href="/">
            <img src={`${baseUrl}/ProductImage${i + 1}.jpg`} alt="no preview" />

          </a>
          
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
    <div className="w-[30rem] h-[30rem] border-2 border-black">
    <Slider {...settings}>
      <div>
        <img src={baseUrl + "/ProductImage1.jpg"} alt="no preview"  />
      </div>
      <div>
        <img src={baseUrl + "/ProductImage2.jpg"} alt="no preview"  />
      </div>
      <div>
        <img src={baseUrl + "/ProductImage3.jpg"} alt="no preview"  />
      </div>
      <div>
        <img src={baseUrl + "/ProductImage4.jpg"}  alt="no preview" />
      </div>
      <div>
        <img src={baseUrl + "/ProductImage5.jpg"}  alt="no preview" />
      </div>
    </Slider>
      
    </div>
  )
}

export default ProductSlider
