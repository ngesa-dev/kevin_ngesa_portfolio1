
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <>
      {/* Hero Section with Canvas and Text */}
      <section className="relative w-full h-screen mx-auto">
        {/* TEXT SECTION */}
        <div
          className={`absolute inset-0 top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center z-10`}
        >
          <h1 className={`${styles.heroHeadText} text-white text-center`}>
            Hi, I'm <span className="text-green-400">Ngesa</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-white-100 text-center`}>
            I develop web applications, user <br className="sm:block hidden" />
            interfaces and 3D visuals
          </p>
        </div>

        {/* CANVAS */}
        <div className="absolute inset-0 z-0">
          <ComputersCanvas />
        </div>
      </section>
    </>
  );
};

export default Hero;
