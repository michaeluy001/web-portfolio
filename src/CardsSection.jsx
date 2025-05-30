import aboutMe from "/src/assets/About Me.png";
import callMe from "/src/assets/Call Me.png";
import skills from "/src/assets/Skills.png";


const CardsSection = () => {
  const items = [
    {
      src: callMe,
      title: "Contact Me",
    },
    {
      src: aboutMe,
      title: "About Me",
    },

    {
      src: skills,
      title: "Skills",
    },
  ];

  return (
    <>
      <div className="h-dvh flex flex-col  items-center content-center justify-items-center justify-evenly  lg:flex-row">
        {items.map((item, index) => (
          <Card key={index} src={item.src} title={item.title} />
        ))}
      </div>
    </>
  );
};
export default CardsSection;

const Card = ({ onClick, src, title }) => {
  return (
    <>
      <div
        className="border w-50 h-70 flex- flex-col shadow-md shadow-gray-800 justify-items-center cursor-pointer"
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
