import { Divider } from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";
import ToggleDarkMode from "./ToggleDarkMode";
import { useToggleDarkMode } from "../context/useToggleDarkMode";

const PageHeader = () => {
  const { pathname } = useLocation();
  const { selected } = useToggleDarkMode();

  const title =
    pathname === "/company"
      ? "Company"
      : pathname === "/products"
      ? "Products"
      : pathname === "/press-release"
      ? "Press Release"
      : pathname === "/careers"
      ? "Careers"
      : pathname === "/support"
      ? "Support"
      : "";
  return (
    <div className="hidden sticky w-full sm:flex flex-col justify-center items-start  gap-2 sm:gap-3">
      <div className="w-full flex justify-between items-center">
        <Link to="/">
          <img
            src={`${
              selected === "dark" ? "/images/epos.png" : "/images/dark-epos.png"
            }`}
            alt="logo"
            className="w-40 text-slate-500 rounded-md"
          />
        </Link>
        <ToggleDarkMode />
      </div>

      <Divider className={`${selected === "dark" ? "bg-slate-600" : ""}`} />
      <h1
        className={`font-bold ${
          selected === "light" ? "text-slate-900" : "text-slate-100"
        } duration-150 transition-all text-lg sm:text-2xl px-2`}
      >
        {title}
      </h1>
    </div>
  );
};

export default PageHeader;
