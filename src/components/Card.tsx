import React from "react";

const Card = (props: any) => {
  return (
    <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
      <img
            className="md:w-20 w-10 mx-auto mt-[3rem] mb-8 bg-white"
            src={props.test.icono}
            alt="/"
          />
      <p className="text-center text-4xl font-bold">{props.test.titulo}</p>
      <div className="text-center font-medium">
        <p className="py-2 mx-8 mt-8">{props.test.descripcion}</p>
      </div>
    </div>
  );
};

export default Card;
