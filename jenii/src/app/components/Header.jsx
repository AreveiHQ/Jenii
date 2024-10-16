import Image from "next/image";
import logo from "@/assets/logo.png"
const Header = () => {
    return (
      <>
        <div className="flex w-full justify-between items-center py-3 px-6">
          {/* Logo */}
          <div>
            <Image src={logo} alt="Jenii Logo" className="h-20 w-30 object-contain" />
          </div>
  
          {/* Navigation Links */}
          <div className="">
            <ul className="flex gap-8 items-center">
              {/* About Us */}
              <li className="text-[#C41E56] text-lg font-medium cursor-pointer hover:underline">
                About Us
              </li>
              {/* Visit Store Button */}
              <li>
                <button className="bg-[#C41E56] text-white px-4 py-2 rounded-full text-lg font-medium hover:bg-[#a71745] transition">
                  Visit Store
                </button>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  };
  
  export default Header;