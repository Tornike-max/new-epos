import { useSearchParams } from "react-router-dom";
import CompanyAboutInfo from "./about/CompanyAboutInfo";
import CompanyHistoryInfo from "./history/CompanyHistoryInfo";
import CompanyAccessInfo from "./access/CompanyAccessInfo";
import { useToggleDarkMode } from "../../context/useToggleDarkMode";

const CompanyMain = () => {
  const [searchParams] = useSearchParams();
  const getInfo = searchParams.get("info") || "about";
  const { selected } = useToggleDarkMode();
  return (
    <div className="w-full flex items-start justify-center gap-2 py-8 px-2">
      {getInfo === "about" && <CompanyAboutInfo selected={selected} />}
      {getInfo === "history" && <CompanyHistoryInfo selected={selected} />}
      {getInfo === "access" && <CompanyAccessInfo selected={selected} />}
    </div>
  );
};

export default CompanyMain;
