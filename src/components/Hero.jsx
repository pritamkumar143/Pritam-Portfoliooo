import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter"; // Typewriter effect
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* Left Indicator Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff] animate-pulse" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Text Content */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I'm{" "}
            <span className="text-[#915eff] glow-text">
              <Typewriter
                words={["Pritam", "a Developer", "a ML Enthusiast"]}
                loop={true}
                cursor
                cursorStyle="-"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces, and web applications.
          </motion.p>

          {/* Hire Me Button */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-5 inline-block bg-[#915eff] text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-[#7a3ee7] transition-all"
          >
            Hire Me
          </motion.a>
        </div>
      </div>

      {/* 3D Canvas */}
      <ComputersCanvas />

      {/* Scroll Down Indicator */}
      <div className="absolute xs:bottom-5 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
