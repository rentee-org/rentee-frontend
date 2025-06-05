import react from "react"
import { Link } from "react-router-dom";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import Navbar from "@/marketing/components/layout/Navbar";
import Footer from "@/marketing/components/layout/Footer";


const Blog = () => {

  return (
    <div>
      <Navbar />
      <article>
        <div className="max-w-7xl mx-auto px-4 py-8 mt-14">
          <div className="mb-8">
            <span className="text-lg font-bold mb-4 py-2 px-4  rounded-md bg-[#F4E0FF] text-[#5400E6]">
              Articles
            </span>
            <p className="text-gray-700 mb-20 text-5xl max-w-3xl py-7">
              All the latest news, updates and technical deep dives
            </p>
          </div>

          <div>
            <div className="flex  items-center mb-6 gap-6">
              <a href="#" className="text-[#5400e6]">All Stories</a>
              <Link to="/Blogdetails"  className="text-[#C7C7C7]">Market Updates</Link>
              <a href="#" className="text-[#C7C7C7]">Company</a>
            </div>

            <div className="grid grid-cols-1  gap-6">
              <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between justify-center bg-white p-6 rounded-lg shadow-md mb-6">
                <div>
                  <div className=" mb-3 gap-5 ">
                    <span className="rounded-3xl bg-[#5400E6] px-3 py-0.5"></span>
                    <span className="text-black  ml-4">Market Updates</span>
                    <span className="ml-4" >May 15, 2025</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-4xl tracking-tight py-5 max-w-md">
                    Codon IR: a framework for optimizing Python code
                  </p>
                  <a href="" className="text-white bg-[#5400E6] px-4 py-2 rounded ">
                    Read Story
                  </a>
                </div>

                <div>
                  <img src={blog1} alt="" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row  items-start md:items-center  justify-center md:justify-between bg-white p-6 rounded-lg shadow-md mb-6">
                <div>
                  <div className=" mb-3 gap-5 ">
                    <span className="rounded-3xl bg-[#5400E6] px-3 py-0.5"></span>
                    <span className="text-black  ml-4">Market Updates</span>
                    <span className="ml-4" >May 15, 2025</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-4xl tracking-tight py-5 max-w-md">
                    Codon in 2025: New compiler-optimized NumPy implementation. 
                  </p>
                  <a href="#" className="text-white bg-[#5400E6] px-4 py-2 rounded ">
                    Read Story
                  </a>
                </div>

                <div>
                  <img src={blog2} alt="" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between bg-white p-6 rounded-lg shadow-md mb-6">
                <div>
                  <div className=" mb-3 gap-5 ">
                    <span className="rounded-3xl bg-[#5400E6] px-3 py-0.5"></span>
                    <span className="text-black  ml-4">Market Updates</span>
                    <span className="ml-4" >May 15, 2025</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-4xl tracking-tight py-5 max-w-md">
                    Codon IR: a framework for optimizing Python code
                  </p>
                  <a href="" className="text-white bg-[#5400E6] px-4 py-2 rounded ">
                    Read Story
                  </a>
                </div>

                <div>
                  <img src={blog3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default Blog;
