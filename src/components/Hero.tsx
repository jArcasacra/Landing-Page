import React from "react";
import Logo from "../assets/Logo Arcasacra White.png"

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[1024px]  w-full h-screen mx-auto px-1 text-center flex flex-col justify-center items-center">
        <img src={Logo} className=" w-32 h-30  mb-4" />
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-4">
          Take the ethical way
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-2xl text-xl font-bold py-4">
          Change = Creativity + Community
          </p>
        </div>
        <p className="md:text-xl text-lg font-semibold py-4">
        We are a community-minded creative company with a goal in mind:
        </p>
        <p className="md:text-xl text-lg font-bold">
        building a better world together!
        </p>
      </div>
    </div>
  );
};

export default Hero;
