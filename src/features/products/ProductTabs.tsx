import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { tabs } from "../../constants/constant";
import Chip from "../../ui/Chip";

const ProductTabs = () => {
  const [searchParams] = useSearchParams();
  const selectedTab = searchParams.get("tab") || "All";

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
      className="w-full flex flex-col items-start justify-center gap-4 px-2 sm:py-4"
    >
      <div className="w-full flex items-center justify-center">
        <div className="max-w-[500px] w-full px-2 py-2 sm:px-4 sm:py-4 bg-stone-900 rounded-xl flex items-center justify-between flex-wrap gap-2">
          {tabs.map((tab) => (
            <Chip text={tab} selected={selectedTab === tab} key={tab} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductTabs;
