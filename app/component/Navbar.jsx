"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLink = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbaraopen] = useState(false);
  return (
    <nav className="fixed mx-auto border-b border-[#33353F] top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href="/"
          className="text-2xl md:text-3xl  flex items-center gap-3 font-semibold"
        >
          <Image src="/images/myLogo.png" alt="logo" width={40} height={40} />
          <p className="hidden md:flex text-Gray2 pt-2">Freedom Chisom</p>
        </Link>
        {/* MOBILE MENU */}
        <div className="block text-Gray2 lg:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbaraopen(true)}
              className="flex items-center text-slate-200 px-3 py-2 border rounded border-slate-200 hover: hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbaraopen(false)}
              className="flex items-center text-slate-200 px-3 py-2 border rounded border-slate-200 hover: hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden lg:block lg:w-auto" id="navbar">
          <ul className="flex lg:flex-row p-4 md:p-0 mt-0 lg:space-x-8">
            {navLink.map((list, index) => (
              <li key={index}>
                <NavLink
                  className="text-Gray2 "
                  href={list.href}
                  title={list.title}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLink} /> : null}
    </nav>
  );
};

export default Navbar;
