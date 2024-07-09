"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="xl:py-16 py-10">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center md:text-left space-y-8 text-center"
        >
          <h1 className=" mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Freedom Chisom",
                1000, // Timers
                "FULLSTACK Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "0.9em" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-Gray font-medium text-base sm:text-lg lg:text-xl">
            I am Chisom Freedom Nwanoruo, a dedicated fullstack developer with
            expertise in HTML, CSS, JavaScript, React, Next.js, and Node.js.
            With a strong foundation in both front-end and back-end
            technologies, I excel at creating dynamic and responsive web
            applications. My passion for coding and problem-solving drives me to
            continuously learn and innovate, delivering high-quality solutions
            that meet user needs and business goals.
          </p>
          <div className="space-y-6 xl:text-left text-center">
            <AnchorLink
              href="#contact"
              className="w-full sm:w-fit px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary to-secondary hover:bg-slate-200 "
            >
              Hire Me
            </AnchorLink>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary to-secondary border bg-transparent hover:bg-slate-800  mt-3">
              <span className="block bg-bgDark hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 lg:col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-bgDark w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/devMan.png"
              alt="alt image"
              height={300}
              width={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
