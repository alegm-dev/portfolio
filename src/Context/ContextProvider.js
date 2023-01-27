import React, { createContext } from "react";

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  return <MyContext.Provider>{children}</MyContext.Provider>;
};

export default ContextProvider;
