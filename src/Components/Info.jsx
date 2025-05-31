import aboutMe from "/src/assets/About Me.png";
import callMe from "/src/assets/Call Me.png";
import skills from "/src/assets/Skills.png";
import { Link, Outlet,  } from "react-router-dom";

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
      <div className="h-dvh flex flex-col  items-center  justify-items-center justify-evenly  lg:flex-row">
        { items.map((item, index) => (
          <Link key={index} to={item.link}>
            <Card key={index} src={item.src} title={item.title} />{" "}
          </Link>
        ))}
        
      </div>
      <Outlet />
    </>
  );
};
export default Info;

const Card = ({ onClick, src, title }) => {
  return (
    <>
      <div
        className="border w-50 h-70 flex- flex-col shadow-md shadow-gray-800 justify-items-center hover:scale-101 transition cursor-pointer"
        onClick={onClick}
      >
        <img src={src} className="h-5/8" />
        <div className="border-t mb-auto h-3/8 text-center content-center w-full text-lg">
          {title}
        </div>
      </div>
    </>
  );
};
