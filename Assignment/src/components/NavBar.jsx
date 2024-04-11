import React from "react";
import { menublack18dp, KoinXLogo  } from "../assets";
import { navLinks } from "../constants/index.js";

const Header = () => {
  return (
    <header className=" h-[80px]  border-2 bg-white">
      <nav className="flex justify-between items-center">
        <a
          href="/"
          className="w-[96px] h-[72px] "
        >
          <img
            src="src/assets/KoinXLogo.svg"
            alt="logo"
            width={96}
            height={24}
            className="w-[96px] h-[24px] sm:ml-[60px] mx-[24px] my-[24px]"
          />
        </a>

        <div className="flex justify-center items-center gap-8 h-[79px] ">
          <ul className="flex justify-center items-center gap-8 left-[355px] py-[30px] mt-[4px] mb-[5px] max-lg:hidden">
            {navLinks.map((item) => (
              <li className="gap-[6px]" key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button className="sm:block hidden h-[40px] w-[136px] mr-[56px] rounded-lg p-[8px] bg-gradient-to-br from-blue-600 to-blue-900 font-inter text-white font-medium text-lg leading-6">Get Started</button>
        </div>
{/*
        <div className="flex justify-center items-center -[45px] w-[136px] h-[70px] top-[4.5px] gap-[6px] text-lg leading-normal font-medium font-montserrat max-lg:hidden flex-row">
          <button className="rounded-md border-2 h-[40px] w-[136px] my-[15px] p-2 gap-2 border-black bg-white hover:bg-black hover:text-white">
            Get Started
          </button>
        </div> */}

        <div className="mr-[24px] hidden max-lg:block">
          <img
            src={menublack18dp}
            alt="menublack18dp icon"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
