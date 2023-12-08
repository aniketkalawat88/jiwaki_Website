import React from "react";
// import Offers from "../Components/Offers";
// import Navbar1 from "../Components/Navbar1";
// import Navbar2 from "../Components/Navbar2";
import BlogOpen from "../BlogDemo/BlogOpen";
import BlogNavbar from "../BlogDemo/BlogNavbar";
import BlogData from "../BlogDemo/BlogData";
import HomeSlider2 from "../Slides/HomeSlider2";
import RecentBlog from "../BlogDemo/RecentBlog";
import BlogMostView from "../BlogDemo/BlogMostView";
// import { Routes } from "react-router-dom";

function Blog() {
  return (
    <div>
      <header>
        {/* <Offers />
        <Navbar1 />
        <Navbar2 /> */}
      </header>
      <main>
        <BlogOpen value="Blog"/>
        <BlogNavbar />
        <BlogData />
        <HomeSlider2 />
        <RecentBlog />
        <BlogMostView />
      </main>
      <footer>
      <div className="h-72"></div>
      </footer>
    </div>
  );
}

export default Blog;
