import React from "react";

const Card = () => {
  return (
    <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
      <p className="text-center text-4xl font-bold">Arcastock</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">An online resources platform, including pictures, videos, music and more from our EthicArts members</p>
        <p className="py-2 border-b mx-8">Licensed creations to companies looking for compositions for their documentaries, pictures for illustrators, etc</p>
        <p className="py-2 border-b mx-8">A subscription is required to access this resources [Not available at the moment]</p>
      </div>
      <button className="bg-[#735EEB] w-[200px] rounded-md font-bold my-6 mx-auto px-6 py-3 text-white">
        Notify Me
      </button>
    </div>
  );
};

export default Card;
