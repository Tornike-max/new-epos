import { motion } from "framer-motion";
// import PressReleaseTabs from "./PressReleaseTabs";
import { Divider } from "@nextui-org/react";
import PressReleaseMain from "./PressReleaseMain";
import React from "react";
import { useGetPressRelease } from "../../hooks/useGetPressRelease";
import Loading from "../../ui/Loading";
import { Models } from "appwrite";

const PressReleaseInfo = () => {
  const { pressRelease, isPressReleasePending } = useGetPressRelease();

  if (isPressReleasePending) return <Loading />;

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
      className="w-full flex items-center justify-center flex-col gap-4"
    >
      {/* <PressReleaseTabs /> */}
      <Divider />
      {pressRelease && pressRelease.length > 0 ? (
        pressRelease?.map((release: Models.Document) => (
          <React.Fragment key={release.$id}>
            <PressReleaseMain release={release} />
          </React.Fragment>
        ))
      ) : (
        <div className="max-w-[700px] w-full flex justify-end items-center">
          <motion.h1
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
            className="text-red-500 font-semibold text-lg md:text-xl lg:text-2xl w-full text-center"
          >
            Oops! It seems there's no data available at the moment. We're
            constantly updating our records, so please check back later. Thank
            you for your patience and understanding!{" "}
          </motion.h1>
        </div>
      )}
    </motion.div>
  );
};

export default PressReleaseInfo;
