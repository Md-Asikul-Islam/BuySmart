import { useState } from "react";
import { CartContext } from "./index";
import { getProducts } from "../data/product";

export const CartProvider = ({ children }) => {
const initialProducts = getProducts()
  const [cartItem, setCartItem] = useState([]);
  const [products, setProducts] = useState(initialProducts)
  
  const addToCart = (product) => {

  }

  const removeFromCart = (productId) => {

  }

  // check item is in cart 
  const isInCart = (productId) => {
   products.some((item) => item.id === productId)
  }

  return (
  <CartContext.Provider value={{isInCart, cartItem, products, addToCart, removeFromCart}} >
    {children}
  </CartContext.Provider>
);
};
