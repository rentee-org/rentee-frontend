// import React from 'react'
import { BiPlus } from "react-icons/bi";

function Faq() {
  return (
    <div>
        <section className="flex flex-col-reverse items-center justify-between gap-12 px-6 md:px-16 py-20 w-full bg-gray-50 min-h-screen m-auto">
            {/* Text Block */}
            <div className="w-full md:w-1/2">
               <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-800 text-center">
                Frequently Asked Questions
              </h1>
              <p className="text-gray-700 mt-6 text-center font-medium  tracking-wide  text-md/6 ">
                  Thinking of renting a gadget? Learn more below  or reach out to us. 
              </p>



                <div className='flex flex-col gap-4 mt-10'>
                    <div>
                      <div className='flex justify-between items-center  p-4  border-b-2 border-gray-300'>
                      <p>How does gadget rental work?</p>
                      <BiPlus className='flex items-center' />
                      </div>

                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Tenetur suscipit, ea provident in corporis quos eos excepturi,
                         hic aut similique iste enim repudiandae unde rerum dicta dolorum?
                          Repellendus cumque modi illo vero eius dolore dicta culpa eos, ipsam consequatur voluptate, 
                          iste doloribus provident esse! Ex aliquam unde repellendus,  .</p>
                    </div>
                    <div>
                      <div className='flex justify-between items-center  p-4  border-b-2 border-gray-300'>
                      <p>Do I need to pay a deposit?</p>
                      <BiPlus className='flex items-center' />
                      </div>

                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Tenetur suscipit, ea provident in corporis quos eos excepturi,
                         hic aut similique iste enim repudiandae unde rerum dicta dolorum?
                          Repellendus cumque modi illo vero eius dolore dicta culpa eos, ipsam consequatur voluptate, 
                          iste doloribus provident esse! Ex aliquam unde repellendus,  .</p>
                    </div>
                    <div>
                      <div className='flex justify-between items-center  p-4  border-b-2 border-gray-300'>
                      <p>How long can I rent a gadget for?</p>
                      <BiPlus className='flex items-center' />
                      </div>

                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Tenetur suscipit, ea provident in corporis quos eos excepturi,
                         hic aut similique iste enim repudiandae unde rerum dicta dolorum?
                          Repellendus cumque modi illo vero eius dolore dicta culpa eos, ipsam consequatur voluptate, 
                          iste doloribus provident esse! Ex aliquam unde repellendus,  .</p>
                    </div>
                    <div>
                      <div className='flex justify-between items-center  p-4  border-b-2 border-gray-300'>
                      <p>What happens if I damage the gadget?</p>
                      <BiPlus className='flex items-center' />
                      </div>

                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Tenetur suscipit, ea provident in corporis quos eos excepturi,
                         hic aut similique iste enim repudiandae unde rerum dicta dolorum?
                          Repellendus cumque modi illo vero eius dolore dicta culpa eos, ipsam consequatur voluptate, 
                          iste doloribus provident esse! Ex aliquam unde repellendus,  .</p>
                    </div>
                </div>
            </div>
    
         
            </section>
    </div>
  )
}

export default Faq