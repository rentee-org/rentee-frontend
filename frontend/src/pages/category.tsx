// import React from 'react'
import { LuSearch } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";

const category: React.FC = () => (
  <div className="flex flex-cols items-center justify-between gap-4 px-6 md:px-20 py-8 max-w-7xl mx-auto "> 
<div className="flex   items-center justify-between gap-3 border-2 border-gray-50 shadow-md rounded-sm px-2 py-4  md:w-1/2">
   <div className="flex items-center gap-3">
    <LuSearch />
     <input type="text" placeholder='Search and Rent Instantly' />
   </div>

   <div className="px-6  rounded-sm  bg-purple-600 hover:bg-purple-700 py-2 text-gray-500">
    <button type="submit">search</button>
   </div>
</div>

<div className="flex items-center justify-between gap-3 border-2 shadow-md border-gray-50 rounded-sm   py-6  md:w-1/2">
 <div className="flex items-center gap-3 px-3">
 <CiLocationOn />
 <h3 className="text-gray-500">Location</h3>
 </div>
   <div className="px-3"> <MdKeyboardArrowDown /></div>
</div>

<div className="flex items-center justify-between gap-2 shadow-md border-gray-50 border-2 rounded-sm px-3 w-sm  py-6  ">
    <h3 className="text-gray-500">Browse Category</h3>
    <MdKeyboardArrowDown />
</div>
</div>
)

export default category