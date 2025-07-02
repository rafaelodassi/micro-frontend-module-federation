import { createContext, useState, useContext, type ReactNode } from "react";

interface StoreContext {
  selectedCategory: string;
  setSelectedCategory: (categoryName: string) => void;
}

interface StoreProvider {
  children: ReactNode;
}

export const StoreContext = createContext<StoreContext | undefined>(undefined);

export const StoreProvider = ({ children }: StoreProvider) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <StoreContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }

  return context;
};
