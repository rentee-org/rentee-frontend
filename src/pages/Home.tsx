 import AnimatedTextCycler from "../components/layout/AnimateTextCycler";
import Layout from "../components/layout/Layout";
import Hero from "../assets/Hero.png";
import MobileHero from "../assets/Hero-mobile.png";




const Home = () => {
  return (
      <Layout>
      <section className="flex flex-col items-center justify-between  px-6 md:px-16 mt-10  py-5 md:py-20 bg-gray-50">
        {/* Text Block */}
        <div className="w-full md:w-1/2 text-center mb-2 md:mb-4">
          <div>
            <h1 className="text-2xl md:text-5xl font-semibold font-avenir tracking-wide md:tracking-normal md:py-2 ">
              Why buy when you can 
            </h1>
          </div>
          <div className="font-bold font-avenir">
            <AnimatedTextCycler />
          </div>
          <p className="text-[#454447] md:my-2 hidden md:block md:text-2xl font-avenir ">
            Affordable. Convenient. Right where you need it.
          </p>
        </div>

        {/* Image Block */}
        <div className="w-full flex justify-center items-center">
          {/* Mobile Image - shown only on mobile */}
          <img 
            src={MobileHero} 
            alt="Rentee Mobile" 
            className="block md:hidden h-auto object-contain w-2xl" 
          />
          
          {/* Desktop Image - hidden on mobile */}
          <img 
            src={Hero} 
            alt="Rentee Desktop" 
            className="hidden md:block h-auto object-contain" 
          />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
