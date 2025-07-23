import { useState, useMemo } from "react";
import { CartContext } from "./index";
import { getProducts } from "../data/product";

export const CartProvider = ({ children }) => {
  const initialProducts = getProducts();
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('')

  // Check if product is already in cart
  const isInCart = (itemId) => cartItems.some((item) => item.id === itemId);


  // Add item to cart
  const addToCart = (product) => {
    if (product.stock === 0 || isInCart(product.id)) return;

    setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);

    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === product.id ? { ...p, stock: p.stock - 1 } : p
      )
    );
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    const itemToRemove = cartItems.find((item) => item.id === productId);
    if (!itemToRemove) return;

    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );

    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === productId
          ? { ...p, stock: p.stock + itemToRemove.quantity }
          : p
      )
    );
  };

  // Increase item quantity in cart
  const increaseItem = (itemId) => {
    const product = products.find((p) => p.id === itemId);
    if (!product || product.stock === 0) return;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );

    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === itemId ? { ...p, stock: p.stock - 1 } : p
      )
    );
  };

  // Decrease item quantity in cart
  const decreaseItem = (itemId) => {
    const item = cartItems.find((i) => i.id === itemId);
    if (!item || item.quantity === 0) return;

    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === itemId ? { ...p, stock: p.stock + 1 } : p
      )
    );
  };

  // subtotal in cart items 

   const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // search Bar implement 
   
  // searchTerm হ্যান্ডলার: শুধু searchTerm আপডেট করবে
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // products ফিল্টারেড ভার্সন useMemo দিয়ে মেমোরাইজ করবো
  const filteredProducts = useMemo(() => {
    if (!searchTerm) return products;
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, products]);

  return (
    <CartContext.Provider
      value={{
        products: filteredProducts,
        cartItems,
        subtotal,
        searchTerm, 
        handleChange,
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
