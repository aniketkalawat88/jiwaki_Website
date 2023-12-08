import React from "react";
import BlogView from "./BlogView";
import { BlogDataDummy } from "../Pages/DummyData";
import PopularKeyword from "../Components/PopularKeyword";

function BlogMostView() {
  return (
    <div className="p-10 m-3 space-y-10 ">
      <div className="font-bold text-3xl hover:underline mx-8">
        Most Viewers likes
      </div>
      <div className="flex">
        <div>
          {BlogDataDummy?.MostViewLike?.map((ele, i) => (
            <div className="m-5">
              <BlogView ele={ele} key={i} />
            </div>
          ))}
        </div>
        <div className="mx-20 w-[50rem]">
          <PopularKeyword />
        </div>
      </div>
    </div>
  );
}

export default BlogMostView;
