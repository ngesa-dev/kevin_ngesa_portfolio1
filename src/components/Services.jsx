import { services, serviceIcons } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { zoomIn } from "../utils/motion";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className={`${styles.sectionStyling}`}>
      {/* Heading */}
      <div className={`${styles.sectionDivStyling}`}>
        <h2 className={`${styles.sectionHeadText}`}>
          My Services
          <span className={`${styles.smartUnderline}`} />
        </h2>
      </div>

      {/* Service Cards Grid */}
      <motion.div 
      variants={zoomIn(0.2, 1)}
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {services.map((service, index) => {
          const Icon = serviceIcons[service.iconKey];
          return (
            <div
              key={index}
              className="bg-gray-800 border border-green-300/20 rounded-xl p-6 text-center hover:shadow-lg transition duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-4 border border-green-500 rounded-full flex items-center justify-center">
                <Icon className="w-6 h-6 text-green-500" />
              </div>

              {/* Title */}
              <h3 className="text-lg text-green-400 font-semibold mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white text-sm">{service.description}</p>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Services, "services");
