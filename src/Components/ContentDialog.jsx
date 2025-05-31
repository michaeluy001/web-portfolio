import { createPortal } from "react-dom";
import { MdCloseFullscreen } from "react-icons/md";
import { motion } from "motion/react";

const ContentDialog = ({ children, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return createPortal(
    <>
      <div
        className="fixed left-0 top-0 h-dvh justify-items-center w-full text-gray-500 z-25 bg-gray-500/80"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          className="lg:my-20 w-full h-dvh lg:h-200 content-center p-5 overflow-hidden max-w-[700px] bg-gray-200 rounded-xl  shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="justify-items-end">
            <MdCloseFullscreen
              className="m-3  cursor-pointer hover:scale-110 transition "
              onClick={handleClose}
            />
          </div>

          <div className=" overflow-y-auto  h-7/8 text-center justify-items-center lg:p-10 custom-scrollbar">
            {children}
          </div>
        </motion.div>
      </div>
    </>,
    document.body
  );
};
export default ContentDialog;

export const ImageHolder = ({ image, caption }) => {
  return (
    <>
      <div className="my-5 relative lg:w-[400px] w-full ">
        <img src={image} className="rounded-2xl" />
        <p className="absolute px-1 top-3 right-3 text-gray-50 bg-gray-800 font-bold">
          {caption}
        </p>
      </div>
    </>
  );
};

export const Header = ({ title, className }) => {
  return (
    <>
      <h1 className={`text-3xl  my-10   ${className}`}>{title}</h1>
    </>
  );
};
