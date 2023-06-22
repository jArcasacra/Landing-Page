import React from "react";
import Community from "../assets/Team work_Monochromatic.svg";

const Company = () => {
  return (
    <div id="company" className="w-full bg-white py-12 ">
      <p className="font-bold text-4xl flex justify-center text-[#735EEB]">Who are we</p>
      <div className="max-w-[1240px] mx-auto my-8 grid md:grid-cols-2 object-center">
        <img className="w-[450px] h-full " src={Community} alt={"Community"} />
        <div className="flex flex-col mt-8 justify-center px-4">
          <p className="py-4"><strong>ARCASACRA LLP is an Ethical Company</strong> with the legal form of a Limited Liability Partnership registered in Scotland (United Kingdom). Our aim is to promote and spread creativity and art on a global level, across all different cultures, societies and countries. This will be mainly possible thanks to ETHICARTS, our Ethical Marketplace for Creatives Industries (freelancers, start-ups or consolidated SMEs and big companies) and our Comunidad (Spanish for “community”) which will provide whatever you could need creative wise (forums, legal and financial advise, marketing and accounting tools, training resources, union information, etc).</p>
          <p className="py-4"><strong>ARCASACRA is a two-way business model:</strong> It is both a platform for Creative Industries freelancers and companies to contact and collaborate with each other (Business to Business, B2B) and for their potential customers to help them find the right product or service for their needs (Business to Costumer, B2C).</p>
          <p className="py-4"><strong>ARCASACRA cares about the local businesses, creative freelancers and its close-by customers</strong>, as we aim to create a human economy that brings wealth and development to its communities in a sustainable way. We are closely involved with the local communities as we take our social commitment very seriously. We consider companies should pay back to the community which allowed them to happen, that’s why we will invest in social and cultural projects for communities through <a className="text-[#735eeb]" href="https://arcasacra.org/" target="_blank" rel="noreferrer">ARCASACRA | org</a>, arriving soon!</p>
        </div>
      </div>
    </div>
  );
};

export default Company;
