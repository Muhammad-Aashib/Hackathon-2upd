import React from "react";

const Info: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={index < rating ? "text-yellow-400" : "text-gray-300"}
        style={{ fontSize: "20px" }}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="w-full h-[500px] max-w-[492px] lg:w-[492px] bg-white shadow-md rounded-lg p-6 flex flex-col gap-4">
      {/* Title Section */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-black">Nissan GT - R</h2>
        <div className="flex items-center gap-2">
          {renderStars(5)}
          <span className="text-sm text-gray-500">440+ Reviewer</span>
        </div>
      </div>

      {/* Description Section */}
      <p className="text-base text-gray-600">
        NISMO has become the embodiment of Nissan's outstanding performance,
        inspired by the most unforgiving proving ground, the "race track".
      </p>

      {/* Car Details */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: "Type Car", value: "Sport" },
          { label: "Steering", value: "Manual" },
          { label: "Capacity", value: "2 Person" },
          { label: "Gasoline", value: "70L" },
        ].map((item, idx) => (
          <div key={idx}>
            <div className="text-sm text-gray-400">{item.label}</div>
            <div className="text-lg font-semibold text-gray-600">{item.value}</div>
          </div>
        ))}
      </div>

      {/* Pricing and Action */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-6">
        <div>
          <div className="text-2xl font-bold text-black">$80.00/ day</div>
          <div className="text-base text-gray-400 line-through">$100.00</div>
        </div>
        <button
          className="mt-4 sm:mt-0 w-full sm:w-auto h-12 bg-blue-600 text-white font-semibold rounded-md cursor-pointer text-center"
        >
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default Info;
