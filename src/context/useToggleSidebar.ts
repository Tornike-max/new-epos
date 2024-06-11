import { useContext } from "react";
import { SidebarProvider } from "./SidebarContext";

export const useToggleSidebar = () => {
  const context = useContext(SidebarProvider);

  if (context === undefined)
    throw new Error("You are using context outside of the context provider");

  return context;
};
