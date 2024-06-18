import { motion } from "framer-motion";
import { useToggleDarkMode } from "../../context/useToggleDarkMode";
import { Button, Divider } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import PressReleaseDetailsMain from "./PressReleaseDetailsMain";
import { useGetSingleRelease } from "../../hooks/useGetSingleRelease";
import Loading from "../../ui/Loading";

const PressReleaseDetails = () => {
  const { release, isReleasePending } = useGetSingleRelease();
  const { selected } = useToggleDarkMode();
  const navigate = useNavigate();

  if (isReleasePending) return <Loading />;

  console.log(release);

  // const releaseData = pressReleaseData.filter(
  //   (item) => item.id === Number(releaseId)
  // )[0];

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
      className="w-full flex items-start justify-center flex-col gap-2 px-4 sm:px-6 md:px-10 py-4"
    >
      <h1
        className={`w-full text-start text-lg sm:text-2xl font-semibold pb-4 ${
          selected === "light" ? "text-slate-900" : "text-slate-100"
        } duration-150 transition-all`}
      >
        Press Release Details
      </h1>
      <Button
        className="mb-4"
        variant="shadow"
        color="primary"
        onClick={() => navigate(-1)}
      >
        Go Back
      </Button>
      <Divider className={`${selected === "dark" && "bg-slate-600"}`} />
      {release && <PressReleaseDetailsMain data={release} />}
    </motion.div>
  );
};

export default PressReleaseDetails;
