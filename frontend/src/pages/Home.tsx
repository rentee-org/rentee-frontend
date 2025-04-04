import Layout from "../components/layout/Layout";

const Home = () => {
  return (
    <Layout>
      <section className="flex flex-col-reverse items-center justify-between gap-12 px-6 md:px-16 py-20 w-full bg-gray-50 min-h-screen">
        {/* Text Block */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Rent anything, anytime.
          </h1>
          <p className="text-gray-600 mb-6">
            Discover and rent tools, electronics, and more from people near you.
          </p>
          <a
            href="/register"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Get Started
          </a>
        </div>

        {/* Image Block */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="/rentee-hero.svg" // Replace with actual image if needed
            alt="Rentee"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
