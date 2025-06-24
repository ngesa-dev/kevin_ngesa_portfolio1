
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { profile } from "../assets";

const About = () => {
  return (
    <section className={`${styles.sectionStyling} `}>
      {/* Heading */}
      <div className={`${styles.sectionDivStyling}`}>
        <h2 className={`${styles.sectionHeadText}`}>
          About Me
          {/* Smart underline */}
          <span className={`${styles.smartUnderline}`}/>
        </h2>
      </div>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
        {/* Left: Image */}
        <div className="w-64 h-64 border-2 border-green-400 rounded-md overflow-hidden">
          <img
            src={profile} // replace with your image path
            alt="My Portrait"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right: Description + Buttons */}
        <div className="flex-1 text-left">
          <p className="text-lg mb-6">
           Hi, I'm Kevin Ngesa— a full-stack web developer who builds responsive, user-friendly web applications that help businesses grow.
I specialize in developing practical, high-performing solutions that simplify workflows, improve user experience, and drive revenue. 
With a focus on clean code and real-world results, I turn ideas into powerful digital tools.
          </p>

          <div className="flex flex-wrap gap-4">
            {["React.js", "Node.js", "MongoDB","Tailwind CSS","Framer-motion"].map((tech) => (
              <button
                key={tech}
                className="px-5 py-2 border-2 border-green-500 text-green-600 font-semibold rounded-full hover:bg-green-500 hover:text-white transition"
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(About,'about') ;
