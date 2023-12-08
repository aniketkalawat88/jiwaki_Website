import React from "react";
import { BlogDetailDummy } from "../Pages/DummyData";

function BlogDetail1() {
  return (
    <div>
    {BlogDetailDummy?.detail?.map((ele , i)=>(
        <div className="m-20 space-y-12">
          <div className="text-4xl font-semibold cursor-pointer">
            {ele.name}
          </div>
          <div className="w-[100%] space-y-4">
            <img
              src={require("../Assests/Images/Blog1.png")}
              alt="no preview"
              className="w-[100%] h-[33rem] object-cover cursor-pointer"
            />

            <div className="flex justify-between space-y-4">
              <div className="w-[40rem]  space-x-8 text-[#424242] bg-gradient-to-r from-orange-300 p-2 rounded-full font-semibold px-10 cursor-pointer">
                <img
                  src={require("../Assests/Images/Blog1.png")}
                  alt=""
                  className="w-7 h-7 object-cover rounded-full float-left"
                />
                <span>{ele.Idname}</span>
                <span>|</span>
                <span>{ele.ago}</span>
                <span>|</span>
                <span>{ele.view} Views</span>
              </div>
              <div className="flex space-x-10">
                <svg className="cursor-pointer hover:text-black hover:border"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3.9 12C3.9 10.29 5.29 8.9 7 8.9H11V7H7C5.67392 7 4.40215 7.52678 3.46447 8.46447C2.52678 9.40215 2 10.6739 2 12C2 13.3261 2.52678 14.5979 3.46447 15.5355C4.40215 16.4732 5.67392 17 7 17H11V15.1H7C5.29 15.1 3.9 13.71 3.9 12ZM8 13H16V11H8V13ZM17 7H13V8.9H17C18.71 8.9 20.1 10.29 20.1 12C20.1 13.71 18.71 15.1 17 15.1H13V17H17C18.3261 17 19.5979 16.4732 20.5355 15.5355C21.4732 14.5979 22 13.3261 22 12C22 10.6739 21.4732 9.40215 20.5355 8.46447C19.5979 7.52678 18.3261 7 17 7Z"
                    fill="#E76308"
                  />
                </svg>
                <svg className="cursor-pointer hover:text-black hover:border"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_198_15940)">
                    <path
                      d="M0 1.719C0 0.7695 0.789 0 1.7625 0H22.2375C23.211 0 24 0.7695 24 1.719V22.281C24 23.2305 23.211 24 22.2375 24H1.7625C0.789 24 0 23.2305 0 22.281V1.719ZM7.4145 20.091V9.2535H3.813V20.091H7.4145ZM5.6145 7.773C6.87 7.773 7.6515 6.942 7.6515 5.901C7.629 4.8375 6.8715 4.029 5.6385 4.029C4.4055 4.029 3.6 4.839 3.6 5.901C3.6 6.942 4.3815 7.773 5.5905 7.773H5.6145ZM12.9765 20.091V14.0385C12.9765 13.7145 13.0005 13.3905 13.0965 13.1595C13.356 12.513 13.9485 11.8425 14.9445 11.8425C16.248 11.8425 16.7685 12.8355 16.7685 14.2935V20.091H20.37V13.875C20.37 10.545 18.594 8.997 16.224 8.997C14.313 8.997 13.4565 10.047 12.9765 10.7865V10.824H12.9525C12.9605 10.8115 12.9685 10.799 12.9765 10.7865V9.2535H9.3765C9.4215 10.2705 9.3765 20.091 9.3765 20.091H12.9765Z"
                      fill="#E76308"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_198_15940">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg className="cursor-pointer hover:text-black hover:border"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_198_15942)">
                    <path
                      d="M24.005 13.0025C24.005 6.92912 19.0759 2 13.0025 2C6.92912 2 2 6.92912 2 13.0025C2 18.3277 5.78486 22.7617 10.802 23.785V16.3033H8.6015V13.0025H10.802V10.2519C10.802 8.1284 12.5294 6.401 14.6529 6.401H17.4035V9.70175H15.203C14.5979 9.70175 14.1028 10.1969 14.1028 10.802V13.0025H17.4035V16.3033H14.1028V23.95C19.659 23.3999 24.005 18.7128 24.005 13.0025Z"
                      fill="#E76308"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_198_15942">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg  className="cursor-pointer hover:text-black hover:border"
              xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.4703 4.23529H21.6468L7.99971 21.1765H2.82324L16.4703 4.23529Z"
                    fill="white"
                    stroke="#EA5F05"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.99971 4.23529H2.82324L16.4703 21.1765H21.6468L7.99971 4.23529Z"
                    fill="white"
                    stroke="#EA5F05"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg  className="cursor-pointer hover:text-black hover:border"
              xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_198_15947)">
                    <path
                      d="M13.2939 9.17214C11.1747 9.17214 9.46609 10.8971 9.46609 13C9.46609 15.1029 11.1911 16.8279 13.2939 16.8279C15.3968 16.8279 17.1218 15.1029 17.1218 13C17.1218 10.8971 15.3968 9.17214 13.2939 9.17214ZM24.7939 13C24.7939 11.4064 24.7939 9.84571 24.7118 8.25214C24.6297 6.41214 24.2025 4.76929 22.8554 3.43857C21.5082 2.09143 19.8818 1.66429 18.0418 1.58214C16.4482 1.5 14.8875 1.5 13.2939 1.5C11.7004 1.5 10.1397 1.5 8.54609 1.58214C6.70609 1.66429 5.06323 2.09143 3.73252 3.43857C2.38537 4.78571 1.95823 6.41214 1.87609 8.25214C1.79395 9.84571 1.79395 11.4064 1.79395 13C1.79395 14.5936 1.79395 16.1543 1.87609 17.7479C1.95823 19.5879 2.38537 21.2307 3.73252 22.5614C5.07966 23.9086 6.70609 24.3357 8.54609 24.4179C10.1397 24.5 11.7004 24.5 13.2939 24.5C14.8875 24.5 16.4482 24.5 18.0418 24.4179C19.8818 24.3357 21.5247 23.9086 22.8554 22.5614C24.2025 21.2143 24.6297 19.5879 24.7118 17.7479C24.8104 16.1707 24.7939 14.5936 24.7939 13ZM13.2939 18.8979C10.0247 18.8979 7.39609 16.2693 7.39609 13C7.39609 9.73071 10.0247 7.10214 13.2939 7.10214C16.5632 7.10214 19.1918 9.73071 19.1918 13C19.1918 16.2693 16.5632 18.8979 13.2939 18.8979ZM19.4382 8.23571C18.6825 8.23571 18.0582 7.62786 18.0582 6.85571C18.0582 6.08357 18.6661 5.47571 19.4382 5.47571C20.2104 5.47571 20.8182 6.08357 20.8182 6.85571C20.8224 7.03567 20.7895 7.21456 20.7217 7.38129C20.6539 7.54802 20.5525 7.69905 20.4239 7.825C20.298 7.95359 20.147 8.05494 19.9802 8.12277C19.8135 8.19059 19.6346 8.22344 19.4547 8.21929L19.4382 8.23571Z"
                      fill="#E76308"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_198_15947">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.293945)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          
        </div>

    ))}
    </div>
  );
}

export default BlogDetail1;
