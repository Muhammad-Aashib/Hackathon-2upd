import React from "react";

const Menu: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Pick-Up Section */}
        <div className="bg-gray-100 shadow-md p-4 rounded-lg w-full lg:flex-1">
          <h3 className="font-medium mb-4 text-blue-500">Pick-Up</h3>
          <div className="flex flex-col lg:flex-row items-center gap-4">
            {/* Location */}
            <div className="w-full lg:flex-1 relative">
              <label htmlFor="pickup-location" className="block text-gray-700 mb-1">
                Location
              </label>
              <select
                id="pickup-location"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              >
                <option>Select your city</option>
                <option>City A</option>
                <option>City B</option>
              </select>
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
                ▼
              </span>
            </div>

            {/* Date */}
            <div className="w-full lg:flex-1 relative">
              <label htmlFor="pickup-date" className="block text-gray-700 mb-1">
                Date
              </label>
              <input
                id="pickup-date"
                type="text"
                placeholder="Select your date"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
                ▼
              </span>
            </div>

            {/* Time */}
            <div className="w-full lg:flex-1 relative">
              <label htmlFor="pickup-time" className="block text-gray-700 mb-1">
                Time
              </label>
              <input
                id="pickup-time"
                type="text"
                placeholder="Select your time"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onFocus={(e) => (e.target.type = "time")}
                onBlur={(e) => (e.target.type = "text")}
              />
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
                ▼
              </span>
            </div>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex items-center justify-center px-4 lg:px-8">
          <button
            type="button"
            className="bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
          >
            <span className="text-xl">&#8644;</span>
          </button>
        </div>

        {/* Drop-Off Section */}
        <div className="bg-gray-100 shadow-md p-4 rounded-lg w-full lg:flex-1">
          <h3 className="font-medium mb-4 text-blue-500">Drop-Off</h3>
          <div className="flex flex-col lg:flex-row items-center gap-4">
            {/* Location */}
            <div className="w-full lg:flex-1 relative">
              <label htmlFor="dropoff-location" className="block text-gray-700 mb-1">
                Location
              </label>
              <select
                id="dropoff-location"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              >
                <option>Select your city</option>
                <option>City A</option>
                <option>City B</option>
              </select>
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
                ▼
              </span>
            </div>

            {/* Date */}
            <div className="w-full lg:flex-1 relative">
              <label htmlFor="dropoff-date" className="block text-gray-700 mb-1">
                Date
              </label>
              <input
                id="dropoff-date"
                type="text"
                placeholder="Select your date"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
                ▼
              </span>
            </div>

            {/* Time */}
            <div className="w-full lg:flex-1 relative">
              <label htmlFor="dropoff-time" className="block text-gray-700 mb-1">
                Time
              </label>
              <input
                id="dropoff-time"
                type="text"
                placeholder="Select your time"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onFocus={(e) => (e.target.type = "time")}
                onBlur={(e) => (e.target.type = "text")}
              />
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
                ▼
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
