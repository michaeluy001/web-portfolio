
import { createPortal } from "react-dom";
import { MdCloseFullscreen } from "react-icons/md";

const ContentDialog = ({ children, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return createPortal(
    <>
      <div
        className="fixed left-0 top-1/2 -translate-y-1/2  justify-items-center w-full  text-gray-300 "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-dvh lg:h-200 content-center p-5 overflow-hidden max-w-[700px] bg-gray-600 rounded-xl">
          <div className="absolute top-0 right-0 justify-end">
          <MdCloseFullscreen
            className="m-3  cursor-pointer hover:scale-110 transition "
            onClick={handleClose}
          /></div>
          <div className="overflow-y-auto  h-7/8 text-center justify-items-center lg:p-10">
            {children}
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};
export default ContentDialog;

export const ImageHolder = ({ image, caption }) => {
  return (
    <>
      <div className="my-2 relative lg:w-[400px] w-full">
        <img src={image} />
        <p className="absolute top-3 right-3 text-gray-800 bg-gray-300 font-bold">
          {caption}
        </p>
      </div>
    </>
  );
};

export const Header = ({ title }) => {
  return (
    <>
      <h1 className="text-3xl my-2">{title}</h1>
    </>
  );
};
