import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const CareersApplyPage = () => {
  const { applyId } = useParams();
  console.log(applyId);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-screen"
    >
      hello
    </motion.div>
  );
};

export default CareersApplyPage;
