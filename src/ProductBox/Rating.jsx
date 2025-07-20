import React from "react";
import { FaStar } from "react-icons/fa";    
import { FaRegStar } from "react-icons/fa"; 

const Rating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="flex items-center">
      {Array.from({ length: totalStars }).map((_, index) =>
        index < rating ? (
          <FaStar key={index} className="text-yellow-400" />
        ) : (
          <FaRegStar key={index} className="text-gray-300" />
        )
      )}
      <span className="text-xs text-gray-500 ml-1">{rating}/5</span>
    </div>
  );
};

export default Rating;