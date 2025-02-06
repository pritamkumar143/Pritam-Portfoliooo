import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div key={technology.name} className="flex flex-col items-center w-28 h-28 relative">
          <BallCanvas icon={technology.icon} />
          {/* <BallCanvas icon={technology.name} /> */}

          {/* Animated Text */}
          <motion.p
            className="absolute bottom-[-30px] text-white text-sm font-poppins font-medium opacity-0"
            initial={{ opacity: 0.7, y:5 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {technology.name}
          </motion.p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
