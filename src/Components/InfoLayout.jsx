import { useNavigate } from "react-router";
import { IoReturnDownBackOutline } from "react-icons/io5";
const InfoLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate("/");
  };

  return (
    <>
      <div className="text-2xl mt-5 mb-10 justify-items-end m-auto w-1/2">
        <IoReturnDownBackOutline className="hover:scale-105 cursor-pointer" onClick={handleNav} />
      </div>
      <div className="h-dvh flex w-3/4 flex-col mx-auto text-justify ">
        {children}
      </div>
    </>
  );
};
export default InfoLayout;
