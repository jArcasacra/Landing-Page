import Card from "./PrinciplesCard";
import { valuesDesc } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/anims";

const Values = () => {
  const cards = valuesDesc;
  return (
    <motion.div
      id="values"
      className="w-full py-[4rem] px-4"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.p
        className="font-bold text-4xl flex justify-center text-white pb-16"
        variants={fadeIn("", "", 0.1, 1)}
      >
        Our Principles
      </motion.p>
      <div className="max-w-[1240px] justify-center mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((d, i) => (
          <Card key={i} test={d} delay={i * 0.35}/>
        ))}
      </div>
    </motion.div>
  );
};

export default Values;
