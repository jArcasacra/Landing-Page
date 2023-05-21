import React from "react";

const Company = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        { /** 
        <p className="text-[#00df9a] font-bold p-2">
          {" "}
          Change = Creativity + Community
        </p>
        */}
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          An ethical partnership
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
          Aiming to change the world
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold">
          {" "}
          Change = Creativity + Community
        </p>
        <button className="bg-[#B9AFF5] w-[300px] rounded-md font-medium my-6 mx-auto py-3 text-white">Check our community marketplace!</button>
      </div>
    </div>
  );
};

export default Company;
