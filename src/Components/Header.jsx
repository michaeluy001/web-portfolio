import resume from "/src/assets/resume.pdf";
import { FaRegFilePdf } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <div className=" bg-amber-200 h-15 w-full  "></div>
      <div className="fixed top-0 left-0 bg-amber-200 h-15 w-full z-10">
        <div className="w-90 md:w-1/2 mx-auto  justify-items-end h-full content-center">
       
          <div className="flex text-center content-center gap-5 items-center text-xs">
            Download Resume
            <a href={resume} download>
              {" "}
              <FaRegFilePdf className="text-2xl"/>{" "}
            </a>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Header;
