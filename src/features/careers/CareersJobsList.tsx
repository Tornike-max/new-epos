import { Button } from "@nextui-org/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { TbBriefcase2 } from "react-icons/tb";
import { formatCurrency } from "../../ui/formatCurrency";
import { useToggleDarkMode } from "../../context/useToggleDarkMode";
import { useDisclosure } from "@nextui-org/react";
import DescModal from "../../ui/DescModal";
import { useNavigate, useSearchParams } from "react-router-dom";

const CareersJobsList = ({
  job,
}: {
  job: {
    id: number;
    title: string;
    company: string;
    description: string;
    salary: number;
    location: string;
  };
}) => {
  const { selected } = useToggleDarkMode();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  const iconClass = `p-1 rounded-full border-1 ${
    selected === "dark"
      ? "bg-slate-950  border-primary-600 text-slate-100"
      : "bg-slate-200 "
  } duration-150 transition-all text-xl sm:text-2xl md:text-4xl`;

  const titleStyle = `${
    selected === "dark" ? "text-slate-100" : "text-gray-700"
  } duration-150 transition-all`;

  const handleOpenModal = (id: number) => {
    searchParams.set("jobId", String(id));
    setSearchParams(searchParams);
    onOpen();
  };

  const handleNavigateToApply = (id: number) => {
    if (!id) throw new Error("No Id Provided");
    navigate(`/careers/apply/${id}`);
  };

  return (
    <>
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
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
        className={`max-w-[1000px] w-full flex flex-col justify-center ${
          selected === "dark"
            ? "bg-slate-900 border-primary-600 hover:border-primary-700"
            : "bg-slate-100 border-slate-300 hover:border-primary-500"
        }  items-center border-2 rounded-xl hover:shadow-2xl cursor-pointer duration:150 transition-all`}
      >
        <motion.div className="w-full  rounded-lg p-6 m-4 ">
          <div className=" font-semibold mb-2 flex items-center justify-between">
            <div className="text-xl md:text-2xl flex items-center gap-2">
              <span className={iconClass}>
                <TbBriefcase2 />
              </span>
              <span
                className={`${
                  selected === "dark" && "text-slate-100"
                } duration-150 transition-all`}
              >
                {job.title}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className={iconClass}>
                <HiOutlineCurrencyDollar />
              </span>
              <span
                className={`text-xl  md:text-2xl ${
                  selected === "dark" && "text-slate-100"
                } duration-150 transition-all`}
              >
                {formatCurrency(job.salary)}
              </span>
            </div>
          </div>
          <p
            className={`${
              selected === "dark" ? "text-slate-100" : "text-gray-600"
            } duration-150 transition-all mb-4`}
          >
            {job.company.toUpperCase()}
          </p>
          <p className={titleStyle}>
            Location:{" "}
            {job.location.slice(0, 1).toUpperCase() + job.location.slice(1)}
          </p>
          <p className={titleStyle}>{job.description}</p>
          <div className="w-full flex items-center justify-end gap-2">
            <Button
              onClick={() => handleOpenModal(job.id)}
              variant="shadow"
              color="primary"
            >
              See Job Description
            </Button>
            <Button
              onClick={() => handleNavigateToApply(job.id)}
              variant="shadow"
              color="primary"
            >
              Apply Now
            </Button>
          </div>
        </motion.div>
      </motion.div>
      {isOpen && (
        <DescModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          onClose={onClose}
        />
      )}
    </>
  );
};

export default CareersJobsList;
