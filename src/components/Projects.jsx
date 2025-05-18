import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section className={`${styles.sectionStyling}`}>
      {/* Heading */}
      <div className={`${styles.sectionDivStyling}`}>
        <h2 className={`${styles.sectionHeadText}`}>
          Featured Projects
          <span className={`${styles.smartUnderline}`} />
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden border border-green-300/20 shadow-lg hover:shadow-xl transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl text-green-400 text-center font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-200 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`text-xs px-2 py-1 rounded-full font-semibold ${
                      idx % 4 === 0
                        ? "bg-blue-600"
                        : idx % 4 === 1
                        ? "bg-green-600"
                        : idx % 4 === 2
                        ? "bg-purple-600"
                        : "bg-pink-600"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Projects,'projects');
