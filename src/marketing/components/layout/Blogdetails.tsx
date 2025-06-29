import { BiArrowBack } from "react-icons/bi";
import update1 from "../../../assets/images/update1.png";
import productImg from "../../../assets/images/productImg.png";
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import type { SetStateAction } from "react";

const Blogdetails = () => {
  return (
    <div>
        <Navbar setShowSignUp={function (value: SetStateAction<boolean>): void {
              throw new Error("Function not implemented.");
          } } />
        <article className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col mx-auto mt-20 ">
                <div className="mx-auto md:mx-0 text-center">
                    <span className='flex items-center justify-center text-center py-8 text-[#090019]'><BiArrowBack /> Back</span>
                    <h2 className='text-2xl md:text-4xl w-70 md:w-150 mx-auto text-center'>Codon in 2025: New compiler-optimized NumPy implementation. </h2>
                </div>
                 <div className=" mb-2 gap-5 mx-auto py-4 ">
                    <span className="rounded-3xl bg-[#5400E6] px-3 py-0.5"></span>
                    <span className="text-black  ml-4">Market Updates</span>
                    <span className="ml-4" >May 15, 2025</span>
                  </div>
                  <span className='mx-auto text-[#c7c7c7] mb-5'>by Tosin james</span>
                 <div className='mt-2'>
                    <img src={update1} alt=""  />
                 </div>
            </div>

            <div className="mt-8 flex items-start justify-between gap-5">
               <div className='hidden md:block w-100 bg-white p-4 rounded-lg shadow-md  py-5'>
                  <h2 className='pb-4 text-[#000000]'>Table of Content</h2>
                  <hr className='py-2 text-[#C7C7C7]'/>
                    <ul className='list-disc py-2'>
                        <p className='py-2 text-[#C7C7C7]'>Why we needed a new IR</p>
                        <p className='py-2 text-[#C7C7C7]'>Codon IR</p>
                        <p className='py-2  text-[#C7C7C7]'>Passes analysis</p>
                        <p className='py-2 text-[#C7C7C7]'>Why we needed a new IR</p>
                        <p className='py-2 text-[#C7C7C7]'>Why we needed a new IR</p>
                    </ul>
               </div>
               <div className='w-full bg-white p-4 rounded-lg shadow-md'>
                <p className='py-2'>
                    Compilers are complex pieces of software that involve many stages, 
                    from parsing code to type checking to performing analyses and transformations, 
                    and ultimately generating code for a given target. Intermediate representations (IRs for short) are a key 
                    ingredient in almost any modern compiler. IRs help represent programs in a structured and simplified way so 
                    as to make analyses and optimizations easier. In this blog post, we’ll delve into Codon’s intermediate 
                    representation—Codon IR—including why we created it, how it works, what it can do, how it can be extended 
                    through custom IR passes, and ultimately how it serves as a framework for optimizing Python code.

                </p>

                <p className='py-4'>
                    Compilers are complex pieces of software that involve many stages, 
                    from parsing code to type checking to performing analyses and transformations, and ultimately 
                    generating code for a given target. Intermediate representations (IRs for short) are a key ingredient in 
                    almost any modern compiler. IRs help represent programs in a structured and simplified way so as to make analyses 
                    and optimizations easier. In this blog post, we’ll delve into Codon’s intermediate representation—Codon 
                    IR—including why we created it, how it works, what it can do, how it can be extended through custom IR passes, 
                    and ultimately how it serves as a framework for optimizing Python code.

                </p>
                <div className='py-3'><img src={productImg} alt="" /></div>
                 <p className='py-4'>Compilers are complex pieces of software that involve many stages, 
                    from parsing code to type checking to performing analyses and transformations,
                     and ultimately generating code for a given target. Intermediate representations (IRs for short) 
                     are a key ingredient in almost any modern compiler. IRs help represent programs in a structured 
                     and simplified way so as to make analyses and optimizations easier. In this blog post, we’ll delve 
                     into Codon’s intermediate representation—Codon IR—including why we created it, how it works, what it 
                     can do, how it can be extended through custom IR passes, and ultimately how it serves as a framework 
                     for optimizing Python code.
                </p>
               </div>
            </div>
        </article>
        <Footer />
    </div>
  )
}

export default Blogdetails