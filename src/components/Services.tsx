import React from "react";
import Tech from '../assets/pexels-luis-gomes-546819.jpg';
import Music from '../assets/pexels-pixabay-257904.jpg';
import Marketing from '../assets/pexels-dominika-roseclay-905163.jpg';
import ServiceCard from "./ServiceCard";


const Services = () => {

  const services = [
    {id: 1, image: Tech, title: 'Development', description: 'test'},
    {id: 2, image: Music, title: 'Music Production', description: 'test'},
    {id: 3, image: Marketing, title: 'Marketing', description: 'test'},
  ]
  
  return (
    <div id="services" className="w-full py-[4rem] px-4 bg-white">
      <div className="flex items-center justify-center pb-16">
      <h1 className="font-bold md:text-4xl sm:text-3xl text-2xl text-[#735EEB]">Some services we are offering</h1>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-1 gap-8">
        {services.map((s, i) => (
          <ServiceCard service={s} key={i} reversed={i%2===0}/>
        ))}
      </div>
    </div>
  );
};

export default Services;
