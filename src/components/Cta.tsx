// motion
import { motion } from "motion/react";

// image
import Thumbnail from "../assets/cta/cta-thumbnail.jpg";

function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex justify-center items-center xl:h-auto"
    >
      <div className="xl:w-304.75 xl:h-92.5 flex flex-col xl:flex-row justify-between gap-20 xl:gap-auto items-center xl:bg-[#343434] xl:rounded-[33px]">
        <div className="xl:ml-[10%] flex flex-col justify-center items-center xl:items-start gap-10 xl:gap-5">
          <h1 className="text-[52px] text-white font-light text-center xl:text-start leading-16 w-80 xl:w-120">
            OpenType feature and Variable fonts
          </h1>
          <button className="text-white bg-[#4452FE] text-sm px-15 h-11">
            Try For Free
          </button>
        </div>
        <div className="h-full flex items-end">
          <img
            src={Thumbnail}
            alt="thumbnail"
            className="object-cover object-center xl:object-top h-60 w-75 sm:h-90 sm:w-110 xl:h-80 xl:w-140 xl:rounded-br-[33px]"
          />
        </div>
      </div>
    </motion.section>
  );
}

export default CTA;
