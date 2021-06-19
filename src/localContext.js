import { createContext, useContext } from "react";

const LocalContext = createContext({});
export const useLocalContext = () => useContext(LocalContext);
export const ContextProvider = LocalContext.Provider;

export default LocalContext;
