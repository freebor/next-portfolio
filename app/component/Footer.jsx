import Image from "next/image";
import Link from "next/link";
import ToggleSwitch from "./ToggleSwitch";

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
          <button className="flex gap-2" onClick={toggleMode}>
            <span className="font-semibold block md:hidden bg-primary p-2 rounded-md">
              {isDarkMode ? "Dark Mode" : "Light Mode"}
            </span>
            <span className="font-semibold hidden md:block">
              {isDarkMode ? "Dark Mode" : "Light Mode"}
            </span>
            <span className="hidden md:block">
              <ToggleSwitch toggle={toggleMode} isDarkMode={isDarkMode} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
