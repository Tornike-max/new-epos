import { motion, useScroll, useTransform } from "framer-motion";
import { Button, Divider } from "@nextui-org/react";
import { useRef } from "react";
import { useToggleDarkMode } from "../../context/useToggleDarkMode";
import { useNavigate } from "react-router-dom";
import { Models } from "appwrite";
import { formatDate } from "../../ui/formatDate";

const PressReleaseMain = ({ release }: { release: Models.Document }) => {
  const { selected } = useToggleDarkMode();
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const divClass = `max-w-[700px] w-full flex justify-center items-start flex-col gap-4`;

  const h4Class = `text-base md:text-lg font-semibold ${
    selected === "dark" ? "text-slate-100" : "text-slate-700"
  } duration-150 transition-all text-start w-full`;

  const pClass = `w-full flex flex-col justify-center items-start sm:flex-row sm:items-center sm:justify-start ${
    selected === "dark" && "text-slate-100"
  } duration-150 transition-all`;

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
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
      className="w-full flex justify-center items-start flex-col gap-6"
    >
      <Divider className={`${selected === "dark" && "bg-slate-800"}`} />

      <div className={divClass}>
        <h4 className={h4Class}>{formatDate(release.date)}</h4>
        <p className={pClass}>{release.info}</p>
      </div>

      <div className={divClass}>
        <h4 className={h4Class}>
          New adventures begin in {release.products.title}...
        </h4>
        <p className={pClass}>
          <span
            className={`${
              selected === "dark" ? "text-slate-100" : "text-slate-900"
            } duration-150 transition-all font-semibold`}
          >
            "{release.products.title}"
          </span>
          <span>Product Information will be coming soon...</span>
        </p>
      </div>
      <div className="w-full flex justify-start items-center">
        <Button
          onClick={() => navigate(`/press-release/${release.$id}`)}
          className={`bg-blue-500 text-slate-100 hover:text-white`}
        >
          See Full
        </Button>
      </div>
      <Divider className={`${selected === "dark" && "bg-slate-800"}`} />
    </motion.div>
  );
};

export default PressReleaseMain;
