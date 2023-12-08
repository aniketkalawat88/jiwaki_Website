import React from "react";
// import Offers from "../Components/Offers";
// import Navbar1 from "../Components/Navbar1";
// import Navbar2 from "../Components/Navbar2";
import HomeSlider1 from "../Slides/HomeSlider1";
import NewLauchBlog from "../Blog/NewLauchBlog";
import BeautyBlog from "../Blog/BeautyBlog";
import SimpleSlider from "../Components/SimpleSlider";
import SkinCare from "../Blog/SkinCare";
import HomeSlider2 from "../Slides/HomeSlider2";
import BabyCare from "../Blog/BabyCare";
import GiftPackBlog from "../Blog/GiftPackBlog";
import Youtube from "../Components/Youtube";
import FAQ from "../Other/FAQ/FAQ";
import Review from "../Other/CustomerReview.js/Review";
import AppInform from "../Other/AppInform";
import ToasterDemo from "../Components/ToasterDemo";

function Home() {
  return (
    <div className="">
      {/* <Offers /> */}
      <nav>
        {/* <Navbar1 />
        <Navbar2 /> */}
      <ToasterDemo/>

      </nav>
        <HomeSlider1 />
      <main>
        <NewLauchBlog />
        <BeautyBlog />
      <SimpleSlider />
        <SkinCare />

        <HomeSlider2 />

        <BabyCare />
        <GiftPackBlog />
      </main>
      <Youtube />
      <footer>
        <FAQ />
        <Review />
        <AppInform />
      </footer>

    </div>
  );
}

export default Home;
