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
    position: "Web Developer",
    description: (
      <>
        <ul>
          <li>
            Maintained and enhanced an administrative dashboard crucial for
            generatingextensive reports.
          </li>
          <li>
            Enhanced user satisfaction by optimizing the dashboard&apos;s speed
            and efficiencythrough the implementation of web techniques such as
            caching, bundling, andseamless integration of JavaScript template
            engines for performance optimization.
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
    description: (
      <ul>
        <li>
          Led the development of the front-end for a real estate website using
          Next.js, resulting in a modern and user-friendly interface for
          property listings and search functionality.
        </li>
        <li>
          Collaborated closely with the backend team to define API requirements
          and ensured seamless integration for data retrieval and management.
        </li>
        <li>
          Implemented a user-friendly admin panel using Next.js, enabling
          seamless property management, data editing, and analytics tracking for
          the internal team.
        </li>
        <li>
          Developed responsive designs and ensured cross-browser compatibility
          for a consistent appearance across various devices.
        </li>
        <li>
          Communicated effectively with the stakeholders to gather feedback and
          provide progress updates.
        </li>
      </ul>
    ),
    technicalStack: ["HTML", "CSS", "SASS", "JavaScript", "React", "Next.js"],
    image: leadvyImage,
  },
  {
    workType: "Freelance",
    title: "Namaa Charitable Development Association",
    position: "Full Stack Developer",
    description: (
      <ul>
        <li>
          Analyzed a library management system which includes multiple
          subscription and books borrowing systems and built a user-friendly
          control panel for it.
        </li>
        <li>
          Transformed the system by migrating it from an Excel-based to a
          user-friendly website, significantly boosting and facilitating the
          management of the library and minimizing errors. The new system
          greatly enhanced accessibility and ease of use for library staff and
          users, resulting in increased satisfaction and productivity.
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
    workType: "Freelance",
    title: "EasyBook",
    position: "Web Designer",
    description: (
      <ul>
        <li>
          Designed user interfaces for a large hotels and properties booking
          website.
        </li>
        <li>
          Created over 50 unique and highly intuitive user interfaces with a
          total of more than 80 interfaces taking into account the best user
          experience possible.
        </li>
        <li>
          Built over +150 reusable components, resulting in streamlined design
          and development processes. This approach enabled faster turnaround
          times and consistent design elements across the project.
        </li>
        <li>
          Achieved 100% client satisfaction by working closely with clients to
          understand their design needs and preferences, and providing regular
          updates and iterations throughout the design process.
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
    workType: "Personal Project",
    title: "Battleship",
    position: "Front End Developer",
    description: (
      <ul>
        <li>Created a multiplayer war-themed board game</li>
        <li>
          Designed visually appealing user interfaces using Adobe XD and
          transformed them into actual interfaces using HTML, CSS, and
          JavaScript.
        </li>
        <li>Developed a smart and challenging PC player to play against.</li>
        <li>
          Optimized the speed and performance of the game&apos;s website using
          advanced algorithmic approaches such as Dynamic Programming.
        </li>
        <li>
          Wrote +50 tests using testing frameworks such as Jest to ensure the
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
    workType: "Personal Project",
    title: "Memory Card",
    position: "Front End Developer",
    description: (
      <ul>
        <li>
          Developed a challenging and fun game that tests the memory using
          React, employing modern web development practices such as
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
          Utilized CSS animations and transitions to enhance the visual appeal
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
    workType: "Personal Project",
    title: "Sihati",
    position: "Full Stack Developer",
    description: (
      <ul>
        <li>Designed and built a medical blog and consultation website.</li>
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
    workType: "Personal Project",
    title: "FlyFood",
    position: "UI Designer",
    description: (
      <ul>
        <li>
          Crafted visually appealing and intuitive user interfaces for three
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
    workType: "University Homework",
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
          I have a bachelor’s degree in Informatics Engineering, a five years
          computer science programe.
        </li>
        <li>I graduated at the top of my class with a GPA of 87%.</li>
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
          third place.
        </li>
      </ul>
    ),
    image: otherExperienceImage,
  },
];
