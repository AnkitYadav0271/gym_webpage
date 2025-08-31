import { Link } from "react-router-dom";
import { HeaderText } from "../shared/HeaderText";
import { useScrollHook } from "../hooks/useScroll";


export const Footer = () => {

    const scroll = useScrollHook();

  return (
    <footer>
      <div className="bg-[#ffa6a3] flex md:flex-row flex-col justify-center items-center  gap-8 w-full mx-auto py-10">
        
        {/* Column 1: Logo & Description */}
        <div className="flex flex-col justify-between items-center text-center w-full px-4 h-full md:w-4/12 border-b-amber-50/20">
        <Link to="/" onClick={()=> scroll("home")}>  <img src="Logo.png" alt="logo png" className="w-24 h-auto mb-4" /> </Link>
          <p className="text-[#5e0000] m-0">
            Empowering every rep, every step. Whether you're chasing strength, endurance, or transformation, our community is here to support your journey. Built on discipline, driven by results.
          </p>
          <p className="text-[#5e0000] underline mt-4 m-0">© All rights reserved</p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="flex flex-col justify-between items-center text-center px-4 h-full w-4/12 gap-6">
          <HeaderText className="mb-0">Links</HeaderText>
          <p className="text-[#5e0000] hover:underline cursor-pointer m-0">Fee Structure</p>
          <p className="text-[#5e0000] hover:underline cursor-pointer m-0">Schedule</p>
          <p className="text-[#5e0000] hover:underline cursor-pointer m-0">Location</p>
        </div>

        {/* Column 3: Contact Info */}
        <div className="flex flex-col justify-between items-center text-center px-4 h-full w-4/12 gap-8">
          <HeaderText className="mb-0">Contact Us</HeaderText>
          <p className="text-[#5e0000] m-0">Email: evogym@email.com</p>
          <p className="text-[#5e0000] m-0">Call: +91XXXXXXXXXX</p>
        </div>

      </div>
    </footer>
  );
};
