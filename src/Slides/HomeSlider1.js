import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cardData } from "../Pages/DummyData";


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "" , position:'absolute' , right:'0' , }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "", position:'absolute' , marginLeft:'25px' , top:'190px' }}
        onClick={onClick}
      />
    );
  }
  function HomeSlider1() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="slider-container ">
        <Slider {...settings}>
          {cardData?.HomeSlide?.map((ele, i) => (
            <div>
              <img src={ele.image} alt="" className="h-96 w-[100%]" />
            </div>
          ))}
        </Slider>
      </div>
    )
  }

  export default HomeSlider1
