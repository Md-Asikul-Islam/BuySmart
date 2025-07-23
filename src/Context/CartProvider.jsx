import { useState } from "react";
import { CartContext } from "./index";
import { getProducts } from "../data/product";

export const CartProvider = ({ children }) => {
  const initialProducts = getProducts()
  const [cartItem, setCartItem] = useState([]);
  const [ products, setProducst] = useState(initialProducts)


  // check item is in cart 
 
  return (
  <CartContext.Provider value={{products}} >
    {children}
  </CartContext.Provider>
);
};
