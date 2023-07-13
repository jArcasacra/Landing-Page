import React from "react";

import ServiceCard from "./ServiceCard";
import { servicesDesc } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/anims";

const Services = () => {
  const services = servicesDesc;

  return (
    <motion.div
      id="services"
      className="w-full py-[4rem] px-4 bg-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="flex items-center justify-center pb-16">
        <motion.h1
          className="font-bold md:text-4xl sm:text-3xl text-2xl text-primary"
          variants={fadeIn("", "", 0.1, 1)}
        >
          Some services we are offering
        </motion.h1>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-1 gap-8">
        {services.map((s, i) => (
          <ServiceCard service={s} key={i} reversed={i % 2 === 0} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
