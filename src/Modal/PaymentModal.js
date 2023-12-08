import React from "react";

function PaymentModal() {
  return (
    <div>
      <div className="h-[85vh] w-[25rem] m-5 overflow-y-scroll scrollbar-hide">
        <div className="bg-orange-500 rounded-lg py-1">
          <div className=" flex px-4 p-2">
            <span className="text-2xl p-1 m-1 text-center flex justify-center h-12 font-bold text-orange-400 border-4 border-white bg-slate-300">
              JL
            </span>
            <div className="text-lg text-white w-72">
              JIWAKI LIFESTYLE PRIVATE LIMITED (JILI79)
            </div>
          </div>
          <div className="text-white border-dotted border-y-4 py-2">
            <div className="flex justify-between">
              <div className="bg-white rounded-r-full w-5 h-7"></div>
              <span className="w-1 mr-28">Hi, Pawan</span>
              <div>
                <div className="space-x-3">
                  <span>
                    <i class="fa-solid fa-envelope"></i>
                  </span>
                  <span>pawankrtest07@gmail.com</span>
                </div>
                <div className="space-x-3">
                  <span>
                    <i class="fa-solid fa-phone"></i>
                  </span>
                  <span>+91 99880 99880</span>
                </div>
              </div>
              <div className="bg-white rounded-l-full w-5 h-7"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-white font-semibold p-2 px-3">
              <span>Total Amount</span>
              <span>INR 99.00</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 mt-5">
          <div className="flex justify-between p-5 items-center shadow-lg rounded-3xl border hover:shadow-orange-300 cursor-pointer">
            <div className="flex items-center space-x-2">
              <img
                src={require("../Assests/Images/GooglePay.png")}
                alt="no preview"
                className="w-12"
              />
              <span>Gpay</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="27"
              viewBox="0 0 30 27"
              fill="none"
            >
              <path
                d="M27.8212 13.1913C27.8212 19.5131 22.1027 24.8574 14.7638 24.8574C7.42489 24.8574 1.70639 19.5131 1.70639 13.1913C1.70639 6.86946 7.42489 1.52521 14.7638 1.52521C22.1027 1.52521 27.8212 6.86946 27.8212 13.1913Z"
                stroke="#A9A9A9"
                stroke-width="2.59246"
              />
              <ellipse
                cx="14.7669"
                cy="13.1913"
                rx="9.13412"
                ry="8.24875"
                fill="#BBBBBB"
              />
            </svg>
          </div>
          <div className="flex justify-between p-5 items-center shadow-lg rounded-3xl border hover:shadow-orange-300 cursor-pointer">
            <div className="flex items-center space-x-2 ml-3">
              <img
                src={require("../Assests/Images/phonepe.png")}
                alt="no preview"
                className="w-8"
              />
              <span>PhonePe</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="27"
              viewBox="0 0 30 27"
              fill="none"
            >
              <path
                d="M27.8212 13.1913C27.8212 19.5131 22.1027 24.8574 14.7638 24.8574C7.42489 24.8574 1.70639 19.5131 1.70639 13.1913C1.70639 6.86946 7.42489 1.52521 14.7638 1.52521C22.1027 1.52521 27.8212 6.86946 27.8212 13.1913Z"
                stroke="#A9A9A9"
                stroke-width="2.59246"
              />
              <ellipse
                cx="14.7669"
                cy="13.1913"
                rx="9.13412"
                ry="8.24875"
                fill="#BBBBBB"
              />
            </svg>
          </div>
          <div className="flex justify-between p-5 items-center shadow-lg rounded-3xl border hover:shadow-orange-300 cursor-pointer">
            <div className="flex items-center space-x-2 ml-3">
              <img
                src={require("../Assests/Images/paytm.png")}
                alt="no preview"
                className="w-8"
              />
              <span>Paytm UPI</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="27"
              viewBox="0 0 30 27"
              fill="none"
            >
              <path
                d="M27.8212 13.1913C27.8212 19.5131 22.1027 24.8574 14.7638 24.8574C7.42489 24.8574 1.70639 19.5131 1.70639 13.1913C1.70639 6.86946 7.42489 1.52521 14.7638 1.52521C22.1027 1.52521 27.8212 6.86946 27.8212 13.1913Z"
                stroke="#A9A9A9"
                stroke-width="2.59246"
              />
              <ellipse
                cx="14.7669"
                cy="13.1913"
                rx="9.13412"
                ry="8.24875"
                fill="#BBBBBB"
              />
            </svg>
          </div>
          <div className="flex justify-between p-5 items-center shadow-lg rounded-3xl border hover:shadow-orange-300 cursor-pointer">
            <div className="flex items-center space-x-2 ml-3">
              <img
                src={require("../Assests/Images/DebitCard.png")}
                alt="no preview"
                className="w-8"
              />
              <span>Debit Card/Credit Card</span>
            </div>
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 30 27"
              fill="none"
            >
              <path
                d="M27.8212 13.1913C27.8212 19.5131 22.1027 24.8574 14.7638 24.8574C7.42489 24.8574 1.70639 19.5131 1.70639 13.1913C1.70639 6.86946 7.42489 1.52521 14.7638 1.52521C22.1027 1.52521 27.8212 6.86946 27.8212 13.1913Z"
                stroke="#A9A9A9"
                stroke-width="2.59246"
              />
              <ellipse
                cx="14.7669"
                cy="13.1913"
                rx="9.13412"
                ry="8.24875"
                fill="#BBBBBB"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between text-orange-400 m-5">
            <span className="hover:underline">NET Banking</span>
            <span className="hover:underline text-xs">More Bank</span>
        </div>
        <div className="flex justify-between p-3 m-2 shadow-lg rounded-xl border">
            <div className="hover:shadow-orange-600 cursor-pointer">
                <img src={require("../Assests/Images/AxisBank.png")} alt="no preview" className="w-20" />
                <div>Axis Bank</div>
            </div>
            <div className="hover:shadow-orange-600 cursor-pointer">
                <img src={require("../Assests/Images/AxisBank.png")} alt="no preview" className="w-20" />
                <div>Axis Bank</div>
            </div>
            <div className="hover:shadow-orange-600 cursor-pointer">
                <img src={require("../Assests/Images/AxisBank.png")} alt="no preview" className="w-20" />
                <div>Axis Bank</div>
            </div>
            <div className="hover:shadow-orange-600 cursor-pointer">
                <img src={require("../Assests/Images/AxisBank.png")} alt="no preview" className="w-20" />
                <div>Axis Bank</div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentModal;
