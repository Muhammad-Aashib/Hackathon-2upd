"use client";
import Image from "next/image";
import Header from "../header";
import React from "react";

import Form from "../form";
import Footer from "../footer";

export default function FormPage() {
  return (
    <div className="bg-[#F6F7F9]">
      {/* Header Component */}
      <Header />

      <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-10 mt-8 space-y-8 lg:space-y-0">
        {/* Form Component */}
        <div className="flex-1 lg:mr-6">
          <Form />
        </div>

        {/* Rental Summary Div */}
        <div className="w-full lg:w-[492px] h-auto lg:h-[560px] rounded-tl-[10px] bg-white p-6 shadow-md">
          {/* Title Section */}
          <div className="font-sans">
            <h1 className="text-[16px] font-bold leading-[24px] text-[#333333]">
              Rental Summary
            </h1>
            <p className="text-[14px] leading-[20px] text-[#666666] mt-2">
              Prices may change depending on the length of the rental and the
              price of your rental car.
            </p>
          </div>

          {/* Car Image and Details */}
          <div className="flex items-center mt-6">
            <Image
              src="/thumb3.png"
              alt="Car Thumbnail"
              width={132}
              height={108}
              className="rounded-lg"
            />
            <div className="ml-4">
              <h2 className="text-[18px] font-bold leading-[24px] text-[#333333]">
                Nissan GT – R
              </h2>
              <div className="flex items-center">
                <span className="text-[14px] font-bold leading-[20px] text-[#FF9900] mr-2">
                  ★★★★☆
                </span>
                <p className="text-[14px] leading-[20px] text-[#666666]">
                  440+ Reviews
                </p>
              </div>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="border-t border-[#E0E0E0] mt-6 pt-4">
            <div className="flex justify-between">
              <p className="text-[16px] leading-[24px] text-[#333333]">
                Subtotal
              </p>
              <p className="text-[16px] leading-[24px] text-[#333333]">$80.00</p>
            </div>
            <div className="flex justify-between mt-2">
              <p className="text-[16px] leading-[24px] text-[#333333]">Tax</p>
              <p className="text-[16px] leading-[24px] text-[#333333]">$0.00</p>
            </div>
          </div>

          {/* Promo Code Section */}
          <div className="border-t border-[#E0E0E0] mt-4 pt-4">
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Apply promo code"
                className="flex-1 p-2 border border-[#CCCCCC] rounded text-[14px] text-[#333333]"
              />
              <button className="px-4 py-2 bg-[#007BFF] text-white rounded text-[14px] font-bold">
                Apply now
              </button>
            </div>
          </div>

          {/* Total Rental Price */}
          <div className="border-t border-[#E0E0E0] mt-4 pt-4">
            <div className="flex justify-between items-center">
              <p className="text-[18px] font-bold leading-[24px] text-[#333333]">
                Total Rental Price
              </p>
              <p className="text-[24px] font-bold leading-[32px] text-[#007BFF]">
                $80.00
              </p>
            </div>
            <p className="text-[14px] leading-[20px] text-[#666666] mt-2">
              Overall price and includes rental discount
            </p>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
