import { motion } from "framer-motion";
import CareersSearchForm from "./CareersSearchForm";
import CareersJobList from "./CareersJobsList";
import { jobs } from "../../constants/constant";
import { useSearchParams } from "react-router-dom";
import { useToggleDarkMode } from "../../context/useToggleDarkMode";

const CareersMain = () => {
  const { selected } = useToggleDarkMode();

  const [searchParams] = useSearchParams();

  const getVal = searchParams.get("title") || "";
  const getType = searchParams.get("job-type") || "";
  const getLocation = searchParams.get("location") || "";
  const allJobs = jobs;

  const filteredJobs = allJobs.filter((job) => {
    const titleMatch =
      !getVal ||
      job.title.toLowerCase().includes(getVal.toLowerCase()) ||
      job.description.toLowerCase().includes(getVal.toLowerCase());
    const typeMatch = !getType || job.type === getType;
    const locationMatch =
      !getLocation ||
      job.location.toLowerCase() ===
        getLocation.split("-").join(" ").toLowerCase();

    return titleMatch && typeMatch && locationMatch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex justify-center items-center flex-col gap-8 pb-10"
    >
      <div className="max-w-[1000px] mx-auto w-full flex flex-col justify-center items-center">
        <CareersSearchForm />
      </div>
      {filteredJobs && filteredJobs.length > 0 ? (
        filteredJobs?.map((job) => <CareersJobList key={job.id} job={job} />)
      ) : (
        <div className="max-w-[1000px] w-full flex justify-center items-center">
          <p
            className={`${
              selected === "dark" ? "text-gray-200" : "text-gray-700"
            } p-6 text-lg font-medium`}
          >
            No jobs available right now.
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default CareersMain;
