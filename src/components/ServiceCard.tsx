import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/anims";

const ServiceCard = (props: any) => {
  let reverse: boolean = props.service.id % 2 === 0;
  return (
    <div className="sm:mb-10 lg:grid lg:grid-cols-5 md:grid-cols-none lg:bg-white lg:h-full">
      {reverse ? (
        <>
          {/** Mobile layout */}
          <motion.div
            className=" px-6 py-6 max-w-md m-auto lg:col-span-2 mt-20 mb-20 shadow-xl rounded-xl lg:mt-10 md:shadow-xl md:rounded-xl lg:shadow-none lg:rounded-lg lg:w-full lg:mb-10 lg:px-5 lg:pt-5 lg:pb-5 lg:max-w-lg bg-primary relative z-10 lg:left-52"
            variants={fadeIn("right", "", 0.5, 1.2)}
          >
            <img
              className="h-64 sm:h-52 sm:w-full sm:object-cover lg:hidden object-center mt-2 rounded-lg shadow-2xl"
              src={props.service.image}
              alt={props.service.title}
              
            />
            <h1 className="mt-5 font-bold text-lg lg:mt-7 text-white flex justify-center lg:justify-end">
              {props.service.title}
            </h1>
            <h1 className="text-lg text-justify pt-2 text-white flex justify-center lg:justify-end">
              {props.service.description}
            </h1>
          </motion.div>
          {/**Desktop */}
          <div className="hidden relative lg:block  lg:col-span-3 ">
            <motion.img
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={props.service.image}
              alt={props.service.title}
              variants={fadeIn("left", "", 0.5, 1.2)}
            />
          </div>
        </>
      ) : (
        <>
        {/** Desktop image */}
          <div className="hidden relative lg:block  lg:col-span-3 ">
            <motion.img
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={props.service.image}
              alt={props.service.title}
              variants={fadeIn("right", "", 0.5, 1.2)}
            />
          </div>

          <motion.div
            className=" px-6 py-6 max-w-md m-auto lg:col-span-2 mt-20 mb-20 shadow-xl rounded-xl lg:mt-10 md:shadow-xl md:rounded-xl lg:shadow-none lg:rounded-lg lg:w-full lg:mb-10 lg:px-5 lg:pt-5 lg:pb-5 lg:max-w-lg bg-primary relative z-10 lg:right-52"
            variants={fadeIn("left", "", 0.5, 1.2)}
          >
            <img
              className="h-64 sm:h-52 sm:w-full sm:object-cover lg:hidden object-center mt-2 rounded-lg shadow-2xl"
              src={props.service.image}
              alt={props.service.title}
            />
            <h1 className="mt-5 font-bold text-lg lg:mt-7 text-white flex justify-center lg:justify-start">
              {props.service.title}
            </h1>
            <h1 className="text-lg text-justify pt-2 text-white flex justify-center lg:justify-start">
              {props.service.description}
            </h1>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default ServiceCard;
