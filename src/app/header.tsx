import React from "react";
import { MagnifyingGlassIcon, HeartIcon, BellIcon, CogIcon } from "@heroicons/react/24/outline";

const Header: React.FC = () => {
  return (
    <div className="w-full h-[124px] border border-[#C3D4E966] relative">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-10 h-full">
        {/* Logo */}
        <div className="font-bold text-blue-600 text-[24px] lg:text-[32px] leading-[28px] lg:leading-[48px] tracking-[-0.03em]">
          MORENT
        </div>

        {/* Search Box */}
        <div className="hidden md:flex items-center w-[280px] sm:w-[360px] lg:w-[492px] h-[44px] bg-white border border-[#C3D4E966] rounded-[70px] px-4">
          <MagnifyingGlassIcon className="h-[24px] w-[24px] text-gray-500 border-[1.5px] border-[#596780] mr-2" />
          <input
            type="text"
            placeholder="Search something here"
            className="w-full h-[20px] text-sm text-gray-600 font-medium leading-[21px] tracking-[-0.02em] placeholder:text-gray-500 focus:outline-none"
            style={{
              fontFamily: "Plus Jakarta Sans",
              fontSize: "14px",
              textAlign: "justify",
            }}
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-[10px] sm:gap-[16px] lg:gap-[20px]">
          {/* Heart */}
          <div className="w-[36px] sm:w-[44px] h-[36px] sm:h-[44px] border border-[#C3D4E966] flex items-center justify-center rounded-full opacity-80">
            <HeartIcon className="w-[20px] sm:w-[24px] h-[20px] sm:h-[24px] text-gray-500" />
          </div>
          {/* Bell */}
          <div className="w-[36px] sm:w-[44px] h-[36px] sm:h-[44px] border border-[#C3D4E966] flex items-center justify-center rounded-full opacity-80">
            <BellIcon className="w-[20px] sm:w-[24px] h-[20px] sm:h-[24px] text-gray-500" />
          </div>
          {/* Cog */}
          <div className="w-[36px] sm:w-[44px] h-[36px] sm:h-[44px] border border-[#C3D4E966] flex items-center justify-center rounded-full opacity-80">
            <CogIcon className="w-[20px] sm:w-[24px] h-[20px] sm:h-[24px] text-gray-500" />
          </div>
          {/* Profile */}
          <div className="w-[36px] sm:w-[44px] h-[36px] sm:h-[44px] border border-[#C3D4E966] rounded-full overflow-hidden opacity-80">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mobile Search Box */}
      <div className="flex md:hidden mt-4 px-4">
        <div className="w-full h-[44px] bg-white border border-[#C3D4E966] rounded-[70px] flex items-center px-4">
          <MagnifyingGlassIcon className="h-[24px] w-[24px] text-gray-500 border-[1.5px] border-[#596780] mr-2" />
          <input
            type="text"
            placeholder="Search something here"
            className="w-full h-[20px] text-sm text-gray-600 font-medium leading-[21px] tracking-[-0.02em] placeholder:text-gray-500 focus:outline-none"
            style={{
              fontFamily: "Plus Jakarta Sans",
              fontSize: "14px",
              textAlign: "justify",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
