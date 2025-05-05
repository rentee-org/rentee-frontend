 import AnimatedTextCycler from "../components/layout/AnimateTextCycler";
import Layout from "../components/layout/Layout";
import Hero from "../assets/Hero.png";




const Home = () => {
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center  gap-3 px-6 md:px-16 py-20  bg-gray-50 ">
        {/* Text Block */}
        <div className="w-full md:w-1/2 text-center mb-6">
          <div>
            <h1 className="text-5xl font-semibold font-avenir tracking-wide" >Why buy when you can </h1>
          </div>

          <div className="font-bold  font-avenir">
            <AnimatedTextCycler />
          </div>

          <p className="text-gray-600 mt-2 text-xl font-avenir">
            Affordable. Convenient. Right where you need it.
          </p>
        </div>

        {/* Image Block */}
        <div className="w-full flex justify-center items-center">
          <img src={Hero} alt="Rentee" className=" h-auto object-contain" />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
