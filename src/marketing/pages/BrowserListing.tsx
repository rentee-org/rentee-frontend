
import { Link } from "react-router-dom";
import Data from "../../components/constants/Data";
import User from "../../components/constants/Index";
import { BiChevronRight } from "react-icons/bi";

export interface ProductItems {
  img: string;
  id: number;
  price: string;
  name: string;
  description: string;

}

export interface UserProfile {
  img: string;
  id: number;
  name: string;
}



function BrowserListing() {
  return (

    <div className="flex flex-col items-center justify-between  px-4 md:px-16 py-2 w-full bg-gray-50  m-auto">
      <div className=" flex flex-row items-center justify-between gap-4 px-2 md:px-20 py-2 max-w-7xl mx-auto w-full">
        <div>
          {" "}
          <h4 className="text-2xl md:text-5xl font-semibold mb-4 text-gray-800 text-center font-avenir">
            {" "}
            Browser Listing{" "}
          </h4>
        </div>
        <div>
          {" "}
          <Link
            to="/categories"
            className="px-4 md:px-6  text-xs md:text-lg py-2 rounded-sm bg-white-600  text-[#5400e6] border-2 font-avenir"
          >
            See All Category
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  px-4 md:px-10 py-8  mx-auto max-w-7xl gap-5">
        {Data.map((Product: ProductItems) => (
          <div
            key={Product.id}
            className="flex flex-col items-center justify-center  border-2 border-gray-50  h-full w-95 md:w-70 shadow-md rounded-sm "
          >
            <img src={Product.img} alt="" className="h-65 md:h-50 w-full" />
            <div className="py-4 px-3">
              <p className=" text-[#5400e6] font-semibold text-sm ">{Product.price}</p>
              <h3 className="text-black-300 text-sm py-4 font-medium w-50">{Product.name}</h3>
              <p className="text-gray-400 text-xs">{Product.description}</p>
              <div className="flex items-center justify-start gap-2 mt-4">
                <a href="#" className="text-xs text-[#fb8500] border-b-1">See full details</a>
                <BiChevronRight  className="text-[#fb8500]"/>
              </div>
             </div>

             <div className="flex items-start justify-between gap-2 mt-4 mb-4">
              
               {User.map((user: UserProfile) => (
                <div key={user.id} className="flex flex-row items-center justify-between gap-30 md:gap-12">
                 <div className="flex flex-row items-center justify-between gap-2">
                 <img src={user.img} alt="" className="h-8 w-8 rounded-full" />
                 <p className="text-xs text-gray-500">{user.name}</p>
                 </div>
                  <div  className="border-2 rounded-lg text-[#5400e6] text-xs py-2 px-2">
                    <button>Make Booking</button>
                    </div>
                </div>
              
               ))}
             </div>

        </div>
        ))}
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  px-6 md:px-10 py-8  mx-auto max-w-7xl gap-5">
        {Data.map((Product: ProductItems) => (
          <div
            key={Product.id}
            className="flex flex-col items-center justify-center  border-2 border-gray-50  h-full w-95 md:w-70 shadow-md rounded-sm "
          >
            <img src={Product.img} alt="" className="h-65 md:h-50 w-full" />
            <div className="py-4 px-3">
              <p className=" text-[#5400e6] font-semibold text-sm ">{Product.price}</p>
              <h3 className="text-black-300 text-sm py-4 font-medium w-50">{Product.name}</h3>
              <p className="text-gray-400 text-xs">{Product.description}</p>
              <div className="flex items-center justify-start gap-2 mt-4">
                <a href="#" className="text-xs text-[#fb8500] border-b-1">See full details</a>
                <BiChevronRight  className="text-[#fb8500]"/>
              </div>
             </div>

             <div className="flex items-start justify-between gap-2 mt-4 mb-4">
              
               {User.map((user: UserProfile) => (
                <div key={user.id} className="flex flex-row items-center justify-between  gap-30 md:gap-12">
                 <div className="flex flex-row items-center justify-between gap-2">
                 <img src={user.img} alt="" className="h-8 w-8 rounded-full" />
                 <p className="text-xs text-gray-500">{user.name}</p>
                 </div>
                  <div  className="border-2 rounded-lg text-[#5400e6] text-xs py-2 px-2">
                    <button>Make Booking</button>
                    </div>
                </div>
              
               ))}
             </div>

        </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  px-6 md:px-10 py-8  mx-auto max-w-7xl gap-5">
        {Data.map((Product: ProductItems) => (
          <div
            key={Product.id}
            className="flex flex-col items-center justify-center  border-2 border-gray-50  h-full w-95 md:w-70 shadow-md rounded-sm "
          >
            <img src={Product.img} alt="" className="h-65 md:h-50 w-full" />
            <div className="py-4 px-3">
              <p className=" text-[#5400e6] font-semibold text-sm ">{Product.price}</p>
              <h3 className="text-black-300 text-sm py-4 font-medium w-50">{Product.name}</h3>
              <p className="text-gray-400 text-xs">{Product.description}</p>
              <div className="flex items-center justify-start gap-2 mt-4">
                <a href="#" className="text-xs text-[#fb8500] border-b-1">See full details</a>
                <BiChevronRight  className="text-[#fb8500]"/>
              </div>
             </div>

             <div className="flex items-start justify-between gap-2 mt-4 mb-4">
              
               {User.map((user: UserProfile) => (
                <div key={user.id} className="flex flex-row items-center justify-between gap-30  md:gap-12">
                 <div className="flex flex-row items-center justify-between gap-2">
                 <img src={user.img} alt="" className="h-8 w-8 rounded-full" />
                 <p className="text-xs text-gray-500">{user.name}</p>
                 </div>
                  <div  className="border-2 rounded-lg text-[#5400e6] text-xs py-2 px-2">
                    <button>Make Booking</button>
                    </div>
                </div>
              
               ))}
             </div>

        </div>
        ))}
      </div>


    </div>
  );
}

export default BrowserListing;
