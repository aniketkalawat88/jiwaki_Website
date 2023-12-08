import React from "react";
// import { NavLink } from "react-router-dom";

function ProductDetailNavbar() {
  return (
    <div>
      <div className="m-3 px-24">
        <ul className="flex justify-between text-[#6B6B6B] font-semibold">
          <li className="border border-black rounded-2xl p-2 w-40 text-center hover:shadow-2xl hover:border-orange-600 cursor-pointer hover:text-orange-500">
            {/* <NavLink> */}
            Discription
            {/* </NavLink> */}
          </li>
          <li className="border border-black rounded-2xl p-2 w-40 text-center hover:shadow-2xl hover:border-orange-600 cursor-pointer hover:text-orange-500">
            {/* <NavLink to="Keybenifits"> */}  
            Key benifits
            {/* </NavLink> */}
          </li>
          <li className="border border-black rounded-2xl p-2 w-40 text-center hover:shadow-2xl hover:border-orange-600 cursor-pointer hover:text-orange-500">
            {/* <NavLink to="Directionforuse"> */}
            Direction for use
            {/* </NavLink> */}
          </li>
          <li className="border border-black rounded-2xl p-2 w-40 text-center hover:shadow-2xl hover:border-orange-600 cursor-pointer hover:text-orange-500">
            {/* <NavLink to="Safetyinformation"> */}
            Safety information
            {/* </NavLink> */}
          </li>
          <li className="border border-black rounded-2xl p-2 w-40 text-center hover:shadow-2xl hover:border-orange-600 cursor-pointer hover:text-orange-500">
            {/* <NavLink to="Otherinformation"> */}
            Other information
            {/* </NavLink> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductDetailNavbar;
