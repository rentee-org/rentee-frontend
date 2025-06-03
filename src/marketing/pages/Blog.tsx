import React from "react";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
// import Navbar from "../components/layout/Navbar";

const Blog = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <article>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-lg font-bold mb-4 py-2 px-4 w-30 rounded-md bg-[#F4E0FF] text-[#5400E6]">
              Articles
            </h1>
            <p className="text-gray-700 mb-6 text-4xl">
              All the latest news, updates and technical deep dives
            </p>
          </div>

          <div>
            <div className="flex  items-center mb-6 gap-6">
              <a href="#">All Stories</a>
              <a href="#">Market Updates</a>
              <a href="#">Company</a>
            </div>

            <div className="grid grid-cols-1  gap-6">
              <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md mb-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Article </h2>
                  <p className="text-gray-600 mb-4">
                    All the latest news, updates and technical deep dives
                  </p>
                  <a href="#" className="text-blue-500 hover:underline">
                    Read Story
                  </a>
                </div>

                <div>
                  <img src={blog1} alt="" />
                </div>
              </div>

              <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md mb-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Article </h2>
                  <p className="text-gray-600 mb-4">
                    All the latest news, updates and technical deep dives
                  </p>
                  <a href="#" className="text-blue-500 hover:underline">
                    Read Story
                  </a>
                </div>

                <div>
                  <img src={blog2} alt="" />
                </div>
              </div>
              <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md mb-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Article </h2>
                  <p className="text-gray-600 mb-4">
                    All the latest news, updates and technical deep dives
                  </p>
                  <a href="#" className="text-blue-500 hover:underline">
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
    </div>
  );
};

export default Blog;
