import React from "react";
import controller from "../assets/All-Product/controller.png";
import Headphones from "../assets/All-Product/Headphones.png";
import Speaker from "../assets/All-Product/Speaker.png";

const Bento = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-12  md:px-10 py-20 bg-[#5400e6] size-full  m-auto">
      <div className="text-center text-white py-10">
        <h2 className="text-3xl mb-2">Rentee Categories</h2>
        <p>
          Experience a smarter way to access gadgets—flexible, <br />{" "}
          affordable, and tailored to your needs.
        </p>
      </div>


      <div className="grid grid-cols-1 gap-8 w-100 p-4 md:grid-cols-3 md:min-w-2/4 md:min-h-2/4 md:w-2/3">
        {/* First Card - Electronics */}
        <div className="bg-[#8a6cff] rounded-lg shadow flex flex-col items-center justify-between ">
          <div className="text-left pt-4 md:pt-6 pl-3">
            <h2 className="text-xl md:text-3xl mb-2 text-white">Electronics</h2>
            <p className="text-xs md:text-sm text-white">
              Experience a smarter way to access gadgets
              <br />
              flexible, affordable, and tailored to your needs.
            </p>
            <button
              className="px-3 py-1 bg-[#5400e6] text-white rounded mt-3 text-xs md:mt-5"
              type="submit"
            >
              Explore All
            </button>
          </div>
          <div className="w-3/4 md:w-full ml-23 md:ml-0">
            <img src={controller} alt="controller" />
          </div>
        </div>

        {/* Second Card - Speakers */}
        <div className="bg-[#ffecd1] rounded-lg col-span-1 md:col-span-2 flex flex-col items-center justify-center md:justify-center ">
          <div className="py-4 md:py-10 text-center">
            <h2 className="text-xl md:text-3xl mb-2">
              Rent party speakers & more
            </h2>
            <p className="text-xs md:text-sm">
              Experience a smarter way to access gadgets
              <br />
              —flexible, affordable, and tailored to your needs.
            </p>
            <button
              className="px-3 py-1 bg-[#5400e6] text-white rounded mt-3 text-xs md:mt-5"
              type="submit"
            >
              Explore All
            </button>
          </div>
          <div className="w-3/4 md:w-full flex items-center justify-center">
            <img src={Speaker} alt="speaker" />
          </div>
        </div>

        {/* Third Card - All Gadgets */}
        <div className="bg-[#3c59da] rounded-lg shadow col-span-1 md:col-span-3 flex flex-col md:flex-row items-end md:items-start justify-center md:justify-between ">
          <div className="py-8 md:py-8 flex flex-col  items-left  text-left  ml-6">
            <h2 className="text-lg md:text-xl mb-2 text-white ">
              All gadgets available
            </h2>
            <p className="text-xs md:text-sm text-white mb-3 md:mb-0">
              Experience a smarter way to access gadgets—flexible, affordable,
              and tailored to your needs.
            </p>
            <button
              className="px-3 py-1 mt-2 bg-[#5400e6] text-white rounded text-xs w-fit"
              type="submit"
            >
              Explore All
            </button>
          </div>
          <div className="w-2/3 md:w-auto mt-4 md:mt-12">
            <img
              src={Headphones}
              alt="Headphones"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento;
