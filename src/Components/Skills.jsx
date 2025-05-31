const Skills = () => {
  const skillsList = [
    {
      type: "Front End",
      skills: [
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "JavaScript (ES6+)",
        "Material UI",
        "React.js",
        "React Router",
        "Motion",
        "React Icons",
        "EJS",
        "Shopify Liquid Templating",
      ],
    },
    {
      type: "Back End",
      skills: [
        "Node.js",
        "Express.js (Routing, Custom Middleware)",
        "Axios",
        "HTTP Requests",
        "RESTful APIs",
        "PostgreSQL (basic CRUD, SQL queries)",
      ],
    },
    {
      type: "Tools & Workflow",
      skills: [
        "Git (Local & Remote Repositories)",
        "GitHub",
        "npm",
        "VS Code",
        "Postman",
        "Vite",
        "Render"
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-items-center text-center mx-auto">
        {skillsList.map((item, index) => (
          <div key={index} className="m-5">
            <p className="text-lg font-bold text-gray-500 mb-3">{item.type}</p>
            <ul className="space-y-1 flex flex-col">
              {item.skills.map((item, index) => (
                <li
                  key={index}
                  className=" w-auto h-auto px-5 text-wrap content-center text-gray-500 border-b "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};
export default Skills;
