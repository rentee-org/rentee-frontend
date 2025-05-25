// import { div } from "framer-motion/client";
import React from "react";
// import { BiChevronRight } from "react-icons/bi";
// import Navbar from "../layout/Navbar";
import camera from "../../assets/camera.png";
import User from "../../assets/images/Rentee-user.png";
import Checkbox from "../../assets/images/checkbox.png";
import { HiOutlineMapPin } from "react-icons/hi2";
import { CiTimer } from "react-icons/ci";
import { CgRecord } from "react-icons/cg";
import { PiWarningCircleThin } from "react-icons/pi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import Calender from "../layout/Calender";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const Categories = () => {
  return (
    <div>
      <div className=" py-5 mx-auto flex flex-col  max-w-7xl justify-between">
        <Navbar />
        <div className="flex items-center justify-start gap-2 py-5 mt-10 pl-5 md:pl-12">
          <div className="flex items-center gap-2">
            <p className="text-sm md:text-base text-[#c7c7c7] ">All categories </p>
            <BiChevronRight className="text-xl" />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm md:text-base ">Film & Photography </p>
            <BiChevronRight className="text-xl" />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm md:text-base ">Camera </p>
          </div>
        </div>
        {/* <link rel="stylesheet" href="" /> */}
        <div className="flex items-center justify-between  gap-2">
          <div className="flex flex-col md:flex-row items-center mx-auto md:items-start  justify-between gap-16 ">
            <div className="flex flex-col items-start justify-start gap-4">
              <div>
                <h1 className="text-3xl  md:text-4xl font-medium py-2">
                  Sony 35mm f1.4 g master fe <br /> lens - 35 mm
                </h1>
                <img src={camera} alt="" className="w-110 md:w-140" />
              </div>
              <div className="shadow-lg w-105 md:w-138 py-5 px-5">
                <span className="text-[#c7c7c7]">Owners Name</span>
                <div className="flex  items-center justify-start gap-2 mb-3">
                  <div>
                    <img src={User} alt="" className="w-10" />
                  </div>
                  <div>
                    <span>Onyekachi</span>
                    <div className="flex items-center  gap-2">
                      <img src={Checkbox} alt="" />
                      <span className="text-sm">Verified Account</span>
                    </div>
                  </div>
                </div>
                <span className="text-3xl text-[#5400e6] mt-7 font-bold">
                  NGN 30.000/day
                </span>
                <div className="mt-2">
                  <h4 className="text-2xl">
                    {" "}
                    Sony 35mm f1.4 g master fe lens - 35 mm
                  </h4>
                </div>
                <div className="mt-3">
                  <div className="flex items-center justify-start gap-2 py-2 ">
                    <HiOutlineMapPin />
                    <p>20, Bakery street, Victoria island lagos</p>
                  </div>
                  <div className="flex items-center justify-start gap-2  ">
                    <CiTimer />
                    <p>Available always</p>
                  </div>
                  <div className="flex items-center justify-start gap-2 py-2">
                    <CgRecord />
                    <p>Condition of item (Used) </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-start gap-2 py-2 px-2 rounded-md bg-[#FFECD1]">
                    <PiWarningCircleThin className="bg-[#FFD4A4] text-[#FB8500] rounded-2xl" />
                    <p className="text-sm md:text-md">This item is pre-owned, meaning it is not brand new.</p>
                  </div>
                  <div className="flex items-center justify-start gap-4 border-2 border-[#5400e6] py-2 px-4 rounded-lg mt-5 w-50">
                    <AiOutlineWhatsApp className="text-[#5400e6] text-2xl" />
                    <h3 className="text-[#5400e6] text-lg font-semibold">
                      Ask questions
                    </h3>
                  </div>
                </div>
              </div>

              <div className="shadow-lg w-105 md:w-138 py-5 px-5">
                <div>
                  <span className="text-[#c7c7c7]">Description</span>
                  <p className="py-5">
                    The Sony 35mm f/1.4 G Master FE Lens is a high-performance
                    prime lens designed for Sony's full-frame E-mount cameras.
                    Renowned for its exceptional sharpness, beautiful bokeh, and
                    advanced optics, this lens is perfect for professional
                    photographers and videographers looking for outstanding i
                    mage quality in a compact design performance.
                  </p>
                </div>

                <div>
                  <span className="text-[#c7c7c7]">Key Features:</span>
                  <div className="py-3">
                    <p>
                      ✅ G Master Optics: Delivers stunning resolution and
                      sharpness across the frame
                    </p>
                    <p>
                      {" "}
                      ✅ Bright f/1.4 Aperture: Ideal for low-light shooting and
                      achieving a creamy background blur.
                    </p>
                    <p>
                      {" "}
                      ✅ Nano AR Coating II: Reduces reflections, ghosting, and
                      flare for superior contrast.
                    </p>
                    <p>
                      {" "}
                      ✅ Dual XD Linear Motors: Ensures fast, precise, and quiet
                      autofocus, perfect for both photography and video.
                    </p>
                    <p>
                      ✅ Weather-Sealed Construction: Designed to withstand dust
                      and moisture for reliable outdoor use.
                    </p>
                    <p>
                      {" "}
                      ✅ Lightweight & Compact: Easy to carry without
                      compromising{" "}
                    </p>
                  </div>
                </div>

                <div className="py-3">
                  <span className="text-[#c7c7c7] ">Perfect For:</span>
                  <div>
                    <p>📸 Portraits</p>
                    <p> 🌆 Street Photography</p>
                    <p> 🎥 Cinematic Video Shoots</p>
                    <p> 🌿 Landscape Photography</p>
                    <p> 💡 Low-Light Photography</p>
                  </div>
                </div>
                <div>
                  <p>
                    If you're looking for a versatile, high-quality 35mm lens
                    with superb optical performance, the Sony 35mm f/1.4 G
                    Master is a top choice!
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-2 mt-25  ">
              <span className="font-bold text-2xl">Book a Date</span>
              <p className="text-[#c7c7c7] text-lg">
                You can pick a start date an a end date of your choice
              </p>
              <div className=" border-black-100 px-10 shadow-lg py-10 w-105 md:w-145">
                <Calender />
              </div>

              <div className=" border-black-100 py-10 px-6 w-105 md:w-145 shadow-lg mt-10">
                <p className="text-[#c7c7c7] font-medium">preview</p>
                <div className="flex  items-center justify-start gap-8 py-5">
                  <div>
                    <span className="py-6 px-6 border-1 border-gray-400 rounded-4xl">
                      JB
                    </span>
                  </div>
                  <div>
                    <div className="flex flex-col items-start  gap-2">
                      <p>
                        This vendor is really cool and trust worthy.. <br /> I
                        would defiantly recommend{" "}
                      </p>
                      <p>⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>
                <div className="flex  items-center justify-start gap-8 py-5">
                  <div>
                    <span className="py-6 px-6 border-1 border-gray-400 rounded-4xl">
                      JB
                    </span>
                  </div>
                  <div>
                    <div className="flex flex-col items-start  gap-2">
                      <p>
                        This vendor is really cool and trust worthy.. <br /> I
                        would defiantly recommend{" "}
                      </p>
                      <p>⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>
                <div className="flex  items-center justify-start gap-8 py-5">
                  <div>
                    <span className="py-6 px-6 border-1 border-gray-400 rounded-4xl">
                      JB
                    </span>
                  </div>
                  <div>
                    <div className="flex flex-col items-start  gap-2">
                      <p>
                        This vendor is really cool and trust worthy.. <br /> I
                        would defiantly recommend{" "}
                      </p>
                      <p>⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>
                <p className="text-[#5400e6] py-4">
                  {" "}
                  <a href="#">Add a Review</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
      
      <Footer />
    </div>
  );
};

export default Categories;
