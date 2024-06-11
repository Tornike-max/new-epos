import { Divider } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CompanyAccessInfo = ({ selected }: { selected: string }) => {
  const [loadingIframe, setLoadingIframe] = useState(true);

  useEffect(() => {
    setLoadingIframe(false);
  }, []);

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
        Access
      </h1>

      <Divider className={`${selected === "dark" ? "bg-slate-600" : ""}`} />

      <div className="max-w-[1300px] w-full flex justify-center items-center flex-col py-8 gap-8">
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          <p
            className={`max-w-[200px] w-full font-semibold ${
              selected === "dark" ? "text-slate-100" : "text-slate-700"
            }  text-sm sm:text-base md:text-lg`}
          >
            Map
          </p>
          {loadingIframe && (
            <div className="max-w-[1000px] w-full min-h-96 rounded-xl animate-pulse bg-slate-700"></div>
          )}
          <iframe
            className={`border-0 max-w-[1000px] w-full min-h-96 rounded-xl ${
              !loadingIframe ? "visible" : "hidden"
            }`}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.019036614436!2d114.20480327529513!3d22.39063977962175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340406471228bbc7%3A0x2611f10f25c8eb38!2sI.T.%20OUTSOURCING!5e0!3m2!1ska!2sge!4v1718089570127!5m2!1ska!2sge"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setLoadingIframe(false)}
          ></iframe>
        </div>
        <Divider className={`${selected === "dark" ? "bg-slate-600" : ""}`} />

        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          <p
            className={`w-full font-semibold ${
              selected === "dark" ? "text-slate-100" : "text-slate-700"
            }  text-sm sm:text-base md:text-lg`}
          >
            Address
          </p>
          <p
            className={`w-full font-semibold ${
              selected === "dark" ? "text-slate-100" : "text-slate-700"
            }  text-base`}
          >
            604, Tower A, New Trade Plaza, 6 On Ping Street, Shatin, N.T., Hong
            Kong
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyAccessInfo;
