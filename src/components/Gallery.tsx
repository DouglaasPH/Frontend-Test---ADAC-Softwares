// motion
import { motion } from "motion/react";

// images
import GalleryImage1 from "../assets/gallery/gallery-image-1.jpg";
import GalleryImage2 from "../assets/gallery/gallery-image-2.jpg";
import GalleryImage3 from "../assets/gallery/gallery-image-3.jpg";
import GalleryImage4 from "../assets/gallery/gallery-image-4.jpg";
import GalleryImage5 from "../assets/gallery/gallery-image-5.jpg";
import GalleryImage6 from "../assets/gallery/gallery-image-6.jpg";
import GalleryImage7 from "../assets/gallery/gallery-image-7.jpg";

function Gallery() {
  return (
    <section className="flex flex-col justify-center items-center gap-15">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center gap-7"
      >
        <h1 className="text-white w-70 md:w-170 font-light text-[52px] md:text-[80px] leading-15 md:leading-22 tracking-[0.2px] text-center">
          Gallery
        </h1>
        <p className="text-white w-61 md:w-120 opacity-100 text-center text-sm">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
      </motion.div>
      <div className="flex flex-col justify-between items-center gap-5">
        {/* First row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:w-180 mx-auto">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            src={GalleryImage1}
            alt="Imagem"
            className="w-48 h-45 md:w-42 md:h-50.25 rounded-md object-cover"
          />
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            src={GalleryImage2}
            alt="Imagem"
            className="w-48 h-45 md:w-42 md:h-50.25 rounded-md object-cover"
          />
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            src={GalleryImage3}
            alt="Imagem"
            className="w-48 h-45 md:w-42 md:h-50.25 rounded-md object-cover"
          />
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            src={GalleryImage4}
            alt="Imagem"
            className="w-48 h-45 md:w-42 md:h-50.25 rounded-md object-cover"
          />
        </div>
        {/* Second row */}
        <div className="w-190 hidden md:grid grid-cols-[37%_20%_37%] justify-between gap-5">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            src={GalleryImage5}
            alt="Imagem"
            className="rounded-md object-cover"
          />
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
            src={GalleryImage6}
            alt="Imagem"
            className="h-full rounded-md object-cover"
          />
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
            src={GalleryImage7}
            alt="Imagem"
            className="rounded-md object-cover"
          />
        </div>
      </div>
      <div>
        <motion.button
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border text-white border-white text-sm px-7 h-11"
        >
          See More
        </motion.button>
      </div>
    </section>
  );
}

export default Gallery;
