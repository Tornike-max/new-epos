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
      className="w-full flex flex-col justify-center items-center"
    >
      <SupportForm />
    </motion.div>
  );
};

export default SupportsMain;
