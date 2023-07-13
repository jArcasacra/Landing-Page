import React from "react";
import {motion} from 'framer-motion';
import { fadeIn, slideIn, slideInHighDistance } from "../utils/anims";

const Card = (props: any) => {
  return (
    <motion.div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white"
    variants={slideInHighDistance("up","spring", props.delay,1.5)}>
      <img
            className="md:w-20 w-10 mx-auto mt-[3rem] mb-8 bg-white"
            src={props.test.icono}
            alt="/"
          />
      <p className="text-center text-4xl font-bold">{props.test.titulo}</p>
      <div className="text-center font-medium">
        <p className="py-2 mx-8 mt-8">{props.test.descripcion}</p>
      </div>
    </motion.div>
  );
};

export default Card;
