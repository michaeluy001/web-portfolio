import { Header } from "./ContentDialog";
import { motion } from "motion/react";

const AboutMe = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:w-full space-x-5">
        {info.map((item, index) => (
          <motion.div className="max-w-[500px] ">
            <Header key={index} title={item.title} className="text-center"/>
            <p>{item.content}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AboutMe;

const info = [
  {
    title: "Act I",
    content:
      "I was 13 when my cousin introduced me to World Editor, an application for creating custom maps for Warcraft. We were experimenting with models, skills, and reused heroes just for fun. Sometimes I downloaded source codes, only to get confused and overwhelmed. It was always total chaos! I was also aware of HTML at the time but never had the opportunity to learn it. I entered college in 2011 and pursued a degree in Computer Science. Although I did not finish it, I gained a basic understanding of what programming means, particularly with Java. But I didn’t have any deep interest in it, not until I discovered my curiosity about how things work. I took a technical course in Industrial Electricity. I was amazed and fascinated by the sequence flow, how a switch turns a motor on, how small switches trigger larger ones to power heavy duty machines that require more energy. And all of it involved logic.",
  },
  {
    title: "Act II",
    content:
      "Two years later, I had the opportunity to study again. So I took two short courses in Programming and Computer Hardware. In just one year of training, I learned procedural programming with Turbo C, Java, and Program Logic Formulation. Back then, we were taught how to code, but I knew it wasn’t the right way of doing things. So I took the initiative to study on my own. I read a book I downloaded called Head First Java from O’Reilly. It gave me an idea of what a good program looks like: Inheritance, Encapsulation, Abstraction, Overriding, and many more. But still, I didn’t understand it deeply. Unfortunately, after graduating from that school, I took a job unrelated to my interests. I didn’t have much choice but to take that path. And so, I abandoned coding. For a decade, I was working, but I knew that my passion and interest helped me endure and survive a hostile environment. It was a decade of hiatus, a decade of survival.",
  },
  {
    title: "Act III",
    content:
      "A series of events eventually led me to leave my day job. And that opened up the opportunity to return to coding. I purchased Dr. Angela Yu’s Full Stack Developer course on Udemy, and I’ve learned a lot about HTML, JavaScript, CSS, and the fundamentals of server side programming. I also learned how to use frameworks to simplify the process, and one of my favorites is Tailwind. It’s really a game changer. Now, I create apps using React, and I’m having so much fun. For me, when there’s no interest, there’s no growth. And since I’ve finally settled with coding, I’m dedicated to gaining more knowledge and experience so I can grow and be as productive as possible. I’m planning to start new projects. But right now, I’m focused on improving my existing game app, Monkey Boo!",
  },
];
