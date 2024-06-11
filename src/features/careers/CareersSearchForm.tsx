import { motion } from "framer-motion";
import { jobLocation, jobTypes } from "../../constants/constant";

import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";
import { useToggleDarkMode } from "../../context/useToggleDarkMode";

const CareersSearchForm = () => {
  const { selected } = useToggleDarkMode();
  const [searchParams, setSearchParams] = useSearchParams();
  const { setValue, value } = useDebounce(750);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`w-full mx-auto ${
        selected === "dark"
          ? "bg-slate-900 border-primary-700 hover:border-primary-800"
          : "bg-slate-100 border-primary-300 hover:border-primary-500"
      } duration-150 transition-all border-2 rounded-lg overflow-hidden shadow-lg p-6`}
    >
      <h2
        className={`text-xl font-semibold mb-4 ${
          selected === "dark" ? "text-gray-100" : "text-gray-900"
        }`}
      >
        Job Search
      </h2>
      <form className="grid grid-cols-3 gap-4">
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <label
            htmlFor="jobTitle"
            className={`block ${
              selected === "dark" ? "text-gray-100" : "text-gray-600"
            } duration-150 transition-all font-medium`}
          >
            Job Title
          </label>
          <input
            type="text"
            value={value}
            placeholder="Search by job title"
            onChange={(e) => setValue(e.target.value)}
            className={`mt-1 p-2 w-full ${
              selected === "dark"
                ? "border-primary-800 focus:ring-primary-700"
                : "border-gray-300 focus:ring-blue-200"
            } rounded-md focus:ring  transition duration-300`}
          />
        </motion.div>
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <label
            htmlFor="location"
            className={`block ${
              selected === "dark" ? "text-gray-100" : "text-gray-600"
            } duration-150 transition-all font-medium`}
          >
            Location
          </label>
          <select
            onChange={(e) => {
              searchParams.set("location", e.target.value);
              setSearchParams(searchParams);
            }}
            className={`mt-1 p-2 w-full ${
              selected === "dark"
                ? "border-primary-800 focus:ring-primary-700"
                : "border-gray-300 focus:ring-blue-200"
            } rounded-md focus:ring  transition duration-300`}
          >
            {jobLocation.map((location) => (
              <option key={location.value} value={location.value}>
                {location.label}
              </option>
            ))}
          </select>
        </motion.div>
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <label
            htmlFor="location"
            className={`block ${
              selected === "dark" ? "text-gray-100" : "text-gray-600"
            } duration-150 transition-all font-medium`}
          >
            Job Type
          </label>
          <select
            onChange={(e) => {
              searchParams.set("job-type", e.target.value);
              setSearchParams(searchParams);
            }}
            className={`mt-1 p-2 w-full ${
              selected === "dark"
                ? "border-primary-800 focus:ring-primary-700"
                : "border-gray-300 focus:ring-blue-200"
            } rounded-md focus:ring  transition duration-300`}
          >
            {jobTypes.map((type, i) => (
              <option key={i} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default CareersSearchForm;
