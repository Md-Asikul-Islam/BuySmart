import { useState } from "react";
import { CartContext } from "./index";
import { getProducts } from "../data/product";

export const CartProvider = ({ children }) => {
  const initialProducts = getProducts();
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState(initialProducts);

  //  Add item to cart
  const addToCart = (product) => {
    if (product.stock === 0 || isInCart(product.id)) {
      return;
    }
    setCartItems((prevItems) => [...prevItems, product]);

    setProducts(());
  };

  // remove item to cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, stock: product.stock + 1 }
          : product
      )
    );
  };

  // Check if product is already in cart
  const isInCart = (itemId) => cartItems.some((item) => item.id === itemId);

  return (
    <CartContext.Provider
      value={{ products, cartItems, isInCart, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
