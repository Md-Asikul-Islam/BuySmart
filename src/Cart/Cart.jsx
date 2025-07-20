import React from "react";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import SearchAndSort from "./SearchAndSort";


const Cart = () => {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>
        <CartItem />
        <OrderSummary />
        <SearchAndSort />
      </div>
    </div>
  );
};

export default Cart;
