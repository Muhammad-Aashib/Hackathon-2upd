"use client";
import React, { useState } from "react";

interface Review {
    id: number;
    name: string;
    avatar: string;
    designation: string;
    date: string;
    rating: number; // Out of 5
    reviewText: string;
}

const reviewsData: Review[] = [
    {
        id: 1,
        name: "Alex Stanton",
        avatar:  "/pic_1.jpeg",
        designation: "CEO at Bukalapak",
        date: "21 July 2022",
        rating: 4,
        reviewText:
            "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    },
    {
        id: 2,
        name: "Skylar Dias",
        avatar: "/pic_2.jpeg",
        designation: "CEO at Amazon",
        date: "20 July 2022",
        rating: 5,
        reviewText:
            "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    },
];

const ReviewSection: React.FC = () => {
    const [visibleReviews, setVisibleReviews] = useState(2); // Default visible reviews

    const showAllReviews = () => {
        setVisibleReviews(reviewsData.length);
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={index < rating ? "text-yellow-400" : "text-gray-300"}>
                ★
            </span>
        ));
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mt-10">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Reviews</h3>
                <span className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                    {reviewsData.length}
                </span>
            </div>

            {/* Review List */}
            <div className="space-y-6">
                {reviewsData.slice(0, visibleReviews).map((review) => (
                    <div key={review.id} className="flex gap-4">
                        <img
                            src={review.avatar}
                            alt={`${review.name}'s avatar`}
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <h4 className="font-semibold text-lg">{review.name}</h4>
                                    <p className="text-sm text-gray-500">{review.designation}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-400">{review.date}</p>
                                    <div className="flex text-sm">{renderStars(review.rating)}</div>
                                </div>
                            </div>
                            <p className="text-gray-700 mt-2">{review.reviewText}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Show All Button */}
            {visibleReviews < reviewsData.length && (
                <div className="mt-6 text-center">
                    <button
                        onClick={showAllReviews}
                        className="text-blue-600 font-medium hover:underline"
                    >
                        Show All
                    </button>
                </div>
            )}
        </div>
    );
};

export default ReviewSection;
