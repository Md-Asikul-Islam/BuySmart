import React, { useContext } from "react";
import { getImageUrl } from "../Utils/utility";
import { CartContext } from "../Context";

 const CartItem = ({item}) => {
  const {removeFromCart} = useContext(CartContext)
  return (
    <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
      <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
        <img
          src={getImageUrl(item.cover)}
          alt={`cover of ${item.title}`}
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between">
          <h3 className="font-medium">{item.title} </h3>
          <button
           onClick={() => removeFromCart(item.id)}
           className="text-red-500 text-xl">×</button>
        </div>
        <p className="text-sm text-gray-500">Size: Large</p>
        <p className="text-sm text-gray-500">Color: White</p>
        <div className="flex justify-between items-center mt-2">
          <p className="font-bold">$145</p>
          <div className="flex items-center space-x-2">
            <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
              −
            </button>
            <span className="text-sm">1</span>
            <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
