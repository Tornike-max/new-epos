import { Divider } from "@nextui-org/react";
import { motion } from "framer-motion";
import { companyHistoryData } from "../../../constants/constant";
import { useGetHistory } from "../../../hooks/useGetHistory";
import Loading from "../../../ui/Loading";
import { formatDate } from "../../../ui/formatDate";

const CompanyHistoryInfo = ({ selected }: { selected: string }) => {
  const { historyData, isHistoryPending } = useGetHistory();
  if (isHistoryPending) return <Loading />;

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
          selected === "dark" && "text-slate-100"
        } duration-150 transition-all`}
      >
        Our History
      </h1>
      <Divider />
      <section className="w-full flex justify-center items-center gap-4 py-4">
        <div
          className={`w-full grid ${
            companyHistoryData.length > 2
              ? "grid-cols-1 lg:grid-cols-2 gap-8"
              : "grid-cols-1"
          }`}
        >
          {companyHistoryData.map((item, i) => (
            <motion.div
              initial={{
                opacity: 0,
                translateX: i % 2 === 0 ? -50 : 50,
                translateY: 50,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
                translateY: 0,
              }}
              transition={{
                duration: 0.3,
                delay: i * 0.2,
              }}
              key={item.date}
              className="p-4 border rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-150 "
            >
              <p
                className={`text-lg sm:text-xl font-semibold mb-2 ${
                  selected === "dark" && "text-slate-100"
                }`}
              >
                {formatDate(historyData?.date)}
              </p>
              <p
                className={`text-sm sm:text-base ${
                  selected === "dark" ? "text-slate-100" : "text-gray-600"
                }`}
              >
                {historyData?.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default CompanyHistoryInfo;
