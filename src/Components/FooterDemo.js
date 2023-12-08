import React from "react";
import { NavLink } from "react-router-dom";
// import { cardData } from "../Pages/DummyData";

function FooterDemo() {
  return (
    <div className="bg-black text-white">
      <div class=" flex justify-between space-y-16 p-10">
        <div class="w-64 space-y-5 mt-16">
          <img src={require("../Assests/Images/01.png")} alt="no preview" />
          <p class="text-">
            Over the last decade, our products have fulfilled the health needs
            of millions of people. Our strength is the relationship we have with
            you, which thrives on the trust you have in the quality and
            integrity of our products and services.
          </p>
        </div>
        <div class=" ">
          <ul class="space-y-4">
            <li className="font-bold text-xl">Jiwali</li>
            <li className="cursor-pointer hover:text-orange-500">About us</li>
            <li className="cursor-pointer hover:text-orange-500">
              <NavLink to="ContactUs">Contact us</NavLink>
            </li>
            <li className="cursor-pointer hover:text-orange-500">
              <NavLink to="/PrivacyPolicy">Privacy and policy</NavLink>
            </li>
            <li className="cursor-pointer hover:text-orange-500">
              <NavLink to="/Terms&Condition">Terms and Condition</NavLink>
            </li>
            <li className="cursor-pointer hover:text-orange-500">
              <NavLink to="/SupportPolicy">Support policy</NavLink>
            </li>
            <li className="cursor-pointer hover:text-orange-500">
              <NavLink to="/ReturnPolicy">Return Policy</NavLink>
            </li>
          </ul>
        </div>
        <div class="">
          <ul class="space-y-4">
            <li class="font-bold text-xl">Category</li>
            <li className="cursor-pointer hover:text-orange-500">
              New Launches
            </li>
            <li className="cursor-pointer hover:text-orange-500">
              <NavLink to="/Beauty">Beauty</NavLink>
            </li>
            <li className="cursor-pointer hover:text-orange-500">
              <NavLink to="/Hair">Hair Care</NavLink>
            </li>
            <li className="cursor-pointer hover:text-orange-500">
              <NavLink to="/Face">Face Care</NavLink>
            </li>
            <li className="cursor-pointer hover:text-orange-500">
              <NavLink to="/Body">Body Care</NavLink>
            </li>
            <li className="cursor-pointer hover:text-orange-500">
              <NavLink to="/Makeup">Make Up</NavLink>
            </li>
            <li className="cursor-pointer hover:text-orange-500">
              <NavLink to="/Baby">Baby Care</NavLink>
            </li>
          </ul>
        </div>
        <div class="">
          <ul class="space-y-4">
            <li class="font-bold text-xl">Quick Link</li>
            <li className="cursor-pointer hover:text-orange-500">Account</li>
            <li className="cursor-pointer hover:text-orange-500">Order</li>
            <li className="cursor-pointer hover:text-orange-500">
              Track Order
            </li>
            <li className="cursor-pointer hover:text-orange-500">Cart</li>
            <li className="cursor-pointer hover:text-orange-500">FAQ</li>
            <li className="cursor-pointer hover:text-orange-500">
              <NavLink to="/BuyMemberShip">Buy Membership</NavLink>
            </li>
          </ul>
        </div>

        <div class="w-52">
          <ul class="space-y-4">
            <li class="font-bold">Get in Touch</li>
            <div className="text-sm flex space-x-2">
              <span className="bg-[#E76308B0] h-7 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <path
                    d="M2.16668 10.8332C1.86876 10.8332 1.61364 10.727 1.4013 10.5147C1.18897 10.3023 1.08298 10.0474 1.08334 9.74984V3.24984C1.08334 2.95192 1.18951 2.6968 1.40184 2.48446C1.61418 2.27213 1.86912 2.16614 2.16668 2.1665H10.8333C11.1313 2.1665 11.3864 2.27267 11.5987 2.485C11.8111 2.69734 11.917 2.95228 11.9167 3.24984V9.74984C11.9167 10.0478 11.8105 10.3029 11.5982 10.5152C11.3858 10.7275 11.1309 10.8335 10.8333 10.8332H2.16668ZM6.50001 7.0415L10.8333 4.33317V3.24984L6.50001 5.95817L2.16668 3.24984V4.33317L6.50001 7.0415Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="font-semibold">jiwaki@gmail.com</span>
            </div>
            <div className="text-sm flex space-x-2">
              <span className="bg-[#E76308B0] h-7 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <path
                    d="M10.8063 11.375C9.64167 11.375 8.50651 11.1154 7.40079 10.5961C6.29507 10.0768 5.31556 9.39069 4.46225 8.53775C3.60894 7.68481 2.92283 6.70529 2.40392 5.59921C1.885 4.49312 1.62536 3.35797 1.625 2.19375C1.625 2.03125 1.67917 1.89583 1.7875 1.7875C1.89583 1.67917 2.03125 1.625 2.19375 1.625H4.3875C4.51389 1.625 4.62674 1.66562 4.72604 1.74687C4.82535 1.82812 4.88403 1.93194 4.90208 2.05833L5.25417 3.95417C5.27222 4.08056 5.26988 4.19575 5.24713 4.29975C5.22438 4.40375 5.17256 4.49619 5.09167 4.57708L3.79167 5.90417C4.17083 6.55417 4.64479 7.16354 5.21354 7.73229C5.78229 8.30104 6.40972 8.79306 7.09583 9.20833L8.36875 7.93542C8.45 7.85417 8.55617 7.79332 8.68725 7.75287C8.81833 7.71243 8.94689 7.70106 9.07292 7.71875L10.9417 8.09792C11.0681 8.125 11.1719 8.18603 11.2531 8.281C11.3344 8.37597 11.375 8.48647 11.375 8.6125V10.8063C11.375 10.9688 11.3208 11.1042 11.2125 11.2125C11.1042 11.3208 10.9688 11.375 10.8063 11.375Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="font-semibold">659-8977-987</span>
            </div>
            <div className="text-sm flex space-x-2">
              <span className="bg-[#E76308B0] h-7 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <path
                    d="M6.49999 6.50016C6.79791 6.50016 7.05303 6.394 7.26537 6.18166C7.4777 5.96933 7.58368 5.71438 7.58332 5.41683C7.58332 5.11891 7.47716 4.86379 7.26482 4.65145C7.05249 4.43912 6.79755 4.33313 6.49999 4.3335C6.20207 4.3335 5.94695 4.43966 5.73461 4.652C5.52228 4.86433 5.4163 5.11927 5.41666 5.41683C5.41666 5.71475 5.52282 5.96987 5.73516 6.1822C5.94749 6.39454 6.20243 6.50052 6.49999 6.50016ZM6.49999 11.9168C5.04652 10.68 3.96102 9.53133 3.24349 8.47075C2.52596 7.41016 2.16702 6.4283 2.16666 5.52516C2.16666 4.171 2.60234 3.09218 3.4737 2.2887C4.34506 1.48523 5.35382 1.0835 6.49999 1.0835C7.64652 1.0835 8.65546 1.48523 9.52682 2.2887C10.3982 3.09218 10.8337 4.171 10.8333 5.52516C10.8333 6.42794 10.4744 7.4098 9.75649 8.47075C9.0386 9.53169 7.9531 10.6804 6.49999 11.9168Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="font-semibold">
                Near prem Nagar, sindhur Hazaribagh, Jharkhand (82531)
              </span>
            </div>
            <li class="font-semibold">Follow Us On</li>
            <ul class="flex space-x-5 text-xl">
              <li>
                <i class="fa-brands fa-linkedin"></i>
              </li>
              <li>
                <i class="fa-brands fa-facebook"></i>
              </li>
              <li>
                <i class="fa-brands fa-twitter"></i>
              </li>
              <li>
                <i class="fa-brands fa-instagram"></i>
              </li>
            </ul>
          </ul>
        </div>
      </div>

      <div className="flex justify-end p-10 cursor-pointer">
        <img
          src={require("../Assests/Images/02.png")}
          alt="no preview"
          className="h-[66px]"
        />
        <img
          src={require("../Assests/Images/03.png")}
          alt="no preview"
          className="h-[66px]"
        />
      </div>
    </div>
  );
}

export default FooterDemo;
