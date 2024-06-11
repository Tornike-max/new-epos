import { Button, ButtonGroup } from "@nextui-org/button";
import { useSearchParams } from "react-router-dom";

const PressReleaseTabs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const getFilteredYear = searchParams.get("filterByYear") || "all";

  const handleSetYear = (e: React.MouseEvent, year: string) => {
    e.preventDefault();
    searchParams.set("filterByYear", year);
    setSearchParams(searchParams);
  };

  return (
    <div className="p-4 w-full">
      <div className="w-full flex items-center justify-center">
        <ButtonGroup size="lg" variant="shadow" color="primary">
          <Button
            color={getFilteredYear === "all" ? "primary" : "default"}
            onClick={(e) => handleSetYear(e, "all")}
          >
            All
          </Button>
          <Button
            color={getFilteredYear === "2024" ? "primary" : "default"}
            onClick={(e) => handleSetYear(e, "2024")}
          >
            2024
          </Button>
          <Button
            color={getFilteredYear === "2023" ? "primary" : "default"}
            onClick={(e) => handleSetYear(e, "2023")}
          >
            2023
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default PressReleaseTabs;
