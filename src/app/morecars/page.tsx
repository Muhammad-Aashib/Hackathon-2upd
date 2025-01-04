"use client";
import Image from "next/image";
import Header from "../header";
import Footer from "../footer";
import CarCard from "../card";
import Menu from "../menu";

const cars = [
    {
        name: "Koenigsegg",
        type: "Sport",
        image: "car3.png",
        fuel: "90L",
        transmission: "Manual",
        seats: "2 People",
        price: "$99.00",
    },
    {
        name: "Nissan GTR",
        type: "Sport",
        image: "car4.png",
        fuel: "80L",
        transmission: "Manual",
        seats: "2 People",
        price: "$80.00",
    },
    {
        name: "Rolls-Royce",
        type: "Luxury",
        image: "car5.png",
        fuel: "70L",
        transmission: "Manual",
        seats: "4 People",
        price: "$96.00",
    },
    {
        name: "All New Terios",
        type: "SUV",
        image: "car6.png",
        fuel: "90L",
        transmission: "Manual",
        seats: "6 People",
        price: "$74.00",
    },
    {
        name: "All New Rush",
        type: "SUV",
        image: "car7.png",
        fuel: "70L",
        transmission: "Manual",
        seats: "6 People",
        price: "$72.00",
    },
    {
        name: "CR-V",
        type: "SUV",
        image: "car8.png",
        fuel: "80L",
        transmission: "Manual",
        seats: "6 People",
        price: "$80.00",
    },
    {
        name: "MG ZX Excite",
        type: "Hatchback",
        image: "car9.png",
        fuel: "90L",
        transmission: "Manual",
        seats: "4 People",
        price: "$74.00",
    },
    {
        name: "MG ZX Exclusive",
        type: "Hatchback",
        image: "car10.png",
        fuel: "70L",
        transmission: "Manual",
        seats: "4 People",
        price: "$76.00",
    },
];

export default function MoreCars() {
    return (
      <main className="max-w-[1440px] mx-auto w-full">
        <div className="bg-[#F6F7F9] min-h-screen">
            {/* Header */}
            <Header />

            {/* Main Container */}
            <div className="container mx-auto px-4 mt-5 flex gap-8">
               {/* Sidebar */}
<aside className="w-[250px] bg-white shadow-md p-6 rounded-lg md:relative md:block md:w-[250px] hidden">
    <h3 className="text-lg font-semibold mb-6">Filters</h3>
    <div className="space-y-8">
        {/* Type Section */}
        <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Type</h4>
            <ul className="space-y-3">
                <li className="flex items-center gap-3">
                    <input type="checkbox" id="sport" className="form-checkbox text-blue-600" />
                    <label htmlFor="sport" className="text-sm text-gray-800">
                        <span className="font-semibold">Sport</span> <span className="font-normal text-gray-500">(10)</span>
                    </label>
                </li>
                <li className="flex items-center gap-3">
                    <input type="checkbox" id="suv" className="form-checkbox text-blue-600" />
                    <label htmlFor="suv" className="text-sm text-gray-800">
                        <span className="font-semibold">SUV</span> <span className="font-normal text-gray-500">(12)</span>
                    </label>
                </li>
                <li className="flex items-center gap-3">
                    <input type="checkbox" id="mpv" className="form-checkbox text-blue-600" />
                    <label htmlFor="mpv" className="text-sm text-gray-800">
                        <span className="font-semibold">MPV</span> <span className="font-normal text-gray-500">(16)</span>
                    </label>
                </li>
                <li className="flex items-center gap-3">
                    <input type="checkbox" id="sedan" className="form-checkbox text-blue-600" />
                    <label htmlFor="sedan" className="text-sm text-gray-800">
                        <span className="font-semibold">Sedan</span> <span className="font-normal text-gray-500">(20)</span>
                    </label>
                </li>
                <li className="flex items-center gap-3">
                    <input type="checkbox" id="coupe" className="form-checkbox text-blue-600" />
                    <label htmlFor="coupe" className="text-sm text-gray-800">
                        <span className="font-semibold">Coupe</span> <span className="font-normal text-gray-500">(14)</span>
                    </label>
                </li>
                <li className="flex items-center gap-3">
                    <input type="checkbox" id="hatchback" className="form-checkbox text-blue-600" />
                    <label htmlFor="hatchback" className="text-sm text-gray-800">
                        <span className="font-semibold">Hatchback</span> <span className="font-normal text-gray-500">(14)</span>
                    </label>
                </li>
            </ul>
        </div>

        {/* Capacity Section */}
        <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Capacity</h4>
            <ul className="space-y-3">
                <li className="flex items-center gap-3">
                    <input type="checkbox" id="2person" className="form-checkbox text-blue-600" />
                    <label htmlFor="2person" className="text-sm text-gray-800">
                        <span className="font-semibold">2 Person</span> <span className="font-normal text-gray-500">(10)</span>
                    </label>
                </li>
                <li className="flex items-center gap-3">
                    <input type="checkbox" id="4person" className="form-checkbox text-blue-600" />
                    <label htmlFor="4person" className="text-sm text-gray-800">
                        <span className="font-semibold">4 Person</span> <span className="font-normal text-gray-500">(14)</span>
                    </label>
                </li>
                <li className="flex items-center gap-3">
                    <input type="checkbox" id="6person" className="form-checkbox text-blue-600" />
                    <label htmlFor="6person" className="text-sm text-gray-800">
                        <span className="font-semibold">6 Person</span> <span className="font-normal text-gray-500">(12)</span>
                    </label>
                </li>
                <li className="flex items-center gap-3">
                    <input type="checkbox" id="8ormore" className="form-checkbox text-blue-600" />
                    <label htmlFor="8ormore" className="text-sm text-gray-800">
                        <span className="font-semibold">8 or More</span> <span className="font-normal text-gray-500">(16)</span>
                    </label>
                </li>
            </ul>
        </div>

        {/* Price Range Section */}
        <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Price</h4>
            <div>
                <input type="range" className="w-full text-blue-600" />
                <p className="text-sm text-gray-800 mt-2">Max: $100.00</p>
            </div>
        </div>
    </div>
</aside>



                {/* Main Content */}
<main className="flex-1">
  {/* Selection Panel */}
  <div className="bg-white p-6 rounded-lg shadow-md mb-8">
    <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-8">
        {/* Pick-Up Section */}
        <div className="bg-gray-100 shadow-md p-6 rounded-lg w-full lg:flex-1">
          <h3 className="font-medium mb-4 text-blue-500">Pick-Up</h3>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Location */}
            <div className="flex-1 relative">
              <select
                id="pickup-location"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              >
                <option>Select your city</option>
                <option>City A</option>
                <option>City B</option>
              </select>
            </div>

            {/* Date */}
            <div className="flex-1 relative">
              <input
                id="pickup-date"
                type="text"
                placeholder="Select your date"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
            </div>

            {/* Time */}
            <div className="flex-1 relative">
              <input
                id="pickup-time"
                type="text"
                placeholder="Select your time"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onFocus={(e) => (e.target.type = "time")}
                onBlur={(e) => (e.target.type = "text")}
              />
            </div>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex items-center justify-center w-full lg:w-auto">
          <button
            type="button"
            className="bg-blue-500 text-white p-4 rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12H4.5m7.5-7.5L4.5 12l7.5 7.5"
              />
            </svg>
          </button>
        </div>

        {/* Drop-Off Section */}
        <div className="bg-gray-100 shadow-md p-6 rounded-lg w-full lg:flex-1">
          <h3 className="font-medium mb-4 text-blue-500">Drop-Off</h3>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Location */}
            <div className="flex-1 relative">
              <select
                id="dropoff-location"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              >
                <option>Select your city</option>
                <option>City A</option>
                <option>City B</option>
              </select>
            </div>

            {/* Date */}
            <div className="flex-1 relative">
              <input
                id="dropoff-date"
                type="text"
                placeholder="Select your date"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
            </div>

            {/* Time */}
            <div className="flex-1 relative">
              <input
                id="dropoff-time"
                type="text"
                placeholder="Select your time"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onFocus={(e) => (e.target.type = "time")}
                onBlur={(e) => (e.target.type = "text")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



                    {/* Cars Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cars.map((car, index) => (
                            <CarCard
                                key={index}
                                name={car.name}
                                type={car.type}
                                image={car.image}
                                fuel={car.fuel}
                                transmission={car.transmission}
                                seats={car.seats}
                                price={car.price}
                            />
                        ))}
                    </div>
                </main>
            </div>

            {/* Footer */}
            <Footer />
        </div>
        </main>
    );
}
