import { Link } from "react-router-dom";
import ProductGrid from "../components/Categories/ProductGrid";
// import ProductData from "../components/constants/ProductData";


function BrowserListing() {
  return (
    <div className="flex flex-col items-center justify-between px-4 md:px-16 py-2 w-full bg-gray-50 m-auto">
      <div className="flex flex-row items-center justify-between gap-4 px-2 md:px-20 py-2 max-w-7xl mx-auto w-full">
        <div>
          <h4 className="text-2xl md:text-5xl font-semibold mb-4 text-gray-800 text-center font-avenir">
            Browser Listing
          </h4>
        </div>
        <div>
          <Link
            to="/all-listings"
            className="px-4 md:px-6 text-xs md:text-lg py-2 rounded-sm bg-white-600 text-[#5400e6] border-2 font-avenir">
            See All Category
          </Link>
        </div>
      </div>

      {/* Render the grid Thrice */}
      {/* Render the grid Thrice */}
         {/* {/* <ProductGrid products={productItem} users={User} /> */}
         <ProductGrid products={[]} users={[]} />
         {/* <ProductGrid products={productItem} users={User} />  */}
    </div>
  );
}
export default BrowserListing;
