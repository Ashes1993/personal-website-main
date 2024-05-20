import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isBurgerMenu,
        setIsBurgerMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
