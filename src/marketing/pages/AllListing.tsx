import User from "../components/constants/Index";
import ProductGrid from "../components/Categories/ProductGrid";

// TODO: Replace this with your actual product items array or import
let productItem: any[] = [];

const dateOptions = [
  "Recent",
  "1 month Ago",
  "2 month Ago",
  "3 month Ago",
  "4 month Ago",
  "5 month Ago",
];

const priceOptions = [
  "Under 1-5k",
  "60k - 80k",
  "100k - 400k",
  "400k - 600k",
  "800k - 1M",
];

const categories = [
  {
    label: "Electronics",
    options: ["Sound speaker", "Amplifier", "Sound", "Speaker"],
  },
  {
    label: "Camera",
    options: ["Sony", "Canno", "Lens", "Digital Sony"],
  },
];

const AllListing = () => {
  return (
    <div className="flex  items-start  gap-4 p-4">
      <div className="  flex-row md:flex-row items-start justify-center w-60 pl-2  ">
        {/* Reset Filter Button */}
        <div className="grid grid-cols-1 md:grid-row-3 lg:grid-row-3 gap-4 p-4">
          <div>
            <h3 className="rounded-2xl w-27 font-bold border py-2 px-3">
              Reset Filter
            </h3>
          </div>
        </div>

        {/* Date Filter */}
        <div className="bg-white shadow-md rounded-lg p-10 w-60">
          <h2 className="text-xl font-semibold mb-2">Date</h2>
          <div className="ml-5">
            {dateOptions.map((option) => (
              <div className="flex gap-2 mb-2" key={option}>
                <input type="checkbox" id={option} name="date" value={option} />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div className="bg-white shadow-md rounded-lg p-10 w-60 md:mt-10">
          <h2 className="text-xl font-semibold mb-2">Price</h2>
          <div className="ml-5">
            {priceOptions.map((option) => (
              <div className="flex gap-2 mb-2" key={option}>
                <input
                  type="checkbox"
                  id={option}
                  name="price"
                  value={option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="bg-white shadow-md rounded-lg p-10 w-60  md:mt-10">
          {categories.map((category) => (
            <div className="pt-2" key={category.label}>
              <div className="flex gap-2 mb-2">
                <input
                  type="checkbox"
                  id={category.label}
                  name="category"
                  value={category.label}
                />
                <label htmlFor={category.label} className="font-bold">
                  {category.label}
                </label>
              </div>
              <div className="ml-5">
                {category.options.map((option) => (
                  <div className="flex gap-2 mb-2" key={option}>
                    <input
                      type="checkbox"
                      id={option}
                      name={category.label}
                      value={option}
                    />
                    <label htmlFor={option}>{option}</label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <div className="">
          <h3 className=" font-bold ">
            All Listings
          </h3>
          <ProductGrid products={productItem} users={User} />
          <ProductGrid products={productItem} users={User} />
          <ProductGrid products={productItem} users={User} />
        </div>
      </div>
    </div>
  );
};

export default AllListing;
