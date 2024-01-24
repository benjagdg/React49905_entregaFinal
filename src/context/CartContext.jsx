import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [itemsCart, setItemsCart] = useState([]);

  return (
    <CartContext.Provider value={{ itemsCart, setItemsCart }}>
      { children }
    </CartContext.Provider>
  );
};
