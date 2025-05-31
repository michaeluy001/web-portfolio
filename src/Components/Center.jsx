import Project from "./Project";
import CTA from "./CTA";
import mike from "/src/assets/mike_astro.png";
import { motion } from "motion/react";

const Center = () => {
  return (
    <>
      <div className="h-150 justify-items-center mt-25 ">
        <Introduction />
        <Frame />
        <Buttons />
        <div className="hidden md:block w-2/3 lg:w-1/2 m-auto h-[1px] bg-gray-700 opacity-20" />
      </div>
    </>
  );
};
export default Center;

const Buttons = () => {
  return (
    <>
      <div className="w-50 h-15 text-center my-10 space-y-3 justify-items-center">
        <div className="bg-gray-800/50 h-[2px] w-full" />
        <CTA type="primary" title="View My Project">
          <Project />
        </CTA>
      </div>
    </>
  );
};

const Frame = () => {
  return (
    <>
      <div className="rounded-full size-60 bg-amber-200 mb-5 mt-10 overflow-hidden border-2 border-amber-600  ">
        <img src={mike} alt="Cartoon Astronaut Me" />
      </div>
    </>
  );
};

const Introduction = () => {
  return (
    <>
      <div className="my-5 text-center justify-items-center w-90 space-y-5 tracking-wider">
        <div>
          <motion.p
            className="origin-left text-sm text-start border-t"
            initial={{ rotate: "-90deg", opacity: 0 }}
            animate={{ rotate: "0deg", opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Hi. My name is
          </motion.p>
          <motion.p
            className="tracking-widest text-5xl px-5 lg:text-7xl border-l border-b lg:w-100 font-bold font-display"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Michael Uy
          </motion.p>
        </div>

        <motion.p
          className="text-xs tracking-widest"
          initial={{ opacity: 0, scale:0  }}
          animate={{ opacity: 1, scale:1  }}
          transition={{ duration: 0.5, delay: 1.5, type: 'spring' }}
        >
          I'm a self-taught, aspiring full-stack developer building fast,
          beautiful, and responsive web apps.
        </motion.p>
      </div>
    </>
  );
};
