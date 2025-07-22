import { CartContext } from "./index";

export const CartProvider = ({ children }) => {
  return (
  <CartContext.Provider value={{}} >
    {children}
  </CartContext.Provider>
);
};
