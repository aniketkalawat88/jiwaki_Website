import React from "react";

function AppInform() {
  return (
    <div className="flex justify-between items-center m-44">
      <div className="flex ">
       
      <img
          src={require("../Assests/Images/mobile.png")}
          alt="no preview"
          className="h-[33rem] relative"
        />
        <div className="flex w-52 shadow absolute left-16 mt-64 bg-white rounded-xl ">
             <div className="space-y-2 p-2">
              <span className="">Have a different problem in mind ?</span>
              <span className="hover:underline cursor-pointer">Join the membership</span>
              <button className="text-orange-600 font-bold p-1 rounded-full shadow-2xl shadow-orange-600 w-32 hover:bg-orange-400 hover:text-white">
                  Join Now
              </button>
             </div>
             <div className=" cursor-pointer">
              <img src={require('../Assests/Images/mobile3.png')} alt="no preview" className="mt-4"/>
             </div>
          </div>
        
        <div className="absolute">
          <img
            src={require("../Assests/Images/mobile2.png")}
            alt="no preview"
            className="h-[14rem] m-48 hover:opacity-80"
          />
          </div>
         
        
      </div>



      
      <div className="space-y-4">
        <div className="font-bold text-3xl w-72 hover:underline">
          Download the Jiwaki Mobile App
        </div>
        <div className="flex">
          <span className="bg-[#E76308B0] p-2 m-2 h-10 w-10 rounded-full text-center hover:bg-white hover:text-black text-white">
            <i className="fa-solid fa-envelope hover:cursor-pointer "></i>
          </span>
          <div className="w-80 text-[#555]">
            <span className="font-semibold text-xl cursor-pointer hover:text-black hover:font-bold">Feature 1</span>
            <p className="hover:text-black hover:font-semibold">
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatu
            </p>
          </div>
        </div>
        <div className="flex">
          <span className="bg-[#E76308B0] p-2 m-2 h-10 w-10 rounded-full text-center hover:bg-white hover:text-black text-white">
            <i className="fa-solid fa-envelope hover:cursor-pointer "></i>
          </span>
          <div className="w-80 text-[#555]">
            <span className="font-semibold text-xl cursor-pointer hover:text-black hover:font-bold">Feature 1</span>
            <p className="hover:text-black hover:font-semibold">
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatu
            </p>
          </div>
        </div>
        <div className="flex">
          <span className="bg-[#E76308B0] p-2 m-2 h-10 w-10 rounded-full text-center hover:bg-white hover:text-black text-white">
            <i className="fa-solid fa-envelope hover:cursor-pointer "></i>
          </span>
          <div className="w-80 text-[#555]">
            <span className="font-semibold text-xl cursor-pointer hover:text-black hover:font-bold">Feature 1</span>
            <p className="hover:text-black hover:font-semibold">
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatu
            </p>
          </div>
        </div>

        <button className="text-orange-600 font-bold p-3 rounded-full shadow-2xl shadow-orange-600 w-44 hover:bg-orange-400 hover:text-white space-x-2">
          <span> Download Now</span>
          <i class="fa-brands fa-google-play"></i>
        </button>
      </div>
    </div>
  );
}

export default AppInform;
