import React, { createContext, useState, useEffect } from "react";

type DarkModeType = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  handleToggleDarkMode: () => void;
};

const initialValues: DarkModeType = {
  selected: "light",
  setSelected: () => {},
  handleToggleDarkMode: () => {},
};

export const DarkModeContextProvider =
  createContext<DarkModeType>(initialValues);

const DarkModeContext = ({ children }: { children: React.ReactNode }) => {
  const [selected, setSelected] = useState<string>(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", selected);
  }, [selected]);

  const handleToggleDarkMode = () => {
    setSelected((prevSelected) =>
      prevSelected === "light" ? "dark" : "light"
    );
  };

  const value = {
    selected,
    setSelected,
    handleToggleDarkMode,
  };

  return (
    <DarkModeContextProvider.Provider value={value}>
      {children}
    </DarkModeContextProvider.Provider>
  );
};

export default DarkModeContext;
