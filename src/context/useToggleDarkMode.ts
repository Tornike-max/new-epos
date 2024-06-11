import { useContext } from "react";
import { DarkModeContextProvider } from "./DarkModeContext";

export const useToggleDarkMode = () => {
  const context = useContext(DarkModeContextProvider);

  if (context === undefined)
    throw new Error("You are using context outside of the context provider");

  return context;
};
