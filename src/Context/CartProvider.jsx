import { useState } from "react";
import { CartContext } from "./index";
import { getProducts } from "../data/product";

export const CartProvider = ({ children }) => {
  const initialProducts = getProducts()
  const [cartItem, setCartItem] = useState([]);
  const [ products, setProducst] = useState(initialProducts)
   
  const addToCart = () => {

  }

  const removeFromCart = () => {

  }

  // check item is in cart 
  const isInCart = () => {
  
  }
  return (
  <CartContext.Provider value={{products, isInCart, addToCart, removeFromCart}} >
    {children}
  </CartContext.Provider>
);
};
