import React from "react";

function Youtube() {
  return (
    <div className=" flex justify-between m-16  ">
      <div className="">
        <iframe
          width="650"
          height="400"
          className="rounded-lg"
          src="https://www.youtube.com/embed/kyaCzFvWbdM?si=fD4bSE-IaGfgKuww"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="content-center w-[32rem] justify-center space-y-5 m-5">
        <span className="text-2xl font-bold">Naturally Growing Skin</span>
        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis dui orci. Quisque et lectus ultricies, malesuada lectus at, finibus ligula. Donec et posuere erat. Ut orci nibh, laoreet at dolor vel, mollis volutpat augue. Quisque feugiat, quam placerat dignissim suscipit, odio erat euismod purus, quis sodales tellus purus non enim. Nunc ullamcorper ipsum vitae tincidunt auctor. quam placerat dignissim suscipit, odio erat euismod purus, quis sodales tellus purus non enim. Nunc ullamcorper ipsum vitae tincidunt auctor.
        </p>
        <button className="text-orange-600 font-bold p-3 rounded-full shadow-2xl shadow-orange-600 w-44 hover:bg-orange-400 hover:text-white">Explore Now</button>
      </div>
    </div>
  );
}

export default Youtube;
