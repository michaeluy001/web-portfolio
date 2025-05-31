import { useNavigate } from "react-router";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { motion } from "motion/react";
const InfoLayout = ({ children, title }) => {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate("/web-portfolio");
  };

  return (
    <>
      <motion.div
        className="h-full flex w-3/4 flex-col m-25 mx-auto text-justify  text-gray-500 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "linear", delay: 0.2 }}
      > <p className="text-center my-10 text-2xl font-bold content-center">{title}</p>
        {children}
        <div
          className="text-2xl mt-15 flex gap-2 cursor-pointer justify-end "
          onClick={handleNav}
        >
          <div className="bg-gray-500 text-white w-auto flex p-2 gap-2 text-center items-center rounded-2xl hover:scale-105 transition shadow-lg shadow-gray-700/50  ">
          <IoReturnDownBackOutline className="" />
          <span className="text-sm">Back</span></div>
        </div>
      </motion.div>
    </>
  );
};
export default InfoLayout;
