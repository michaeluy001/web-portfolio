import Project from "./Project";

import CTA from "./CTA";
import mike from "/src/assets/mike_astro.png";

const Center = () => {
  return (
    <>
      <div className="justify-items-center text-gray-800 mt-50">
        <Introduction />
        <Frame />
        <Buttons />
      </div>
    </>
  );
};
export default Center;

const Buttons = () => {
  return (
    <>
      <div className="w-50 h-15 text-center my-10 space-y-3 justify-items-center">
        <div className="   bg-gray-800/50 h-[2px] w-full" />
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
      <div className="rounded-full size-40 bg-amber-200 mb-5 mt-10 overflow-hidden border-2 border-amber-600  ">
        <img src={mike} alt="Cartoon Astronaut Me" />
      </div>
    </>
  );
};

const Introduction = () => {
  return (
    <>
      <div className="my-5 text-center justify-items-center w-80 space-y-5 tracking-wider">
        <div>
          <p className="text-sm text-start border-t">Hi. My name is</p>
          <p className="text-3xl border-l border-b w-50 font-bold">
            Michael Uy
          </p>
        </div>

        <p className="text-xs ">
          I'm a self-taught, aspiring full-stack developer building fast,
          beautiful, and responsive web apps.
        </p>
      </div>
    </>
  );
};
