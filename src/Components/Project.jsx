import mb1 from "/src/assets/monkeyboo1_still.jpg";
import mb2bin from "/src/assets/monkeyboo2_bin.jpg";
import mb2vid from "/src/assets/mb2vid.mp4";
import { Header } from "../Components/ContentDialog";
import { ImageHolder } from "../Components/ContentDialog";

const Project = () => {
  return (
    <>
      <Header title="Monkey Boo!: Behind the Banana Trees" />
      <p className="text-md font-default">
        Monkey-boo! (earlier version) was a personal project I started in
        December 2024. It was a jungle-themed, browser-based game app inspired
        by the game “Jungle Book,” which I used to play when I was young. My
        goal was simply to learn and apply what I had learned in JavaScript and
        CSS. Beyond that, I had also been wanting to blend in educational
        elements in the future, such as trivia cards about wildlife that players
        can collect.
        <br /> In May 2025, I started working on its remake, applying everything
        I had learned, primarily React.js. The game mechanic is simple: You have
        to gather the required number of fruits without clicking on the monkey,
        which is placed randomly somewhere on the tiles.
      </p>
      <ImageHolder image={mb1} caption="Earlier Version" />
      <Header title="The Process" />
      <p>
        As I initially mentioned, there was an original version written in
        vanilla JavaScript. I won’t go into much detail about that process
        because I’d like to tell you more about this remake version. I started
        creating the project with Vite and installed dependencies like
        TailwindCSS and Motion. My main focus was the game logic. To ease my
        fear of ruining the whole project with spaghetti code, I made sure to
        stage and commit the changes I had tested repeatedly. I also realized
        that it's a good practice to commit each time I fix an issue. So I
        searched the internet for commit message naming conventions. For every
        feature I added, I would create a branch. This became my routine to make
        sure that in case I made a mistake, I could just go back to the last
        save point.
      </p>
      <Header title="The Mayhem" />
      <p>
        Initially, most of the game logic was handled in the component called
        <i> Board</i>. I tried making the structure cleaner, but I'd still end
        up writing side effects after side effects. In terms of styling, at
        first, I wasn’t comfortable with the concept of utility classes, but
        later on, I realized their importance when I noticed how quickly I could
        style components compared to using plain CSS. When I first started the
        remake, I initially tried building it in CodeSandbox. The initial draft
        of the remake was supposed to have an educational feature where the
        player had to answer a multiple-choice question each time they clicked
        on a tile. The only problem I had with this environment was that it was
        sluggish and crashed very often. So I returned to using VSC. But the
        problem did not end there. I was still having a hard time managing the
        state of the components since I only knew about <i>useState</i>. My code
        wasn’t scalable or easy to maintain at all. It was a total mess.
      </p>
      <ImageHolder image={mb2bin} caption="Remake Draft" />
      <Header title="The Solution" />
      <p>
        So, I took the time to understand the core foundations of React by
        watching YouTube videos and reading the documentation. I learned about
        <i> useEffect</i> and other hooks like <i>useRef</i>. Later, I learned
        how to create custom hooks to keep my components clean. I also
        discovered <i>useContext</i>
        and came to appreciate its usefulness in my project. This truly helped
        me address the issues I was facing. Not only have I been studying React,
        but I’ve also taken an interest in principles like the Single
        Responsibility Principle and refactoring. I’m still eager to learn, so
        I’ve been reading <i>The Pragmatic Programmer</i>. This way, I can
        reduce the issues I may face in the future with how I write programs.
      </p>
      <Header title="Tech Stack" />
      <p>
        Though I still need to work on styles and animations, I consider this
        work “all set,” since all the basic features of the game have already
        been completed. During the development of this game, I learned so many
        things, such as:
      </p>
      <ul className="list-disc list-inside text-justify my-3">
        <li> Utilizing React hooks </li>
        <li> Creating abstract components </li>
        <li> Using React Router</li>
        <li> Becoming comfortable with TailwindCSS</li>
        <li> Using animation through Motion </li>
        <li> Using React Icons </li>
        <li> Deploying a server through Render </li>
        <li> Creating a PostgreSQL database through Render </li>
        <li> Purchasing a domain</li>
      </ul>
      <Header title="Monkey Boo... and Beyond!" />
      <p>
        There are many features I wished I have incorporated to this project,
        but I had already set a deadline. Soon, I’ll reimplement the timer: the
        shorter it takes to finish the round, the higher the score. Also, I’ll
        be adding more traps and bonuses. I also plan to add a pattern system so
        that trap placements aren’t purely random. I want to find a way to
        encourage players to think instead of guess, making the game more
        engaging, educational, and fun, especially for younger audiences.
      </p>
      <video controls className="my-10">
        <source src={mb2vid} type="video/mp4"></source>
        Your Browser Does not support MP4.
      </video>
      Here's the link to the game. But Please be patient as the server sleeps.
      You may experience delay in Saving and retrieving information
      <a
        className="text-green-600 font-bold font-display text-3xl tracking-widest whitespace-nowrap hover:text-yellow-400 active:text-yellow-400"
        target="_blank"
        href="https://michaeluy001.github.io/Monkey-Boo"
      >
        {" "}
        Monkey Boo!{" "}
      </a>
    </>
  );
};

export default Project;
