import { motion } from "framer-motion";
import { useToggleDarkMode } from "../../context/useToggleDarkMode";
import { Models } from "appwrite";
import { formatDate } from "../../ui/formatDate";
import { Button } from "@nextui-org/react"; // Import the Button component from your UI library or use a simple HTML button
import { useNavigate } from "react-router-dom";

const PressReleaseDetailsMain = ({ data }: { data: Models.Document }) => {
  const { selected } = useToggleDarkMode();
  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    console.log(id);
    if (!id) return;
    navigate(`/products/description/${id}`);
  };
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
          {formatDate(data.date)}
        </p>

        <Button
          className={`mt-4 duration-150 transition-all`}
          onClick={() => handleNavigate(data?.products?.$id)}
          color="primary"
        >
          See Game
        </Button>
      </div>
    </motion.div>
  );
};

export default PressReleaseDetailsMain;
