"use client";
import Image from "next/image";
import Header from "../header";
import Footer from "../footer";
import CarCard from "../card";
import Info from "../info";
import Review from "../reviews";
import Sidebar from "../sidebar";

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
];

export default function MoreCars() {
    return (
        <main className="max-w-full mx-auto w-full">
            <div className="bg-[#F6F7F9] min-h-screen">
                {/* Header */}
                <Header />

                {/* Main Container */}
                <div className="relative w-full px-4 mt-10 flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="flex lg:min-h-screen lg:w-[250px]">
                        <Sidebar />
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Highlighted Section */}
                        <div className="flex flex-col lg:flex-row items-start gap-8 mt-8">
                            {/* Car Image Section */}
                            <div className="relative w-full lg:w-[492px]">
                                {/* Main Image */}
                                <div className="h-[360px] rounded-lg bg-cover bg-center flex flex-col justify-start" style={{ backgroundImage: "url('/car2a.jpeg')", borderRadius: "10px 0px 0px 0px", padding: "24px", position: "relative" }}>
                                    <img
                                        src="/car2.png"
                                        alt="Car Image"
                                        className="absolute"
                                        style={{
                                            width: "380px",
                                            height: "250px",
                                            bottom: "0",
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                        }}
                                    />
                                    <div className="text-left mt-4"> {/* Adjust margin-top value to move the text upwards */}
                                        <p className="text-[24px] font-semibold text-white">Sports car with the best design and acceleration</p>
                                        <p className="text-[14px] mt-2 text-white">Safety and comfort while driving a futuristic and elegant sports car</p>
                                    </div>
                                </div>






                                {/* Thumbnails Section */}
                                <div className="flex justify-between mt-4">
                                    {/* Thumbnail Images */}
                                    {["/thumb3.png", "/thumb2.png", "/thumb2.png"].map((src, index) => (
                                        <div
                                            key={index}
                                            className="w-[148px] h-[124px] bg-cover bg-center rounded-lg"
                                            style={{
                                                backgroundImage: `url('${src}')`,
                                                borderRadius: "10px 0px 0px 0px",
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                            {/* Info Section */}
                            <div className="w-full lg:w-[492px]">
                                <Info />
                            </div>
                        </div>

                        {/* Reviews Section */}
                        <div className="mt-16">
                            <Review />
                        </div>

                        {/* Recommended Cars */}
                        <div className="mt-16">
                            <h2 className="text-2xl font-semibold mb-6">Recommendations</h2>
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
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </main>
    );
}
