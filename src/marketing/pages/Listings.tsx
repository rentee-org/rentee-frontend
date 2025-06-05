import Baloon from "@assets/Listing-products/Baloon.png"
import Camera from "@assets/Listing-products/Caemra.png"
import Chair from "@assets/Listing-products/Chair.png"
import Computer from "@assets/Listing-products/Computer.png"
import Lenses from "@assets/Listing-products/Lenses.png"
import SoundBar from "@assets/Listing-products/SoundBar.png"
import Tv from "@assets/Listing-products/Tv.png"
import Tents from "@assets/Listing-products/Tents.png"
import { BiRightArrowAlt } from "react-icons/bi";

const Listings = () => {
  return (
    <div className='hidden md:flex  items-center justify-between gap-12 px-6 md:px-16 py-20 max-w-5xl bg-gray-50  m-auto'>
       <div className='flex flex-col items-start justify-center gap-3'>
        <h3 className='text-2xl font-500 '>Electronics </h3>
        <div className='flex flex-col items-start justify-between gap-3'>
            <div className='flex flex-row items-center justify-between gap-25 w-70  border-b-1 border-gray-400 py-4'>
               <div className='flex flex-row items-center justify-between gap-3 text-sm'>
                   <img src={SoundBar} alt="" className='h-6 w-7' />
                  <h4>Sound</h4>
               </div>
               <BiRightArrowAlt />
            </div>

            <div className='flex flex-row items-center justify-between gap-15 w-70 border-b-1 border-gray-400 py-4'>
             <div className='flex flex-row items-start justify-between gap-1 w-47 text-sm'>
               <img src={Computer} alt="" className='h-6 w-7' />
                 <h4>Computer & Accesories</h4>
               </div>
               <BiRightArrowAlt />
            </div>

            <div className='flex flex-row items-center justify-between gap-25 w-70 border-b-1 border-gray-400 py-4'>
             <div className='flex flex-row items-center justify-between gap-3 text-sm'>
              <img src={Tv} alt="" className='h-6 w-7' />
               <h4>Projector & Tvs</h4>
            </div>
            <BiRightArrowAlt />
          </div>
       </div>
    </div>

       <div className='flex flex-col items-start justify-center gap-3'>
        <h3 className='text-2xl font-500'>Film and Photography </h3>
        <div className='flex flex-col items-center justify-between gap-3'>
           <div className='flex flex-row items-center justify-between gap-25 w-70 border-b-1 border-gray-400 py-4'>
             <div className='flex flex-row items-center justify-between gap-3'>
                <img src={Camera} alt="" className='h-6 w-8' />
                <h4>Camera</h4>
              </div>
              <BiRightArrowAlt />
           </div>

           <div className='flex flex-row items-center justify-between gap-25 w-70 border-b-1 border-gray-400 py-4'>
             <div className='flex flex-row items-center justify-between gap-3'>
                <img src={Computer} alt="" className='h-6 w-8' />
                <h4>Monitor</h4>
             </div>
             <BiRightArrowAlt />
           </div>

           <div className='flex flex-row items-center justify-between gap-15 w-70 border-b-1 border-gray-400 py-4'>
             <div className='flex flex-row items-start justify-between w-44 gap-1'>
                <img src={Lenses} alt="" className='h-6 w-8' />
                <h4>Camera & Lenses</h4>
            </div>
            <BiRightArrowAlt />
          </div>
         </div>
       </div>

       <div className='flex flex-col items-start justify-center gap-3'>
        <h3 className='text-2xl font-500'>Party Supplies </h3>
        <div className='flex flex-col items-center justify-between gap-3'>
            <div className='flex flex-row items-start justify-between gap-2 w-75 border-b-1 border-gray-400 py-4'> 
              <div  className='flex flex-row items-center justify-center w-70 gap-1'>
                <img src={Tents} alt="" className='h-6 w-8' />
                <h4>Tents, Marques & Event Centres</h4>
              </div>
              <BiRightArrowAlt />
            </div>

            <div className='flex flex-row items-center justify-between gap-25 w-70 border-b-1 border-gray-400 py-4'>
            <div className='flex flex-row items-center justify-between gap-3'>
                <img src={Chair} alt="" className='h-6 w-7' />
                <h4>Party Furniture</h4>
            </div>
            <BiRightArrowAlt />
            </div>

             <div className='flex flex-row items-center justify-between gap-15 w-70 border-b-1 border-gray-400 py-4'>
             <div className='flex flex-row items-start justify-between w-40 gap-1'>
                <img src={Baloon} alt=""  className='h-6 w-7'/>
                <h4>Party Decorations</h4>
            </div>
            <BiRightArrowAlt />
             </div>
        </div>
       </div>

    </div>
  )
}

export default Listings