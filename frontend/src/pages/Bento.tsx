import React from 'react'
import controller from "../assets/All-Product/controller.png"
import Headphones from "../assets/All-Product/Headphones.png"
import Speaker from "../assets/All-Product/Speaker.png"

const Bento = () => {
  return (
    <div className='flex flex-col items-center justify-between gap-12  md:px-10 py-20 bg-[#5400e6] size-full  m-auto'>
       <div className='text-center text-white py-10'>
          <h2 className='text-3xl mb-2'>Rentee Categories</h2>
          <p>Experience a smarter way to access gadgets—flexible, <br /> affordable, and tailored to your needs.</p>
       </div>

       <div className="grid grid-cols-3 gap-4 min-w-3/4 min-h-9/10 md:w-2/3 h-full">
        <div className='bg-[#8a6cff] text-center rounded shadow flex flex-col items-center justify-between'>
           <div className='text-center pt-6'>
              <h2 className='text-3xl mb-2 text-white'>Electronics</h2>
              <p className='text-sm  text-white'>Experience a smarter way to access gadgets <br /> —flexible, affordable, and tailored to your needs..</p>
              <button className='px-4 py-1 bg-[#5400e6] text-white rounded mt-5 text-xs' type='submit'>Explore All</button>
           </div>

           <div >
             <img  src={controller} alt="controller" />
           </div>

        </div>
        <div className='bg-[#ffecd1] text-center rounded center  col-span-2 flex flex-col items-center justify-between'>
            <div className=' py-10 '>
                <h2 className='text-3xl mb-2'>Rent party speakers many more</h2>
                <p className='text-sm'>Experience a smarter way to access gadgets  <br /> —flexible, affordable, and tailored to your needs.</p>
                <button className='px-4 py-1 bg-[#5400e6] text-white rounded mt-5 text-xs' type='submit'>Explore All</button>
            </div>
  
            <div>
              <img src={Speaker} alt="speaker" />
            </div>
        </div>
        <div className='bg-[#3c59da] text-ceneter rounded shadow  col-span-3 flex  items-start justify-between px-15 pt-15 '>
            <div className=' py-4 flex flex-col items-start justify-center'>
                <h2 className='text-lg mb-2 text-white'>All gadget are available at your disposal </h2>
                <p className='text-sm text-white'>Experience a smarter way to access gadgets—flexible, affordable, and tailored to <br />  your needs. Our commitment to innovation ensures a seamless rental experience.</p>
                <button className='px-4 py-1 bg-[#5400e6] text-white rounded mt-5 text-xs' type='submit'>Explore All</button>
            </div>
  
            <div>
              <img src={Headphones} alt="Headphones"  className='w-110 ' />
            </div>
        </div>
       </div>
    </div>
  )
}

export default Bento