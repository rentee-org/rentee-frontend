// import React from 'react'
// import { Frame1, Frame2, Frame3 } from "../../../";
import Frame1 from "../assets/All-Product/Frame1.png"
import Frame2 from "../assets/All-Product/Frame2.png"
import Frame3 from "../assets/All-Product/Frame3.png"

function BrowserListing() {
    return (
        <div className='flex flex-col items-center justify-between gap-12 px-6 md:px-16 py-20 w-full bg-gray-50  m-auto'>
            <div className=' flex flex-row items-center justify-between gap-4 px-6 md:px-20 py-8 max-w-7xl mx-auto w-full'>
                <div>
                    <h4 className='text-4xl md:text-5xl font-semibold mb-4 text-gray-800 text-center'> Browser Listing </h4>
                </div>
                <div> <button type='submit' className='px-6 py-2 rounded-sm bg-white-600  text-purple-600 border-3'>See All Category</button></div>
            </div>

            <div>
                <div className='flex flex-row items-center justify-between gap-45 px-6 md:px-10 py-8 max-w-7xl mx-auto w-full'>
                    <div className='flex flex-col items-center justify-center gap-6'>
                        <img src={Frame1} alt="" className='h-20 w-40' />
                        <h3 className='text-gray-500'>Laptop</h3>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-3'>
                        <img src={Frame2} alt="" className='h-20 w-40' />
                        <h3 className='text-gray-500'>Camera</h3>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-3'>
                        <img src={Frame3} alt="" className='h-20 w-40' />
                        <h3 className='text-gray-500'>Smartphone</h3>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-6'>
                        <img src={Frame1} alt="" className='h-20 w-40' />
                        <h3 className='text-gray-500'>Laptop</h3>
                    </div>
                </div>

                <div className='flex flex-row items-center justify-between gap-45 px-6 md:px-10 py-8 max-w-7xl mx-auto w-full'>
                    <div className='flex flex-col items-center justify-center gap-6'>
                        <img src={Frame1} alt="" className='h-20 w-40' />
                        <h3 className='text-gray-500'>Laptop</h3>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-3'>
                        <img src={Frame2} alt="" className='h-20 w-40' />
                        <h3 className='text-gray-500'>Camera</h3>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-3'>
                        <img src={Frame3} alt="" className='h-20 w-40' />
                        <h3 className='text-gray-500'>Smartphone</h3>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-6'>
                        <img src={Frame1} alt="" className='h-20 w-40' />
                        <h3 className='text-gray-500'>Laptop</h3>
                    </div>
                </div>

                <div className='flex flex-row items-center justify-between gap-45 px-6 md:px-10 py-8 max-w-7xl mx-auto w-full'>
                    <div className='flex flex-col items-center justify-center gap-6'>
                        <img src={Frame1} alt="" className='h-20 w-40' />
                        <h3 className='text-gray-500'>Laptop</h3>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-3'>
                        <img src={Frame2} alt="" className='h-20 w-40' />
                        <h3 className='text-gray-500'>Camera</h3>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-3'>
                        <img src={Frame3} alt="" className='h-20 w-40' />
                        <h3 className='text-gray-500'>Smartphone</h3>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-6'>
                        <img src={Frame1} alt="" className='h-20 w-40' />
                        <h3 className='text-gray-500'>Laptop</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrowserListing