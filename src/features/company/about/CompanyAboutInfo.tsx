import { Divider } from "@nextui-org/react";

import { motion } from "framer-motion";
import ShuffleGrid from "../../../ui/ShuffleGrid";
import Prototypes from "../../../ui/Prototypes";
import { cards } from "../../../constants/constant";
import { useGetAbout } from "../../../hooks/useGetAbout";
import Loading from "../../../ui/Loading";
import { formatDate } from "../../../ui/formatDate";

const CompanyAboutInfo = ({ selected }: { selected: string }) => {
  const { aboutData, isAboutPending } = useGetAbout();
  const companyStyle1 = `font-semibold text-xs sm:text-sm md:text-base duration-150 transition-all ${
    selected === "light" ? "text-slate-500" : "text-slate-300"
  } `;
  const companyStyle2 = `font-semibold text-xs sm:text-sm md:text-base duration-150 transition-all ${
    selected === "light" ? "text-slate-800" : "text-slate-100"
  } `;

  if (isAboutPending) return <Loading />;

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
      className="w-full flex items-start justify-center flex-col"
    >
      <h1
        className={`w-full text-start text-lg sm:text-2xl font-semibold pb-4 ${
          selected === "light" ? "text-slate-900" : "text-slate-100"
        } duration-150 transition-all`}
      >
        About Company
      </h1>
      <Divider className={`${selected === "dark" && "bg-slate-600"}`} />

      <section className="w-full flex flex-col items-start justify-center gap-4 py-4">
        <div className="max-w-[550px] w-full grid grid-cols-2 gap-10">
          <p className={companyStyle1}>Company Name:</p>
          <p className={companyStyle2}>{aboutData?.companyName}</p>
        </div>
        <div className=" max-w-[550px] w-full grid grid-cols-2 gap-10">
          <p className={companyStyle1}>Date of Foundation:</p>
          <p className={companyStyle2}>{formatDate(aboutData?.founded_at)}</p>
        </div>
        <div className=" max-w-[550px] w-full grid grid-cols-2 gap-10">
          <p className={companyStyle1}>Address:</p>
          <p className={companyStyle2}>
            {aboutData?.Address.includes("Hong Kong") ? "Hong Kong" : ""}
          </p>
        </div>
        <div className="max-w-[550px] w-full grid grid-cols-2 gap-10">
          <p className={companyStyle1}>DUNS Number:</p>
          <p className={companyStyle2}>{aboutData?.DUNS}</p>
        </div>
        <div className=" max-w-[550px] w-full grid grid-cols-2 gap-10">
          <p className={companyStyle1}>Description of Business:</p>
          <p className={companyStyle2}>{aboutData?.Address}</p>
        </div>
      </section>
      <Divider />
      <section
        className={`w-full flex items-center justify-center flex-col pt-4 ${
          selected === "light" ? "text-slate-900" : "text-slate-100"
        } duration-150 transition-all`}
      >
        <h1 className="w-full text-center text-lg sm:text-2xl font-semibold pb-4">
          What we do
        </h1>
        <p className="text-base sm:text-lg text-center py-2 font-semibold">
          CONCEPT ART
        </p>
        <div className="max-w-[600px] w-full bg-cover">
          <ShuffleGrid />
        </div>
      </section>
      <section
        className={`w-full flex items-center justify-center flex-col pt-4 ${
          selected === "light" ? "text-slate-900" : "text-slate-100"
        }`}
      >
        <p className="text-base sm:text-lg text-center py-2 font-semibold">
          PROTOTYPES
        </p>
        <div className="max-w-[600px] w-full bg-cover">
          <Prototypes cards={cards} />
        </div>
      </section>
    </motion.div>
  );
};

export default CompanyAboutInfo;
