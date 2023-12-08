import React from "react";

function AddAddress() {
  return (
    <div className="w-[40rem] ">
      <form className="space-y-3">
        <div className=" space-y-4">
          <h1 className="font-bold text-center text-3xl">Add Address</h1>
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="180"
              height="8"
              viewBox="0 0 180 8"
              fill="none"
            >
              <path
                d="M0.5 4C0.5 3.44238 0.942129 2.98518 1.49944 2.9665L90 0L178.501 2.9665C179.058 2.98518 179.5 3.44238 179.5 4C179.5 4.55762 179.058 5.01482 178.501 5.0335L90 8L1.49944 5.0335C0.942131 5.01482 0.5 4.55762 0.5 4Z"
                fill="url(#paint0_linear_120_7127)"
                fill-opacity="0.5"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_120_7127"
                  x1="0.500001"
                  y1="4.00002"
                  x2="184.5"
                  y2="4.00004"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFA500" stop-opacity="0" />
                  <stop offset="0.495481" stop-color="#FFA500" />
                  <stop offset="1" stop-color="#FFA500" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="space-y-3 px-20 p-5">
          <input
            type="text"
            placeholder="Your Name"
            className="border-2 border-[#B7B7B7] block w-[100%] p-3 rounded-xl"
            required
          />
          <input
            type="tel"
            placeholder="Your Mobile no"
            className="border-2 border-[#B7B7B7] block w-[100%] p-3 rounded-xl"
            required
          />
          <input
            type="text"
            placeholder="State"
            className="border-2 border-[#B7B7B7] w-[100%] p-3 rounded-xl"
          />
          <input
            type="text"
            placeholder="City"
            className="border-2 border-[#B7B7B7] block w-[100%] p-3 rounded-xl"
          />
          <input
            type="tel"
            placeholder="Pincode"
            className="border-2 border-[#B7B7B7] block w-[100%] p-3 rounded-xl"
            maxLength={6}
            minLength={6}
          />
          <input
            type="text"
            placeholder="Area/ street/ village"
            className="border-2 border-[#B7B7B7] block w-[100%] p-3 rounded-xl"
          />
          <input
            type="text"
            placeholder="Flat/ House no"
            className="border-2 border-[#B7B7B7] block w-[100%] p-3 rounded-xl"
          />
          <label htmlFor="check" className="p-5">
            <input type="checkbox" id="check" />
            <span>Make this is my default address.</span>
          </label>
          <div className="flex  justify-center">
            <button
              className="border-[#E76308] border-2 block p-2 w-44 font-bold text-[#E76308] rounded-2xl hover:bg-orange-500 hover:text-white cursor-pointer"
              onClick={() => alert("succesfully Added")}
            >
              Add Address
            </button>
            ``
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddAddress;
