import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constant";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-2xl "
      >
        <div options={{ max: 45, scale: 1, speed: 450 }} className="bg-secondary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col ">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[18px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="">
      <motion.div variant={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variant={fadeIn("", "", 0.5, 1)}
        className="mt-4 text-black text-[16px] max-w-3xl leading-[30px] "
      >
        I'm a skilled software developer with over 3 years plus of experience,
        driven by a passion for creating interactive and responsive user
        interfaces. Proficient in ReactJS, NextJS, JavaScript, TypeScript,
        NodeJS, ExpressJS, MongoDB, and MongooseJS. Experienced in building and
        maintaining user-facing web applications, with a strong background in
        fintech and e-commerce. Skilled in translating design mockups into
        pixel-perfect, responsive interfaces while optimizing performance and
        ensuring cross-browser compatibility. Collaborative team player with
        excellent problem-solving and analytical skills. Let's work together to
        bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

// export default About
export default SectionWrapper(About, 'about');
