"use client";

import Link from "next/link";
import { useState } from "react";
import menu from "../public/images/menu.svg";
import exitMenu from "../public/images/rightarrow.svg";
import logo from "../public/images/Vector.png";

const Navbar = () => {
  const [selected, setSelected] = useState("about");
  const [nav, setNav] = useState(false);

  const handleSelected = (value: string) => {
    setSelected(value);
  };

  return (
    <div className="bg-black/[0.56] absolute w-full backdrop-blur-[50px] text-white flex px-16 py-5 justify-around md:justify-between md:items-center">
      <div className="flex justify-start items-center gap-5">
        <button>
          <img src={logo.src} alt="" />
        </button>
        <Link
          href="/"
          className="font-Norwester text-[22px] sm:text-[32px] uppercase"
        >
          ANGELSHARE
        </Link>
      </div>
      <div className="hidden md:flex font-Glacial items-center gap-10 text-base">
        <Link
          href="/"
          className={` text-[16px] font-normal ${
            selected === "about" ? "border-b-2" : ""
          }`}
          onClick={() => handleSelected("about")}
        >
          About
        </Link>
        <Link
          href="/WhitePaper"
          className={`text-[16px] ${
            selected === "whitepaper" ? "border-b-2" : ""
          }`}
          onClick={() => handleSelected("whitepaper")}
        >
          Whitepaper
        </Link>
        <Link
          href="/WhiteList"
          className={`text-[16px] ${
            selected === "getwhitelisted" ? "border-b-2" : ""
          }`}
          onClick={() => handleSelected("getwhitelisted")}
        >
          Get Whitelisted
        </Link>
      </div>
      <div
        className="md:hidden flex w-full justify-end p-5"
        onClick={() => setNav(!nav)}
      >
        <img src={menu.src} alt="" />
      </div>
      <header className="absolute flex md:hidden gap-5">
        {nav && (
          <div className="fixed bg-black left-0 top-0 w-full">
            <ul className="flex flex-col items-center">
              <li className="flex items-center w-full px-5 justify-center">
                <img src={logo.src} alt="" />
                <div
                  className="md:hidden flex w-full justify-end p-5"
                  onClick={() => setNav(!nav)}
                >
                  <img src={exitMenu.src} alt="" />
                </div>
              </li>
              <li className="p-4">
                <Link
                  href="/"
                  className={` text-[16px] font-normal ${
                    selected === "about" && "border-b-2"
                  }`}
                  onClick={() => {
                    handleSelected("about");
                    setNav(!nav);
                  }}
                >
                  About
                </Link>
              </li>
              <li className="p-4">
                <Link
                  href="/WhitePaper"
                  className={`text-[16px] ${
                    selected === "whitepaper" && "border-b-2"
                  }`}
                  onClick={() => {
                    handleSelected("whitepaper");
                    setNav(!nav);
                  }}
                >
                  Whitepaper
                </Link>
              </li>
              <li className="p-4">
                <Link
                  href="/WhiteList"
                  className={`text-[16px] ${
                    selected === "getwhitelisted" && "border-b-2"
                  }`}
                  onClick={() => {
                    handleSelected("getwhitelisted");
                    setNav(!nav);
                  }}
                >
                  Get Whitelisted
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};
export default Navbar;
