import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-white flex flex-col px-6 py-8 md:px-10 lg:py-8">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0 md:space-x-16">
        {/* Brand Section */}
        <div className="max-w-[400px]">
          <h2 className="text-2xl font-bold text-[#3563E9] mb-2">MORENT</h2>
          <p className="text-base text-gray-700">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">How it works</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Featured</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Partnership</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Business Relation</a></li>
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Events</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Podcast</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Invite a friend</a></li>
            </ul>
          </div>

          {/* Socials Section */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Socials</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Discord</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Instagram</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-300 mt-8 pt-4">
        <p className="text-sm text-gray-500 mb-4 md:mb-0">©2022 MORENT. All rights reserved</p>
        <div className="flex space-x-4 text-sm">
          <a href="#" className="text-gray-600 hover:text-black">Privacy & Policy</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="text-gray-600 hover:text-black">Terms & Condition</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
