import { styles } from "../styles";
import bgImage from "../assets/bg_image.jpg";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-[500px] md:h-screen bg-no-repeat bg-cover bg-[top_center] md:bg-center animate-bgPan"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Text + CTA */}
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

        <a
          href="#contact"
          className="mt-8 px-6 py-3 text-2xl bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition duration-300"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
