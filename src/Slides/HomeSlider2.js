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

function HomeSlider2() {
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
            {cardData?.HomeSlide2?.map((ele, i) => (
             <div className='relative'>
                <div className=' '>
                    <img src={ele.image} alt="" className="h-96 w-[100%] absolute" />
                </div>
                <div className='relative text-white text-center h-96 w-[100%] top-16 object-cover'>
                    <div className='space-y-6 grid justify-items-center'>
                        <div className='text-3xl w-[25rem] font-semibold'>Natural, and 100% toxin-free baby and beauty products</div>
                        <div className='w-[25rem]'>Get amazing deals and start your toxin-free skin, hair, and baby care journey.</div>
                        <button className='text-[#E76308] bg-white p-4 font-semibold text-xl rounded-full w-44 shadow-xl shadow-orange-300 hover:text-orange-900 hover:border hover:border-orange-600'>
                        <a href="https://www.google.com">Explore Now</a></button>
                    </div>
                </div>
               
             </div>
            ))}
          </Slider>
        </div>
      )
    }

export default HomeSlider2
