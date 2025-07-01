import { BiChevronRight } from "react-icons/bi";
import { Link } from 'react-router-dom';

// Define ProductItems type if not already imported
type ProductItems = {
  id: string | number;
  img: string;
  price: string | number;
  name: string;
  description: string;
};

// Define UserProfile type
type UserProfile = {
  id: string | number;
  img: string;
  name: string;
};

function ProductGrid({products, users}: {products: ProductItems[]; users: UserProfile[]}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-6 py-8 mx-auto max-w-7xl gap-5">
          {products.map((Product) => (
            <div
              key={Product.id}
              className="flex flex-col items-center justify-center border-2 border-gray-50 h-full w-95 md:w-70 shadow-md rounded-sm"
            >
              <img src={Product.img} alt="" className="h-65 md:h-50 w-full" />
              <div className="py-4 px-3">
                <p className="text-[#5400e6] font-semibold text-sm">{Product.price}</p>
                <h3 className="text-black-300 text-sm py-4 font-medium w-50">{Product.name}</h3>
                <p className="text-gray-400 text-xs">{Product.description}</p>
                <div className="flex items-center justify-start gap-2 mt-4">
                  <Link to="/categories" className="text-xs text-[#fb8500] border-b-1">See full details</Link>
                  <BiChevronRight className="text-[#fb8500]" />
                </div>
              </div>
              <div className="flex items-start justify-between gap-2 mt-4 mb-4">
                {users.map((user) => (
                  <div key={user.id} className="flex flex-row items-center justify-between gap-30 md:gap-12">
                    <div className="flex flex-row items-center justify-between gap-2">
                      <img src={user.img} alt="" className="h-8 w-8 rounded-full" />
                      <p className="text-xs text-gray-500">{user.name}</p>
                    </div>
                    <div className="border-2 rounded-lg text-[#5400e6] text-xs py-2 px-2">
                      <button>Make Booking</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
    </div>
  )
}

export default ProductGrid