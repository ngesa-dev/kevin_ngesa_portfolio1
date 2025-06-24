import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { testimonials } from "../constants";
import { styles } from "../styles";

const Feedbacks = () => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  // Start animation on mount
  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        ease: "linear",
        duration: 30,
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <section className="w-full px-4 py-16 bg-tertiary text-white overflow-hidden">
      {/* Heading */}
      <div className={`${styles.sectionDivStyling}`}>
        <h2 className={`${styles.sectionHeadText}`}>
          Testimonials
          <span className={`${styles.smartUnderline}`} />
        </h2>
      </div>

      {/* Scrolling testimonials */}
      <div
        className="overflow-hidden"
        onMouseEnter={() => {
          setIsHovered(true);
          controls.stop();
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          controls.start({
            x: ["0%", "-50%"],
            transition: {
              ease: "linear",
              duration: 30,
              repeat: Infinity,
            },
          });
        }}
      >
        <motion.div
          className="flex w-max gap-4 sm:gap-6"
          animate={controls}
          initial={{ x: "0%" }}
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="min-w-[180px] sm:min-w-[240px] md:min-w-[260px] max-w-[250px] bg-gray-800 border border-green-300/20 rounded-lg p-4 text-center flex-shrink-0"
            >
              <p className="text-white text-sm sm:text-base italic mb-4">
                "{item.testimonial}"
              </p>
              <div className="flex items-center justify-center mb-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-green-500"
                />
              </div>
              <h3 className="text-green-400 font-semibold text-sm sm:text-base">
                {item.name}
              </h3>
              <p className="text-xs sm:text-sm text-secondary">
                {item.designation} at {item.company}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Feedbacks;
