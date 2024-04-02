import { motion } from "framer-motion"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
import { testimonials } from '../constant'



const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => {
  return(
    <motion.div variants={fadeIn('', 'spring', index * 0.5, 0.75)} className="bg-[#F1F1F0] p-8 rounded-3xl xs:w-[320px] w-full">
      <p className={`text-${styles.sectionHeadText} text-[48px]`}>"</p>

      <div className="mt-1">
        <p className="text-black-100 tracking-wider text-[18px">
          { testimonial }
        </p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-black-100 font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} at {company}
            </p>
          </div>

          <img src={image} alt={`feedback-by-${name}`} className="w-10 h-10 rounded-full object-cover" />
        </div>
      </div>

    </motion.div>
  )
}


const Feedbacks = () => {
  return (
    <div className="rounded-[20px]">
      <div className={`${styles.padding} rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others says</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-5 text-black-100 `}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "")