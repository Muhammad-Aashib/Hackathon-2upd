import React from "react";

interface CarCardProps {
  name: string;
  type: string;
  image: string;
  fuel: string;
  transmission: string;
  seats: string;
  price: string;
}

const CarCard: React.FC<CarCardProps> = ({
  name,
  type,
  image,
  fuel,
  transmission,
  seats,
  price,
}) => {
  return (
    <div className="car-card bg-white w-full sm:w-[304px] rounded-tl-[10px] shadow-lg overflow-hidden">
      {/* Car Name and Type */}
      <div className="car-name-type p-4 sm:p-6">
        <div className="car-name text-base sm:text-lg font-bold text-[#1A202C]">
          {name}
        </div>
        <div className="car-type text-sm font-bold text-[#90A3BF]">{type}</div>
      </div>

      {/* Heart Icon */}
      <div className="heart-icon absolute top-4 right-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 sm:w-5 sm:h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.049 2.927c1.24-1.241 3.254-1.241 4.494 0l.057.057c1.24 1.241 1.24 3.25 0 4.49l-7.067 7.065a3 3 0 01-4.24 0l-7.068-7.065c-1.24-1.24-1.24-3.25 0-4.49l.057-.057c1.24-1.241 3.254-1.241 4.494 0l2.47 2.471a3 3 0 014.24 0l2.47-2.471z"
            fill="#ED3F3F"
          />
        </svg>
      </div>

      {/* Car Image */}
      <div className="car-image w-full h-[150px] sm:w-[232px] sm:h-[120px] mx-auto mt-4">
        <img src={image} alt="Car Image" className="w-full h-full object-cover" />
      </div>

      {/* Car Details */}
      <div className="car-details p-4 sm:p-6">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span>{fuel}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>{transmission}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>{seats}</span>
          </div>
        </div>
      </div>

      {/* Price and Rent Now */}
      <div className="price-rent p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="price text-xl sm:text-2xl font-bold">{price}</div>
          <div className="per-day text-sm font-bold text-[#90A3BF]">/ day</div>
        </div>
        <button className="rent-now-btn text-center px-6 py-2 mt-4 sm:mt-0 sm:px-8 sm:py-2 rounded-lg bg-[#3563E9] text-white font-semibold hover:bg-blue-500 transition">
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;
