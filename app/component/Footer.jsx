import Image from "next/image";
import Link from "next/link";
import ToggleSwitch from "./ToggleSwitch";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const Footer = ({ isDarkMode, toggleMode }) => {
  return (
    <footer
      className={`${
        isDarkMode ? "dark" : ""
      }  border border-t-[#33353F] z-50 border-x-transparent`}
    >
      <div className="container p-6 md:p-12 flex items-center justify-between ">
        <span className="font-extrabold">
          <Link
            href="/"
            className="text-2xl md:text-3xl  flex items-center gap-3 font-semibold"
          >
            <Image src="/images/myLogo.png" alt="logo" width={40} height={40} />
            <p className="hidden lg:flex pt-2">Freedom Chisom</p>
          </Link>
        </span>
        <p className="text-slate-600">All right reserved.</p>
        <div className="flex">
          <div className="flex gap-2">
            <span
              onClick={toggleMode}
              className="font-semibold hidden md:block"
            >
              {isDarkMode ? "Dark Mode" : "Light Mode"}
            </span>
            <span className="font-semibold h-fit bg-primary p-[0.25rem] mr-1 rounded text-[1rem] md:hidden">
              {isDarkMode ? <MdDarkMode /> : <CiLight />}
            </span>
            <span className="">
              <ToggleSwitch toggle={toggleMode} isDarkMode={isDarkMode} />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
