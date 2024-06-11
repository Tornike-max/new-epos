import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const ProductsMain = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const sliderControlls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      sliderControlls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      className="w-full flex items-center justify-center relative overflow-hidden"
      ref={ref}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 30 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.3,
          delay: 0.3,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ProductsMain;
