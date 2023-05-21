import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Arcasacra from "../assets/ARCASACRA.png";

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isYZero, setYZero] = useState<boolean>(true);

  const handleScroll = () => {
    setOpen(false);

    const currentScrollPos = window.scrollY;

    currentScrollPos > prevScrollPos ? setVisible(false) : setVisible(true);

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    setYZero(window.scrollY !== 0);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={`text-white flex justify-between items-center h-24 max-w-[2048px] mx-auto px-4 transition duration-300 ease-out fixed top-0 w-full bg-[#735EEB]
     ${
      visible ? "" : "-translate-y-28"
    } ${isYZero ? "shadow-lg" : ""}`}
    
    >
      <img className="w-20 mx-auto ml-0 pt-1 " src={Arcasacra} alt="/" />
      <ul className="hidden md:flex">
        <li className="p-4">
          <p className="md:text-lg sm:text-md text-xl font-bold">Home</p>
        </li>
        <li className="p-4">
          <p className="md:text-lg sm:text-md text-xl font-bold">Company</p>
        </li>
        <li className="p-4">
          <p className="md:text-lg sm:text-md text-xl font-bold">Resources</p>
        </li>
        <li className="p-4">
          <p className="md:text-lg sm:text-md text-xl font-bold">About</p>
        </li>
        <li className="p-4">
          <p className="md:text-lg sm:text-md text-xl font-bold">Contact</p>
        </li>
      </ul>
      <button onClick={() => setOpen(!isOpen)} className="block md:hidden">
        {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </button>
      <div
        className={
          isOpen
            ? "overflow-hidden fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#735EEB] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <img className="w-20 mx-auto ml-20 mt-4 mb-4 pt-1 " src={Arcasacra} alt="/" />
        <ul className="uppercase p-4">
          <li className="p-4 border-b font-bold border-gray-600">Home</li>
          <li className="p-4 border-b font-bold border-gray-600">Company</li>
          <li className="p-4 border-b font-bold border-gray-600">Resources</li>
          <li className="p-4 border-b font-bold border-gray-600">About</li>
          <li className="p-4 font-bold">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
