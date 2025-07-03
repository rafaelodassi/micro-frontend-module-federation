import { createContext, useState, useContext, type ReactNode } from "react";
import { type Product } from "types";

interface StoreContext {
  selectedCategory: string;
  setSelectedCategory: (categoryName: string) => void;
  cart: Product[];
  addProductCart: (product: Product) => void;
  removeProductCart: (productId: number) => void;
  clearCart: (productId: number) => void;
}

interface StoreProvider {
  children: ReactNode;
}

export const StoreContext = createContext<StoreContext | undefined>(undefined);

export const StoreProvider = ({ children }: StoreProvider) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cart, setCart] = useState([] as Product[]);

  const addProductCart = (product: Product) => {
    const productFound = cart.find((p) => p.id === product.id);

    if (productFound) {
      setCart(
        cart.map((p) =>
          p.id === product.id ? { ...p, count: (p.count ?? 0) + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...product, count: 1 }]);
    }
  };

  const removeProductCart = (productId: number) => {
    setCart(
      cart
        .map((p) => {
          if (p.id === productId) {
            const count = (p.count ?? 0) - 1 < 0 ? 0 : (p.count ?? 0) - 1;
            return { ...p, count };
          }

          return p;
        })
        .filter((p) => (p.count ?? 0) > 0)
    );
  };

  const clearCart = () => {};

  return (
    <StoreContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        cart,
        addProductCart,
        removeProductCart,
        clearCart,
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
