import React from "react";
import ProductDetailCart from "../ProductDetail/ProductDetailCart";
import ProductDetailAddress from "../ProductDetail/ProductDetailAddress";
// import ProductDetailNavbar from "../ProductDetail/ProductDetailNavbar";
import ProductDetailData from "../ProductDetail/ProductDetailData";
import ProductDetailRating from "../ProductDetail/ProductDetailRating";
import FAQ from "../Other/FAQ/FAQ";
import NewLauchBlog from "../Blog/NewLauchBlog";
import GiftPackBlog from "../Blog/GiftPackBlog";

function ProductDetail() {
  return (
    <div>
        <ProductDetailCart />
        <ProductDetailAddress/>
        {/* <ProductDetailNavbar/> */}
        <ProductDetailData/>
        <ProductDetailRating/>
        <FAQ/>
        <NewLauchBlog/>
        <GiftPackBlog/>

    </div>
  );
}

export default ProductDetail;
