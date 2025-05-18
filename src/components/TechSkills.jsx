import { skills, skillIcons } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const TechSkills = () => {
  return (
    <section className={`${styles.sectionStyling}`}>
      {/* Heading */}
      <div className={`${styles.sectionDivStyling}`}>
        <h2 className={`${styles.sectionHeadText}`}>
          My Skills
          <span className={`${styles.smartUnderline}`} />
        </h2>
      </div>

      {/* Skill Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {skills.map(({ name, iconKey, color }, index) => {
          const Icon = skillIcons[iconKey];
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-green-400 hover:scale-105 transition">
                <Icon className={`text-3xl ${color}`} />
              </div>
              <p className="mt-2 text-sm font-medium">{name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SectionWrapper(TechSkills, "tech_skills");
