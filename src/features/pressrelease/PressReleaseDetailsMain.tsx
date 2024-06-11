import { motion } from "framer-motion";
import { useToggleDarkMode } from "../../context/useToggleDarkMode";

type ReleaseType = {
  id: number;
  date: string;
  info: string;
};

const PressReleaseDetailsMain = ({ data }: { data: ReleaseType }) => {
  const { selected } = useToggleDarkMode();
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
      className="w-full h-full flex items-start justify-center flex-col py-4"
    >
      <div className="max-w-[900px] m-auto w-full flex justify-center items-center flex-col gap-2 px-2 sm:px-6 md:px-10 py-4">
        <h1
          className={`w-full text-center text-xl sm:text-2xl font-semibold mb-4 ${
            selected === "dark" ? "text-slate-200" : "text-slate-900"
          } duration-150 transition-all`}
        >
          Press Release
        </h1>
        <p
          className={`w-full ${
            selected === "dark" ? "text-slate-200" : "text-slate-900"
          } duration-150 transition-all`}
        >
          {data.info}
        </p>

        <p
          className={`w-full text-end ${
            selected === "dark" ? "text-slate-200" : "text-slate-900"
          } duration-150 transition-all`}
        >
          {data.date}
        </p>
      </div>
    </motion.div>
  );
};

export default PressReleaseDetailsMain;
