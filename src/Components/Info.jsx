import { MdOutlineArrowDropDown } from "react-icons/md";
import aboutMe from "/src/assets/About Me.png";
import callMe from "/src/assets/Call Me.png";
import skills from "/src/assets/Skills.png";
import { Link, Outlet } from "react-router-dom";
import { motion } from "motion/react";

const Info = () => {
  const items = [
    {
      src: callMe,
      title: "Contact Me",
      link: "contact",
    },
    {
      src: aboutMe,
      title: "About Me",
      link: "aboutme",
    },

    {
      src: skills,
      title: "Skills",
      link: "skills",
    },
  ];

  return (
    <>
      <div className="h-dvh text-3xl text-center cursor-pointer justify-items-center  items-center space-y-100">
        <a
          href="#card"
          className="hidden md:flex content-center items-center group justify-items-between "
        >
          Hire Me
          <MdOutlineArrowDropDown className="  group-hover:animate-bounce transition" />
        </a>
        <div
          className=" flex flex-col  items-center   justify-items-center gap-10 justify-center lg:flex-row"
          id="card"
        >
          {items.map((item, index) => (
            <Link key={index} to={item.link}>
              <Card
                key={index}
                src={item.src}
                title={item.title}
                onClick={() => scrollToSection(sectionRef)}
              />{" "}
            </Link>
          ))}
        </div>
      </div>

      <Outlet />
    </>
  );
};
export default Info;

const Card = ({ onClick, src, title }) => {
  return (
    <>
      <motion.div
        className="relative group border w-50 h-full flex-col shadow-md shadow-gray-800 justify-items-center hover:scale-101 transition delay-90 cursor-pointer overflow-hidden lg:grid lg:col-span-1"
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3, ease: "linear" }}
      >
        <div className="group-hover:bg-gray-500 transition duration-90">
          <img src={src} className="" />
        </div>
        <div className="absolute transitiond duration-200 text-gray-500 h-10  mb-auto -bottom-20 left-0 text-center content-center w-full text-lg justify-center group-hover:bottom-0 group-hover:bg-white rounded-t-full">
          {title}
        </div>
      </motion.div>
    </>
  );
};
