import { useContext } from "react";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import SearchAndSort from "./SearchAndSort";
import { CartContext } from "../Context";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const isEmpty = cartItems.length === 0;

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>

        {isEmpty ? (
          <h3 className="text-center text-gray-500 mb-4">
            Your Cart Is Empty!
          </h3>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}

            <OrderSummary />
            <SearchAndSort />
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

