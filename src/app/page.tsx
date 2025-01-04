"use client";
import Image from "next/image";
import Header from "../app/header";
import React from "react";
import CarCard from './card';
import Menu from "../app/menu";
import Footer from "../app/footer";
import Link from "next/link";
import morecars from "./morecars/page";

const cars = [
  {
    name: 'Koenigsegg',
    type: 'Sport',
    image: 'car3.png',
    fuel: '90L',
    transmission: 'Manual',
    seats: '2 People',
    price: '$99.00',
  },
  {
    name: 'Nissan GTR',
    type: 'Sport',
    image: 'car4.png',
    fuel: '80L',
    transmission: 'Manual',
    seats: '2 People',
    price: '$80.00',
  },
  {
    name: 'Rolls-Royce',
    type: 'Luxury',
    image: 'car5.png',
    fuel: '70L',
    transmission: 'Manual',
    seats: '4 People',
    price: '$96.00',
  },
  {
    name: 'All New Terios',
    type: 'SUV',
    image: 'car6.png',
    fuel: '90L',
    transmission: 'Manual',
    seats: '6 People',
    price: '$74.00',
  },
  {
    name: 'All New Rush',
    type: 'SUV',
    image: 'car7.png',
    fuel: '70L',
    transmission: 'Manual',
    seats: '6 People',
    price: '$72.00',
  },
  {
    name: 'CR-V',
    type: 'SUV',
    image: 'car8.png',
    fuel: '80L',
    transmission: 'Manual',
    seats: '6 People',
    price: '$80.00',
  },
  {
    name: 'MG ZX Excite',
    type: 'Hatchback',
    image: 'car9.png',
    fuel: '90L',
    transmission: 'Manual',
    seats: '4 People',
    price: '$74.00',
  },
  {
    name: 'MG ZX Exclusive',
    type: 'Hatchback',
    image: 'car10.png',
    fuel: '70L',
    transmission: 'Manual',
    seats: '4 People',
    price: '$76.00',
  },
];

export default function Home() {
  return (

    <div className="bg-[#F6F7F9]">
      <div>
        {/* Header Component */}
        <Header />
      </div>

      <div className="flex justify-center items-start space-x-[2%] mt-[32px]">
        {/* First Card */}
        <div className="w-full md:w-[640px] h-[360px] gap-0 rounded-[10px_0px_0px_0px] bg-[url('/car1a.png')] bg-cover bg-center flex flex-col justify-between pb-[20px]">
          {/* Inner Div A */}
          <div className="w-full md:w-[284px] md:h-[160px] gap-[16px] pl-[20px]">
            {/* First Sentence */}
            <div className="w-full gap-[16px] mt-[8px]">
              <p className="text-[24px] md:text-[32px] font-semibold leading-[32px] md:leading-[48px] tracking-[-0.03em] text-left">
                The Best Platform for Car Rental
              </p>
            </div>

            {/* Second Sentence */}
            <div className="w-full md:w-[284px] h-auto md:h-[48px] gap-0 mb-[8px]">
              <p className="text-[14px] md:text-[16px] font-medium leading-[20px] md:leading-[24px] tracking-[-0.02em] text-left">
                Ease of doing a car rental safely and reliably. Of course at a low price.
              </p>
            </div>

            {/* Button */}
            <div className="w-[100px] md:w-[120px] h-[40px] md:h-[44px] px-[20px] gap-[8px] rounded-[4px_0px_0px_0px] bg-[#3563E9] flex items-center justify-center">
              <p className="text-[14px] md:text-[16px] font-semibold leading-[20px] md:leading-[24px] tracking-[-0.02em] text-center">
                Rental Car
              </p>
            </div>
          </div>

          {/* Inner Div B (Image) */}
          <div className="w-full md:w-[406px] h-[100px] md:h-[116px] gap-0 flex items-end justify-center ml-auto mt-auto -mr-[-50px] md:-mr-[-100px]">
            <img
              src="/car1.png"
              alt="Car Rental"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Second Card */}
        {/* Second Card */}
        <div className="w-full md:w-[640px] h-[360px] gap-0 rounded-[10px_0px_0px_0px] bg-[url('/car2a.jpeg')] bg-cover bg-center flex flex-col justify-between pb-[20px]">
          {/* Inner Div A */}
          <div className="w-full md:w-[284px] md:h-[160px] gap-[16px] pl-[20px]">
            {/* First Sentence */}
            <div className="w-full gap-[16px] mt-[8px]">
              <p className="text-[24px] md:text-[32px] font-semibold leading-[32px] md:leading-[48px] tracking-[-0.03em] text-left">
                Easy way to rent a car at a low price
              </p>
            </div>

            {/* Second Sentence */}
            <div className="w-full md:w-[284px] h-auto md:h-[48px] gap-0 mb-[8px]">
              <p className="text-[14px] md:text-[16px] font-medium leading-[20px] md:leading-[24px] tracking-[-0.02em] text-left">
                Providing cheap car rental services and safe and comfortable facilities.
              </p>
            </div>

            {/* Button */}
            <div className="w-[100px] md:w-[120px] h-[40px] md:h-[44px] px-[20px] gap-[8px] rounded-[4px_0px_0px_0px] bg-[#3563E9] flex items-center justify-center">
              <p className="text-[14px] md:text-[16px] font-semibold leading-[20px] md:leading-[24px] tracking-[-0.02em] text-center">
                Rental Car
              </p>
            </div>
          </div>

          {/* Inner Div B (Image) */}
          <div className="w-full md:w-[406px] h-[100px] md:h-[116px] gap-0 flex items-end justify-center ml-auto mt-auto -mr-[0px] md:-mr-[-100px]">
            <img
              src="/car2.png"
              alt="Car Rental"
              className="w-full h-full object-cover transform scale-x-[-1]"
            />
          </div>
        </div>

      </div>
      <div>
        <Menu />
      </div>

      <div className="container mx-auto px-4 mt-10 flex flex-wrap items-center justify-between gap-4">
        {/* Popular Car Button */}
        <div className="flex items-center justify-center bg-white px-5 py-2 rounded-l-[4px]">
          <p className="text-[16px] font-semibold leading-[20px] text-center text-[#90A3BF] whitespace-nowrap">
            Popular Car
          </p>
        </div>

        {/* View All Button */}
        <div className="flex items-center justify-center bg-white px-5 py-2 rounded-l-[4px]">
          <p className="text-[16px] font-semibold leading-[20px] text-center text-[#3563E9]">
            View All
          </p>
        </div>
      </div>


      <div className="container mx-auto px-4 mt-5">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
          {cars.map((car, index) => (
            <div key={index} className="w-full max-w-[300px]">
              <CarCard
                name={car.name}
                type={car.type}
                image={car.image}
                fuel={car.fuel}
                transmission={car.transmission}
                seats={car.seats}
                price={car.price}
              />
            </div>
          ))}
        </div>
      </div>
      <a href="/morecars">
      <div className="flex justify-center items-center mx-auto mt-10 bg-blue-600 w-[156px] h-[44px] rounded-md">
  <p className="text-white text-center font-semibold">Show More Cars</p>
</div>


      </a>


      <div className="mt-10">
  {/* Footer Component */}
  <Footer />
</div>


    </div>


  );
}
