import React from "react";
import EthicArts from "../assets/ethicarts_s.png";
import Card from "./Card";

const Subcriptions = () => {
  return (
    <div className="w-full py-[4rem] px-4 bg-white">
      <div className="flex align-middle justify-center pb-16">
      <h1 className="font-bold text-4xl">Some services we are offering</h1>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <Card />
        <div className="w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-40 mx-auto mt-[3rem] mb-8 bg-white"
            src={EthicArts}
            alt="/"
          />
          {/*<h2 className="text-2xl font-bold text-center py-8">Docker</h2>*/}
          <p className="text-center text-4xl font-bold">Ethicarts</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-2">Our creative marketplace which provides your own landing page and expose your services in the community</p>
            <p className="py-2 border-b mx-8 mt-2">We get a 13% fee per service adquired in our platform</p>
            <p className="py-2 border-b mx-8 mt-1">You can find more info about ethic arts <a href="#" className="text-[#735EEB]">here</a></p>
          </div>
          <button className="bg-[#735EEB] w-[200px] rounded-md font-bold my-6 mx-auto px-6 py-3 text-white">
            Go to EthicArts
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <p className="text-center text-4xl font-bold">Arcademeia</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">An Autonomous online education platform with workshops, webinars and courses to provide you with the tools and resources to achive your goals</p>
            <p className="py-2 border-b mx-8">Requires a subscription to have access to the resources</p>
            <p className="py-2 border-b mx-8">Special discounts for premium members on release [Not available at the moment]</p>
          </div>
          <button className="bg-[#735EEB] w-[200px] rounded-md font-bold my-6 mx-auto px-6 py-3 text-white">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subcriptions;
