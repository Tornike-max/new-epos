import { motion } from "framer-motion";
import SupportForm from "./SupportForm";

const SupportsMain = () => {
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
      className="w-full h-full flex flex-col justify-center sm:justify-start items-center"
    >
      <div className="max-w-3xl w-full flex justify-center items-center">
        <SupportForm />
      </div>
    </motion.div>
  );
};

export default SupportsMain;
