import { createContext, useState } from "react";

const initialValues = {
  expanded: true,
  handleToggleSidebar: () => {},
  setExpanded: () => {},
};

type SidebarTypes = {
  expanded: boolean;
  handleToggleSidebar: () => void;
  setExpanded: (expended: boolean) => void;
};

export const SidebarProvider = createContext<SidebarTypes>(initialValues);

const SidebarContext = ({ children }: { children: React.ReactNode }) => {
  const [expanded, setExpanded] = useState(true);

  const handleToggleSidebar = () => {
    setExpanded((expended) => !expended);
  };

  const values = {
    expanded: expanded,
    handleToggleSidebar: handleToggleSidebar,
    setExpanded: setExpanded,
  };
  return (
    <SidebarProvider.Provider value={values}>
      {children}
    </SidebarProvider.Provider>
  );
};

export default SidebarContext;
