import  { useState, useRef } from "react";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Kevin Ngesa",
          from_email: form.email,
          to_email: "ngesak2002@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
          
        }
      );
  };

  return (
    <section className={`${styles.sectionStyling}`}>
      {/* Heading */}
      <div className={`${styles.sectionDivStyling}`}>
        <h2 className={`${styles.sectionHeadText}`}>
          Get in Touch
          <span className={`${styles.smartUnderline}`} />
        </h2>
      </div>




      {/* Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="max-w-lg mx-auto">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col items-center gap-8"
        >
          <div className="w-full max-w-md flex flex-col gap-6">
            <label className="flex flex-col">
              <span className="text-white text-[16px] font-semibold mb-2">
                Your Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary text-white placeholder:text-secondary font-medium px-6 py-4 rounded-lg outline-none border-2 border-transparent focus:border-green-500 transition-colors duration-300"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white text-[16px] font-semibold mb-2">
                Your Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary text-white placeholder:text-secondary font-medium px-6 py-4 rounded-lg outline-none border-2 border-transparent focus:border-green-500 transition-colors duration-300"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white text-[16px] font-semibold mb-2">
                Your Message
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary text-white placeholder:text-secondary font-medium px-6 py-4 rounded-lg outline-none border-2 border-transparent focus:border-green-500 transition-colors duration-300"
              />
            </label>

            <button
              type="submit"
              className="bg-green-500 text-white font-bold py-3 rounded-xl shadow-md shadow-green-700 w-full outline-none hover:bg-green-600 transition-colors duration-300"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Contact, 'contact');

