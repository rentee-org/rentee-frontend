// import { HeartOff } from "lucide-react";
import Logo from "../../assets/Logo.png"

const Footer = () => (
  <footer className=" py-6  bg-gray-100  mt-12">


    <div>
      <div className="container mx-auto text-center px-8" >
        <div className="flex flex-col md:flex-row justify-center items-center">
           <div className="md:mr-auto flex flex-col items-center md:items-start">
              <div className="flex flex-row items-center  gap-3">
                 <img src={Logo} alt="" />
                 <h2 className="text-xl font-bold">Rentee</h2>
              </div>

              <div>
                 <p className=" text-gray-500 mt-4 flex items-center text-center md:text-start mb-10">
                    Rent your favorite gadgets effortlessly <br /> with . A seamless and instant rental service <br /> designed for you. Make life easier—rent <br /> instead of buying!
                 </p>
              </div>
           </div>


           <div className="flex flex-col md:flex-row  justify-between  gap-17  mt-15 md:mt-25  md:mr-30 ">
              <div className="flex flex-col gap-4">
                 <h3 className="text-lg font-semibold">Company</h3>
                 <ul className="text-gray-500 text-sm/8">
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Faqs</li>
                   
                 </ul>
              </div>

              <div className="flex flex-col gap-4 md:place-self-start ">
                 <h3 className="text-lg font-semibold">Product</h3>
                 <ul className="text-gray-500">
                    <li>All category</li>
                 </ul>
              </div>

              <div className="flex flex-col gap-4">
                 <h3 className="text-lg font-semibold">Legal</h3>
                 <ul className="text-gray-500 text-sm/8">
                    <li>Term of Use</li>
                    <li>Privacy Policy</li>
                    <li>Terms and  condition</li>
                 </ul>
              </div>

              <div className="flex flex-col gap-4">
                 <h3 className="text-lg font-semibold">Follow Us</h3>
                 <ul className="text-gray-500 text-sm/8">
                    <li>Instagram</li>
                    <li>Twiter</li>
                    <li>LinkedInk</li>
                 </ul>
              </div>
           </div>
        </div>
      </div>
    </div>


    <div className="container mx-auto text-center md:text-left px-8 mt-10">
      <hr className="bg-gray-400"/>
      
      <p className="text-gray-500 mt-8 mb-10">&copy; {new Date().getFullYear()} Rentee. All rights reserved.</p>
    </div>
  </footer>
)

export default Footer;