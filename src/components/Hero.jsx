import { motion } from "framer-motion";

import { styles } from "../styles";
import { slideIn } from "../utils/motion";
// import { ComputersCanvas } from "./canvas";
import { Gp } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-[500px] xs:h-[600px] md:h-[500px] mx-auto bg-primary">
      <div className="xl:flex-row flex flex-col-reverse gap-6 overflow-hidden">
        <div
          className={`${styles.paddingX} absolute insert-0 top-64 xs:top-[380px] md:top-[110px] sm:max-w-md lg:max-w-7xl mx-auto flex flex-row  items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#add8e6]" />
            <div className="w-[2px] h-48 skyBlue-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, i'm <span className="text-[#add8e6]">Awhire Godspower</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              A skilled developer specializing in crafting <br />
              intuitive user interfaces and designing robust <br /> web
              applications.
            </p>
          </div>
        </div>

        <div className="absolute insert-0 top-20 md:top-[100px] left-10 md:left-[550px] lg:left-[800px] xs:pr-0 pr-20">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="flex-[0.75] p-8 text-white "
          >
            <img src={Gp} alt="Gp" className="w-[55%] h-[55%] lg:w-[60%] lg:h-[60%] xl:w-[250px] xl:h-[250px] object-contain rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* <ComputersCanvas />
      
      <div className="absolute xs:bottom-[-10px] bottom-[-20px] w-full flex justify-center items-center cursor-pointer">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2 ">
            <motion.div animate={{y: [0, 24, 0]}} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className="w-3 h-3 rounded-full bg-white mb-1" />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
