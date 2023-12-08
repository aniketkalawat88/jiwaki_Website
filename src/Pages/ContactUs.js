import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function ContactUs() {
    const defaultProps = {
        center: {
          lat: 23.9186,
          lng: 76.911324 
        },
        zoom: 11
      };
  return (
    <div>
      <div className="flex justify-between p-10 mx-32">
        <form action="" className="space-y-5 ">
          <h2 className="font-semibold text-2xl">Get in touch</h2>
          <input
            type="text"
            placeholder="Name"
            className="block border p-2 rounded-md outline-none w-96"
          />
          <input
            type="email"
            placeholder="Email"
            className="block border p-2 rounded-md outline-none w-96"
          />
          <input
            type="text"
            placeholder="Service"
            className="block border p-2 outline-none rounded-md w-96"
          />
          <textarea
            name=""
            id=""
            cols="22"
            rows="3"
            placeholder="Message...."
            className="block border p-2 rounded-md  outline-none w-96"
          ></textarea>
          <button className="font-semibold text-lg hover:bg-orange-400 p-2 rounded-full w-44 shadow-xl hover:text-white text-orange-400">
            Submit
          </button>
        </form>
        <div>
          <img
            src={require("../Assests/Images/07.png")}
            alt="no preview"
            className="w-80"
          />
          <ul className="text-3xl flex justify-between mx-6 text-orange-400">
            <li>
              <i class="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i class="fa-brands fa-linkedin"></i>
            </li>
            <li>
              <i class="fa-brands fa-facebook"></i>
            </li>
            <li>
              <i class="fa-brands fa-twitter"></i>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDxABAB9Y4hXfaol1WzY7B5JlbrrYIGDLc" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={23.9186}
          lng={76.911324}
          text="Jiwaki Location"
        />
      </GoogleMapReact>
    </div>
    </div>
  );
}

export default ContactUs;
