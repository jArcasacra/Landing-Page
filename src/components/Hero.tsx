import React from "react";
import Logo from "../assets/Logo Arcasacra White.png";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/anims";

const Hero = () => {
  return (
    <motion.div
      className="text-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="max-w-[1024px]  w-full h-screen mx-auto px-1 text-center flex flex-col justify-center items-center">
        <motion.img src={Logo} className=" w-32 h-30  mb-4" 
        variants={fadeIn("", "", 0.75, 1)}/>
        <motion.h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-4"
        variants={textVariant(0.75)}>
          Take the ethical way
        </motion.h1>
        <motion.p className="md:text-4xl sm:text-2xl text-xl font-bold py-4"
        variants={textVariant(0.75)}>
          Change = Creativity + Community
        </motion.p>
        <motion.p className="md:text-xl text-lg font-semibold py-4"
        variants={textVariant(0.75)}>
          We are a community-minded creative company with a goal in mind:
        </motion.p>
        <motion.p className="md:text-xl text-lg font-bold"
        variants={textVariant(0.75)}>
          building a better world together!
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Hero;
