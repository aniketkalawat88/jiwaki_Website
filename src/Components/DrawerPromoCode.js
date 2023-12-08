import React from "react";
import { cardData } from "../Pages/DummyData";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import CartAddress from "./CartAddress";

function DrawerPromoCode() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      {cardData?.MRP?.map((ele, i) => (
        <div>
          <div className="border rounded-xl mx-10 px-3 m-1 text-xs p-1 ">
            <div className="text-[#B5B5B5] font-bold">Apply PROMOCODE</div>
            <label
              htmlFor="code"
              className="flex justify-between hover:text-green-400 hover:underline"
            >
              <input type="checkbox" id="code" className="rounded-full" />
              <span className="font-bold">Apply Promo Code</span>
              <svg
                className="hover:text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="24"
                viewBox="0 0 33 24"
                fill="none"
              >
                <path
                  d="M12.4336 4.08002L21.1269 10.6C22.1536 11.37 22.1536 12.63 21.1269 13.4L12.4336 19.92"
                  stroke="#222222"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </label>
            <div className="text-[#B5B5B5]">
              Get flat discount/Vouchers application in payment options.
            </div>
          </div>
          <div className="border rounded-xl mx-10 px-3 m-2 p-1 text-xs">
            <div className="text-[#B5B5B5] font-bold text-sm">
              Payment detail
            </div>
            <ul className="px-3 space-y-1">
              <li className="flex justify-between font-medium text-[#5B4E4E]">
                <span>MRP Total </span> <span>₹ {ele.total}</span>
              </li>
              <li className="flex justify-between font-medium text-[#5B4E4E]">
                <span>Discount</span> <span>₹ {ele.discount}</span>
              </li>
              <li className="flex justify-between font-medium text-[#5B4E4E]">
                <span>Promo Code</span> <span>₹ {ele.PromoCode}</span>
              </li>
              <li className="flex justify-between font-medium text-[#5B4E4E]">
                <span>Delivery charge</span>{" "}
                <span>₹ 0.{ele.DeliveryCharge}</span>
              </li>
              <li className="flex justify-between font-medium text-[#E76308]">
                <span>Total Payable</span> <span>₹ {ele.TotalPay}</span>
              </li>
              <li className="font-medium text-[#187618] m-2">
                You are save ₹ 100.00 on this order
              </li>
            </ul>
          </div>
          <div className="flex justify-between px-20 shadow-2xl shadow-black relative bg-white  p-2">
            <div className="">
              <span className="text-[#187618] text-xl font-semibold">
                ₹ {ele.TotalPay}
              </span>
              <span className="text-[#1741D4] text-xs font-bold block cursor-pointer hover:underline">
                View detail
              </span>
            </div>
            <button
              className="w-36 text-sm hover: my-2 rounded-lg bg-[#187618] text-white hover:bg-green-900"
              onClick={toggleDrawer}
            >
              Continue
            </button>
          </div>
        </div>
      ))}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
        size={600}
      >
        <div className="h-96">
          <CartAddress value={toggleDrawer} />
        </div>
      </Drawer>
    </>
  );
}

export default DrawerPromoCode;
