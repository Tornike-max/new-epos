import { useSearchParams } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import { useToggleDarkMode } from "../../context/useToggleDarkMode";

const CompanyChooseInfo = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const getInfo = searchParams.get("info") || "about";
  const { selected } = useToggleDarkMode();

  function handleChangeContent(params: string) {
    if (!params) return;
    searchParams.set("info", params);
    setSearchParams(searchParams);
  }

  const spanClass = `cursor-pointer ${
    selected === "light" ? "text-slate-900" : "text-slate-100"
  } duration-150 transition-all relative`;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.3,
        delay: 0.2,
      }}
      className="w-full flex flex-col items-start justify-center gap-4 px-2 pt-20 sm:pt-4"
    >
      <div
        className={`w-full flex items-center justify-start gap-4  text-base font-medium ${
          selected === "light" ? "text-slate-700" : "text-slate-200"
        } `}
      >
        <Tooltip title="About" arrow enterDelay={500}>
          <span
            onClick={() => handleChangeContent("about")}
            className={spanClass}
          >
            About
            {getInfo === "about" && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transition-all duration-300"></div>
            )}
          </span>
        </Tooltip>
        <span>|</span>
        <Tooltip title="History" arrow enterDelay={500}>
          <span
            onClick={() => handleChangeContent("history")}
            className={spanClass}
          >
            History
            {getInfo === "history" && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transition-all duration-300"></div>
            )}
          </span>
        </Tooltip>
        <span>|</span>
        <Tooltip title="Access" arrow enterDelay={500}>
          <span
            onClick={() => handleChangeContent("access")}
            className={spanClass}
          >
            Access
            {getInfo === "access" && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transition-all duration-300"></div>
            )}
          </span>
        </Tooltip>
      </div>
    </motion.div>
  );
};

export default CompanyChooseInfo;
