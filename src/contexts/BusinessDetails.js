import { createContext, useContext } from "react";

export const BusinessContext = createContext();

export const BusinessContextProvider = BusinessContext.Provider;

export const useBusiness = () => useContext(BusinessContext);
