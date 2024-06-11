import { useEffect, useState } from "react";
import {
  useMotionValue,
  motion,
  animate,
  useMotionTemplate,
} from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Spinner } from "@nextui-org/react";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Header from "../ui/Header";
import NavbarMenuMobile from "../ui/NavbarMenuMobile";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const HomePage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = "yggdrasil.png";
  }, []);

  const backgroundImage = useMotionTemplate`
  url('/yggdrasil.png'),
  radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})
`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  const border = useMotionTemplate`1px solid ${color}`;

  const handleNavigate = () => {
    navigate("/products");
  };

  return (
    <motion.section
      style={{
        backgroundImage: imageLoaded ? backgroundImage : "none",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
      }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.3,
        delay: 0.2,
      }}
      className="relative w-full bg-gray-950 flex justify-start items-center flex-col place-content-center py-4 px-10 overflow-hidden text-gray-200"
    >
      {!imageLoaded && (
        <div className="absolute inset-0 flex justify-center items-center bg-gray-950 text-gray-200">
          <Spinner size="lg" color="primary" />
        </div>
      )}

      {imageLoaded && (
        <>
          <motion.div
            style={{
              border,
              boxShadow,
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
            className="w-full hidden sm:block z-50 px-4 lg:px-8 py-2 mb-20 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20 rounded-lg opacity-90 bg-red-100/30"
          >
            <Header />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.3,
              delay: 0.2,
            }}
            className="sm:hidden"
          >
            <NavbarMenuMobile />
          </motion.div>
          <motion.div
            style={{
              border,
              boxShadow,
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
            className="relative max-w-3xl w-full z-10 flex flex-col items-center bg-red-100/30 rounded-lg mt-36 sm:mt-0 py-8 px-8"
          >
            <h1 className="w-full bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-center text-2xl md:text-5xl lg:text-7xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:leading-tight">
              Experience Gaming Like Never Before, Dive into Our World.
            </h1>
            <p className="my-7 max-w-xl text-center text-base bg-gradient-to-br from-slate-900 to-slate-600  bg-clip-text leading-relaxed md:text-lg md:leading-relaxed font-semibold text-transparent">
              Your epic journey starts now
            </p>
            <motion.button
              style={{
                border,
                boxShadow,
              }}
              onClick={() => handleNavigate()}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/30 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
            >
              Start Your Journey
              <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </motion.button>
          </motion.div>
          <div className="absolute inset-0 z-0 bg-red-50/10">
            <Canvas>
              <Stars radius={50} count={2500} factor={4} fade speed={2} />
            </Canvas>
          </div>
        </>
      )}
    </motion.section>
  );
};
