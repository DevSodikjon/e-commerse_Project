import { useContext, createContext, useState } from "react";
import { UseLocalStorage } from "../hooks/UseLocalStorage";

export const ShoppingCardContext = createContext();

export const ShoppingCardProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [cardItems, setCardItems] = UseLocalStorage();

  const openCard = () => setIsOpen(true);

  const closeCard = () => setIsOpen(false);

  return (
    <ShoppingCardContext.Provider value={{}}>
      {children}
    </ShoppingCardContext.Provider>
  );
};
