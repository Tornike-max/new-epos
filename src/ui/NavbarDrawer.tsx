import { ListItemText, Divider } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { pageList } from "../constants/constant";
import { useLocation, useNavigate } from "react-router-dom";
import { useToggleDarkMode } from "../context/useToggleDarkMode";
import SmallToggleDark from "./SmallToggleDark";

const NavbarDrawer = () => {
  const { selected } = useToggleDarkMode();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="h-full bg-slate-900 text-white">
      <div className="w-full flex items-center justify-center py-8">
        <img
          onClick={() => navigate("/")}
          src={`${
            selected === "dark" ? "/images/epos.png" : "/images/dark-epos.png"
          }`}
          alt="logo"
          className="w-24 text-slate-500 rounded-md cursor-pointer"
        />{" "}
      </div>
      <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.12)" }} />
      <List>
        <ListItem>
          <SmallToggleDark />
        </ListItem>
        {pageList.slice(1).map((text, index) => (
          <ListItem
            className={`${pathname === text.path ? "text-blue-500" : ""} `}
            key={index}
            disablePadding
            sx={{ my: 2 }}
          >
            <ListItemButton onClick={() => navigate(text.path)}>
              <ListItemText primary={text.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <span
          className={`text-xs ${
            selected === "light" ? "text-gray-600" : "text-slate-100"
          } mt-8 block text-center`}
        >
          © 2024 Epos Software. All rights reserved.
        </span>
      </List>
    </div>
  );
};

export default NavbarDrawer;
