import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import Arcasacra from "../assets/ARCASACRA.png";
import { motion } from "framer-motion";
import { slideIn } from "../utils/anims";
import { links } from "../constants";

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
    <motion.div
      className={`text-white flex justify-between items-center h-24  mx-auto z-30  px-8 transition duration-300 ease-out fixed top-0 w-full bg-primary
     ${visible ? "" : "-translate-y-28"} ${isYZero ? "shadow-lg" : ""}`}
     initial="hidden"
     whileInView="show"
     viewport={{once: true, amount:0.25}}
    >
      <motion.div className="md:w-[72px] w-16 ml-0 pt-1"
      variants={slideIn("left", "", 0.75, 1)}>
      <img src={Arcasacra} alt="/" />
      </motion.div>
      <ul className="hidden mx-auto md:flex">
        {links.map((link, index) => (
          <motion.li className="p-4 md:text-lg sm:text-md text-xl font-bold cursor-pointer"
           variants={slideIn("down", "", 0.5 * index, 0.3)}>
            <Link
              to={link.id}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setOpen(false)}
            >
              {link.title}
            </Link>
          </motion.li>
        ))}
      </ul>
      <motion.button className="bg-secondary hidden md:block w-[150px]  rounded-md py-3 text-white font-bold"
      variants={slideIn("right" ,"" ,0.75, 1)}>
        <a href="https://www.ethicarts.com/" rel="noreferrer" target="_blank">
          Visit EthicArts
        </a>
      </motion.button>
      <button onClick={() => setOpen(!isOpen)} className="block md:hidden">
        {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </button>
      <div
        className={
          isOpen
            ? "overflow-hidden fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-primary ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <img
          className="w-20 mx-auto ml-20 mt-4 mb-4 pt-1 "
          src={Arcasacra}
          alt="/"
        />
        <ul className="uppercase p-4">
          {links.map((link) => (
            <motion.li className="p-4 border-b font-bold border-gray-600">
              <Link
                to={link.id}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={() => setOpen(false)}
              >
                {link.title}
              </Link>
            </motion.li>
          ))}
        </ul>

        <button className="bg-secondary w-[150px] rounded-md  ml-10 py-3 my-2 text-white font-bold">
          <a href="https://www.ethicarts.com/" rel="noreferrer" target="_blank">
            Visit EthicArts
          </a>
        </button>
      </div>
    </motion.div>
  );
};

export default NavBar;
