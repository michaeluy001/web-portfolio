import { useState } from "react";
import ContentDialog from "./ContentDialog";

const CTA = ({ children, title="Button", className = "", type = "primary" }) => {
  const variations = {
    primary: "bg-amber-600 text-white hover:ring-amber-300",
    secondary: "bg-yellow-600 text-white",
  };
  const baseStyle =
    "w-45 px-2 rounded-lg h-auto content-center text-center hover:scale-101 transition duration-150 cursor-pointer font-display tracking-widest text-2xl hover:ring-2 ";

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(prev=> !prev);
  }


  return (
    <>
      <button
        className={`${className} ${baseStyle} ${variations[type]} `}
        onClick={handleOpen}
      > {title}
       {isOpen &&
        <ContentDialog onClose={handleOpen}> {children} </ContentDialog> }
      </button>
    </>
  );
};
export default CTA;
