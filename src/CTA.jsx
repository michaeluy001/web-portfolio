import { useState } from "react";
import ContentDialog from "./ContentDialog";

const CTA = ({ children, title="Button", className = "", type = "primary" }) => {
  const variations = {
    primary: "bg-green-800 text-white",
    secondary: "bg-yellow-600 text-white",
  };
  const baseStyle =
    "w-auto px-2 rounded-lg h-8 content-center text-center hover:scale-101 transition duration-150 cursor-pointer";

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(prev=> !prev);
  }


  return (
    <>
      <button
        className={`${className} ${baseStyle} ${variations[type]}`}
        onClick={handleOpen}
      > {title}
       {isOpen &&
        <ContentDialog onClose={handleOpen}> {children} </ContentDialog> }
      </button>
    </>
  );
};
export default CTA;
