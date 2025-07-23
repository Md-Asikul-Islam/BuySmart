import React, { useContext } from "react";
import { CartContext } from "../Context";

function OrderSummary() {
  const { subtotal } = useContext(CartContext);

  const deliveryFee = 50;
  const discountRate = 0.2;


  const discount = subtotal * discountRate;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="border-t pt-4 mt-4">
      <h2 className="text-lg font-bold mb-2">Order Summary</h2>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$ {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount (20%)</span>
          <span>-$ {discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>$ {deliveryFee.toFixed(2)}</span>
        </div>
        <div className="border-t pt-2 flex justify-between font-bold text-base">
          <span>Total</span>
          <span>$ {total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;

