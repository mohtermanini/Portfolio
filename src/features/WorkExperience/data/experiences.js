import leadvyImage from "../../../../public/assets/images/work-experience/1.jpg";
import NamaaImage from "../../../../public/assets/images/work-experience/2.jpg";
import EasyBookImage from "../../../../public//assets/images/work-experience/3.jpg";
import BattleshipImage from "../../../../public//assets/images/work-experience/4.jpg";
import memoryCardImage from "../../../../public//assets/images/work-experience/5.jpg";
import sihatiImage from "../../../../public//assets/images/work-experience/6.jpg";
import flyFoodImage from "../../../../public//assets/images/work-experience/7.jpg";
import yellowPagesImage from "../../../../public//assets/images/work-experience/8.jpg";
import otherExperienceImage from "../../../../public//assets/images/work-experience/9.jpg";
import cheilImage from "../../../../public//assets/images/work-experience/10.jpg";

export const experiences = [
  {
    workType: "Full Time Job",
    title: "Samsung Cheil Middle East & Africa",
    joinPeriod: "Aug 2023 - Present",
    position: "Web Developer",
    description: (
      <>
        <ul>
          <li>
            Developed a comprehensive administrative website tailored for <b>retailers</b>, with a focus on <b>Samsung
              retailers</b> spanning <b>multiple countries</b>. This platform facilitates monitoring <b>market activities</b> and
            efficiently <b>managing</b> all stores. The system includes dedicated panels for website <b>managers</b>, and a
            <b>mobile application</b> specifically designed for <b>field users</b> rather than managers. Additionally, it
            generates detailed <b>reports</b> essential for data analysts to extract valuable insights.
          </li>
          <li>
            Implemented <b>APIs</b> for mobile and web applications in accordance with best practices using <b>Laravel</b>,
            with a strong emphasis on security, performance, maintainability, scalability, and usability. Applied a
            modular approach, followed <b>SOLID</b> principles, and incorporated <b>Test-Driven Development (TDD)</b> using <b>PHPUnit</b> for a comprehensive and robust development process.
          </li>
          <li>
            Developed the frontend using <b>Bootstrap</b> and <b>React/Next.js</b>, with a focus on ensuring <b>responsiveness</b>,
            constructing reusable components and applying industry-best practices, including effective <b>caching</b>
            strategies for optimal performance.
          </li>
          <li>
            Optimized a legacy website by implementing web techniques, including caching, bundling, and
            seamlessly integrating <b>JavaScript template engines</b> to enhance performance.
          </li>
        </ul>
      </>
    ),
    technicalStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "React",
      "Next.js",
      "PHP",
      "Laravel",
    ],
    image: cheilImage,
  },
  {
    workType: "Full Time Job",
    title: "LeadVy",
    position: "Front End Developer",
    joinPeriod: "Jul 2023 - Aug 2023",
    description: (
      <ul>
        <li>
          Developed a modern and user-friendly real estate website front-end using <b>React/Next.js</b>, complemented
          by a user-friendly admin panel for seamless property management, data editing, and analytics tracking.
        </li>
        <li>
          Collaborated closely with the backend team to define API requirements and ensured seamless integration for data retrieval and management.
        </li>
        <li>
          Ensured <b>responsive designs</b> and <b>cross-browser compatibility</b> for a consistent appearance across various
          devices.
        </li>
      </ul>
    ),
    technicalStack: ["HTML", "CSS", "SASS", "JavaScript", "React", "Next.js"],
    image: leadvyImage,
  },
  {
    workType: "Freelance",
    title: "EasyBook",
    position: "Web Designer",
    description: (
      <ul>
        <li>
          Designed user interfaces using <b>Adobe XD</b> for a large hotels and properties <b>booking website</b>.
        </li>
        <li>
          Created <b>+50</b> unique and highly intuitive user interfaces with a total of <b>+80</b> interfaces taking into
          account the best <b>UI/UX design</b> experience possible.
        </li>
        <li>
          Built over <b>+150 reusable components</b>, resulting in streamlined design and development processes. This
          approach enabled faster turnaround times and consistent design elements across the project.
        </li>
      </ul>
    ),
    urls: [
      {
        name: "Design demo",
        link: "https://xd.adobe.com/view/ed86e361-e04f-45de-9a67-0d89e483c2a4-b8d5",
      },
    ],
    technicalStack: ["Adobe XD"],
    image: EasyBookImage,
  },
  {
    workType: "Freelance",
    title: "Namaa Charitable Development Association",
    position: "Full Stack Developer",
    description: (
      <ul>
        <li>
          Upgraded a <b>library management system</b> from Excel -based to a user-friendly website, improving library
          management, reducing errors, and enhancing accessibility for staff and users.
        </li>
        <li>
          Developed the backend system and <b>Restful APIs</b> using <b>Laravel</b> and <b>MySQL</b>, incorporating advanced
          features such as subscription management and book borrowing systems.
        </li>
        <li>
          Employed <b>HTML5</b>, <b>CSS3</b>, <b>SASS</b>, <b>Bootstrap</b>, <b>JavaScript</b> and <b>jQuery</b> to craft a user-friendly
          control panel for efficiently managing library operations.
        </li>
      </ul>
    ),
    technicalStack: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "Laravel",
    ],
    image: NamaaImage,
  },
  {
    workType: "Personal Project (side showcase skills project, not a company)",
    title: "Battleship",
    position: "Front End Developer",
    description: (
      <ul>
        <li>Created a multiplayer war-themed board game</li>
        <li>
          Designed visually appealing user interfaces using <b>Adobe XD</b> and
          transformed them into actual interfaces using <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>.
        </li>
        <li>Developed a smart and challenging PC player to play against.</li>
        <li>
          Optimized the speed and performance of the game&apos;s website using
          advanced algorithmic approaches such as Dynamic Programming.
        </li>
        <li>
          Wrote <b>+50 tests</b> using testing frameworks such as <b>Jest</b> to ensure the
          quality and reliability of the game code. Conducted extensive
          debugging and troubleshooting to identify and resolve issues in the
          game logic and functionality.
        </li>
      </ul>
    ),
    urls: [
      {
        name: "Game  website",
        link: "https://mohtermanini.github.io/Battleship",
      },
    ],
    technicalStack: ["Adobe XD", "HTML", "CSS", "SASS", "JavaScript"],
    image: BattleshipImage,
  },

  {
    workType: "Personal Project (side showcase skills project, not a company)",
    title: "Memory Card",
    position: "Front End Developer",
    description: (
      <ul>
        <li>
          Developed a challenging and fun game that tests the memory using <b>React</b>, employing modern web development practices such as
          component-based architecture and state management with Context API.
        </li>
        <li>
          Designed and implemented the game board, user interface, and game
          logic, creating an engaging gameplay experience for players.
        </li>
        <li>
          Leveraged React&apos;s virtual DOM and efficient rendering to optimize
          game performance, resulting in smooth and responsive gameplay.
        </li>
        <li>
          Utilized <b>CSS</b> animations and transitions to enhance the visual appeal
          of the game, creating an immersive and enjoyable user experience.
        </li>
      </ul>
    ),
    urls: [
      {
        name: "Game  website",
        link: "https://mohtermanini.github.io/Memory-Card",
      },
    ],
    technicalStack: ["CSS", "SASS", "React"],
    image: memoryCardImage,
  },

  {
    workType: "Personal Project (side showcase skills project, not a company)",
    title: "Sihati",
    position: "Full Stack Developer",
    description: (
      <ul>
        <li>Designed and built a medical blog and consultation website using <b>Larvel</b>.</li>
        <li>
          Implemented an authentication and authorization system for three
          different types of users: members - doctors - admins.
        </li>
        <li>
          Optimized the website&apos;s responsiveness and user experience by
          leveraging the power of the Bootstrap grid system, creating a seamless
          and intuitive user interface that adapts flawlessly to different
          screen sizes and devices.
        </li>
      </ul>
    ),
    urls: [
      {
        name: "Demo Website",
        link: "https://sihatiteb.000webhostapp.com",
      },
    ],
    technicalStack: [
      "HTML",
      "CSS",
      "SASS",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "Laravel",
    ],
    image: sihatiImage,
  },

  {
    workType: "Personal Project (side showcase skills project, not a company)",
    title: "FlyFood",
    position: "UI Designer",
    description: (
      <ul>
        <li>
          Crafted visually appealing and intuitive user interfaces using <b>Adobe XD</b> for three
          mobile apps (main app - restaurant app - driver app) in a food
          ordering and delivery application.
        </li>
        <li>
          Conducted in-depth analysis and design of the Entity Relationship
          Diagram (ERD) of the system.
        </li>
      </ul>
    ),
    urls: [
      {
        name: "Design Demo",
        link: "https://xd.adobe.com/view/5729fd02-839b-4b85-ab46-6b3e6a5b0a53-027a",
      },
      {
        name: "ERD",
        link: "https://bit.ly/3qBZUVe",
      },
    ],
    technicalStack: ["Adobe XD", "System Design", "Database Design"],
    image: flyFoodImage,
  },
  {
    workType: "University Project",
    title: "Yellow Pages",
    position: "Database Designer",
    description: (
      <ul>
        <li>
          Designed the ERD for an ads application with many different features.
        </li>
      </ul>
    ),
    urls: [
      {
        name: "ERD",
        link: "https://bit.ly/3FT4wuV",
      },
    ],
    technicalStack: ["System Design", "Database Design"],
    image: yellowPagesImage,
  },
  {
    workType: null,
    title: null,
    position: "Not Enough for You?",
    description: (
      <ul>
        <li>
          I have a bachelor’s degree in Informatics Engineering, a <b>five years</b> computer science programe.
        </li>
        <li>I graduated at the top of my class with a  <b>GPA</b> of <b>87%</b>.</li>
        <li>
          I solved over 850 problems which involved different algorithms and
          data structures onwebsites like Codeforces, UVa Online Judge, Spoj.
          <p className="stoptalk-profile">
            - My profile on{" "}
            <a
              href="https://www.stopstalk.com/user/profile/Mohamad_Termanini"
              target="_blank"
              rel="noreferrer"
            >
              Stopstalk
            </a>
          </p>
        </li>
        <li>
          I participated in Aleppo Collegiate Programming Contest and got the
          <b>third</b> place.
        </li>
      </ul>
    ),
    image: otherExperienceImage,
  },
];
