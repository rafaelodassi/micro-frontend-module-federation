import React from "react";

interface StoreContext {
  viewMode: string;
  setViewMode: (viewMode: string) => void;
}

interface StoreProvider {
  children: React.ReactNode;
}

export const StoreContext = React.createContext<StoreContext | undefined>(
  undefined
);

export const StoreProvider = ({ children }: StoreProvider) => {
  const [viewMode, setViewMode] = React.useState("list");

  return (
    <StoreContext.Provider
      value={{
        viewMode,
        setViewMode,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = React.useContext(StoreContext);

  if (!context) {
    throw new Error("useLayout must be used within a StoreProvider");
  }

  return context;
};
