import { useState } from "react";
import { CartContext } from "./index";

export const CartProvider = ({ children }) => {

  const [cartItem, setCartItem] = useState([]);


  // check item is in cart 
  const isInCart() => {

  }

  return (
  <CartContext.Provider value={{isInCart, cartItem}} >
    {children}
  </CartContext.Provider>
);
};
