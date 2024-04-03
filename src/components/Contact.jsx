import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // template_h9l7f6k
    // service_79tg05q
    // 9vdYWcCK5qLwFJ4LP

    emailjs.send(
      "service_79tg05q",
      "template_b12c8m5",
      {
        from_name: form.name,
        to_name: "Elvis",
        from_email: form.email,
        to_email: "Awhireelvis@gmail.com",
        message: form.message,
      },
      "9vdYWcCK5qLwFJ4LP"
    )
    .then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as posible');

      setForm({
        name: '',
        email: "",
        message: '',
      })

      // console.log(form)
    }, (error) => {
      setLoading(false)

      console.log(error);

      alert('Something went wrong.')
    })
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden ">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-white p-8 rounded-2xl "
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <p className="text-secondary font-medium mb-4">Feel free to get in touch with me <br /> Awhireelvis@gmail.com</p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="" className="flex flex-col">
            <span className="text-black-100 font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-[#F1F1F0] py-4 px-6 placeholder:text-secondary text-black-100 rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-black-100 font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-[#F1F1F0] py-4 px-6 placeholder:text-secondary text-black-100 rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-black-100 font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows={6}
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-[#F1F1F0] py-4 px-6 placeholder:text-secondary text-black-100 rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-[#52c0e5] py-3 px-8 outline-non w-fit text-white font-bold shadow-2xl rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h[550px] h-[550px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
