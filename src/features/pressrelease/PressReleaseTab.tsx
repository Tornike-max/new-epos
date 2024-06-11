import { useSearchParams } from "react-router-dom";

const PressReleaseTab = ({ year }: { year: string }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const getFilteredYear = searchParams.get("filterByYear") || "all";
  console.log(getFilteredYear === year);

  const handleSetYear = (e: React.MouseEvent, year: string) => {
    e.preventDefault();
    searchParams.set("filterByYear", year);
    setSearchParams(searchParams);
  };

  return (
    <button
      onClick={(e) => handleSetYear(e, year)}
      className="w-full rounded-xl flex items-center justify-center p-8  border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div
        className={`absolute inset-0 ${
          getFilteredYear === year &&
          "bg-gradient-to-r from-violet-600 to-indigo-600"
        } bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300`}
      />

      <div className="absolute z-10 -top-2 text-7xl text-slate-200 group-hover:text-violet-400  transition-transform duration-300">
        {year}
      </div>
      <div className="w-full flex items-start justify-center flex-col gap-1">
        {/* <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
          {title}
        </h3>
        <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
          {subtitle}
        </p> */}
      </div>
    </button>
  );
};

export default PressReleaseTab;
