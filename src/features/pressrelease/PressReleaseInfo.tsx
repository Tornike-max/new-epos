import { motion } from "framer-motion";
// import PressReleaseTabs from "./PressReleaseTabs";
import { Divider } from "@nextui-org/react";
import PressReleaseMain from "./PressReleaseMain";
import { pressReleaseData } from "../../constants/constant";
import { PressReleaseDataType } from "../../types/types";
import { useSearchParams } from "react-router-dom";
import React from "react";

const PressReleaseInfo = () => {
  const [searchParams] = useSearchParams();
  const data = pressReleaseData;

  const filterByYear = searchParams.get("filterByYear") || "all";

  let filteredData;

  if (filterByYear === "2024")
    filteredData = data.filter((info) => info.date.includes("2024")) ?? null;
  if (filterByYear === "2023")
    filteredData = data.filter((info) => info.date.includes("2023")) ?? null;
  if (filterByYear === "2022")
    filteredData = data.filter((info) => info.date.includes("2022")) ?? null;
  if (filterByYear === "all") filteredData = data ?? null;

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
      className="w-full flex items-center justify-center flex-col gap-4"
    >
      {/* <PressReleaseTabs /> */}
      <Divider />
      {filteredData && filteredData.length > 0 ? (
        filteredData?.map((dat: PressReleaseDataType) => (
          <React.Fragment key={dat.date}>
            <PressReleaseMain data={dat} />
          </React.Fragment>
        ))
      ) : (
        <div className="max-w-[700px] w-full flex justify-end items-center">
          <motion.h1
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
            className="text-red-500 font-semibold text-lg md:text-xl lg:text-2xl w-full text-center"
          >
            Oops! It seems there's no data available at the moment. We're
            constantly updating our records, so please check back later. Thank
            you for your patience and understanding!{" "}
          </motion.h1>
        </div>
      )}
    </motion.div>
  );
};

export default PressReleaseInfo;
