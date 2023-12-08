import React from "react";
// import Offers from "../Components/Offers";
// import Navbar1 from "../Components/Navbar1";
// import Navbar2 from "../Components/Navbar2";
import HomeSlider1 from "../Slides/HomeSlider1";
import BeautyNavbar from "../Beauty/BeautyNavbar";
import BeautyCareProduct from "../Beauty/BeautyCareProduct";
import HomeSlider2 from "../Slides/HomeSlider2";
import NewLauchBlog from "../Blog/NewLauchBlog";
import GiftPackBlog from "../Blog/GiftPackBlog";

function Beauty() {
  return (
    <div>
      <header>
        {/* <Offers />
        <Navbar1 />
        <Navbar2 /> */}
        <HomeSlider1 />
      </header>

      <main>
        <BeautyNavbar />
        <BeautyCareProduct />
        <HomeSlider2/>
        <NewLauchBlog/>
      </main>
      <footer>
        <GiftPackBlog/>
        <div className="h-72"></div>
      </footer>
    </div>
  );
}

export default Beauty;
