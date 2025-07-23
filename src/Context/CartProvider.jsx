import { useState } from "react";
import { CartContext } from "./index";
import { getProducts } from "../data/product";

export const CartProvider = ({ children }) => {
  const initialProducts = getProducts()
  const [cartItems, setCartItems] = useState([]);
  const [ products, setProducts] = useState(initialProducts)
 
//  Add item to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product])

    setProducts((prevProducts) => prevProducts.map((product) => product))
  }

// remove item to cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId))

    setProducts((prevProducts) => prevProducts.map((product) => product))
  }

// Check if product is already in cart
  const isInCart = (itemId) => cartItems.some(item => item.id === itemId);


  return (
  <CartContext.Provider value={{products, cartItems, isInCart, addToCart, removeFromCart}} >
    {children}
  </CartContext.Provider>
);
};
