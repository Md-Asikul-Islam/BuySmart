import React from "react";
import { getImageUrl } from "./../Utils/utility";
import Rating from "./Rating";
const ProductCard = ({ product, isInCart, addToCart, removeFromCart }) => {
  return (
    <>
      <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          <img
            src={getImageUrl(product.cover)}
            alt={product.title}
            className="h-full w-auto object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium">{product.title} </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center my-1">
              <Rating rating={product.rating} />
            </div>
            <span className="text-xs text-gray-700">
              {` (${product.stock} pcs left)`}
            </span>
          </div>
          <p className="font-bold">${product.price} </p>

          <button className="w-full mt-2 bg-primary py-1 text-gray-100 rounded flex items-center justify-center">
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
