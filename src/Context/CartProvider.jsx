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
    setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);

    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === product.id ? { ...p, stock: p.stock - 1 } : p
      )
    );
  };

  // remove item to cart
  const removeFromCart = (productId) => {
     const itemToRemove = cartItems.find((item) => item.id === productId);
     if (!itemToRemove) return;

    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, stock: product.stock + itemToRemove.quantity }
          : product
      )
    );
  };
  // increate the cart item 
  const increaseItem = (itemId) => {
     const itemInCart = cartItems.find((item) => item.id === itemId);
    const product = products.find((p) => p.id === itemId);

    if (!itemInCart || !product || itemInCart.quantity >= product.stock) return;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === itemId 
          ? { ...product, stock: product.stock - 1 }
          : product
      )
    );
  };
  // decrease the cart item 
  const decreaseItem = (itemId) => {
    const itemInCart = cartItems.find((item) => item.id === itemId);

     if (!itemInCart) return;

     if (itemInCart.quantity === 1) {
      // remove item if quantity goes below 1
      removeFromCart(itemId);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === itemId 
          ? { ...product, stock: product.stock + 1 }
          : product
      )
    );
  };

  // Check if product is already in cart
  const isInCart = (itemId) => cartItems.some((item) => item.id === itemId);

  return (
    <CartContext.Provider
      value={{
        products,
        cartItems,
        isInCart,
        addToCart,
        removeFromCart,
        increaseItem,
        decreaseItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
