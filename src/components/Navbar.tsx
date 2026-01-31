// react
import { useState } from "react";

// motion
import { motion } from "motion/react";

// images
import logo from "../assets/navbar/logo.svg";
import hamburguer from "../assets/navbar/hamburguer.svg";

function Navbar() {
  const [isActiveHamburguer, setIsActiveHamburguer] = useState(false);
  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <nav className="max-w-274.25 py-2 px-5 mx-auto sticky flex justify-between items-center">
        <img src={logo} alt="logo" className="h-12" />
        {/* Tablet and desktop navigation */}
        <div className="hidden md:flex w-98.25 items-center justify-between">
          <button className="hover:text-white/75 text-white text-md">
            Home
          </button>
          <button className="hover:text-white/75 text-white text-md">
            Product
          </button>
          <button className="hover:text-white/75 text-white text-md">
            About
          </button>
          <button className="hover:text-white/75 text-white text-md">
            Contact
          </button>
        </div>

        <div className="flex gap-2 h-10">
          <button className="border text-white border-white text-sm px-9">
            Login
          </button>

          {/* Smartphone navigation */}
          <img
            src={hamburguer}
            alt="hamburguer"
            className="block md:hidden"
            onClick={() => setIsActiveHamburguer(!isActiveHamburguer)}
          />
        </div>
      </nav>
      {/* Open Hamburguer */}
      {isActiveHamburguer ? (
        <motion.div
          initial={{ y: -20, opacity: 0 }} // começa em cima
          animate={{ y: 0, opacity: 1 }} // desce e aparece
          exit={{ y: -20, opacity: 0 }} // sobe e some
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex md:hidden flex-col border-t border-white p-2 gap-7"
        >
          <button className="hover:text-white/75 text-white text-lg">
            Home
          </button>
          <button className="hover:text-white/75 text-white text-lg">
            Product
          </button>
          <button className="hover:text-white/75 text-white text-lg">
            About
          </button>
          <button className="hover:text-white/75 text-white text-lg">
            Contact
          </button>
        </motion.div>
      ) : null}
    </motion.div>
  );
}

export default Navbar;
