import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-white border border-t-[#33353F] z-50 border-x-transparent">
      <div className="container p-6 md:p-12 flex items-center justify-between">
        <span className="font-extrabold">
          <Link
            href="/"
            className="text-2xl md:text-3xl text-white flex items-center gap-3 font-semibold"
          >
            <Image src="/images/myLogo.png" alt="logo" width={40} height={40} />
            <p className="hidden md:flex pt-2">Freedom Chisom</p>
          </Link>
        </span>
        <p className="text-slate-600">All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
