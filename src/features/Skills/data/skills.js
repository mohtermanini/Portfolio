import frontendIcon from "../assets/images/front-end.svg";
import backendIcon from "../assets/images/back-end.svg";
import designIcon from "../assets/images/design.svg";
import othersIcon from "../assets/images/others.svg";

import htmlIcon from "../assets/images/html.svg";
import cssIcon from "../assets/images/css.svg";
import sassIcon from "../assets/images/sass.svg";
import bootstrapIcon from "../assets/images/bootstrap.svg";
import javascriptIcon from "../assets/images/javascript.svg";
import jqueryIcon from "../assets/images/jquery.svg";
import reactIcon from "../assets/images/react.svg";
import nextjsIcon from "../assets/images/nextjs.svg";

import phpIcon from "../assets/images/php.svg";
import laravelIcon from "../assets/images/laravel.svg";
import sqlIcon from "../assets/images/sql.svg";

import systemDesignIcon from "../assets/images/system-design.svg";
import adobeXDIcon from "../assets/images/adobe-xd.svg";
import figmaIcon from "../assets/images/figma.svg";

import gitIcon from "../assets/images/git.svg";
import problemSolvingIcon from "../assets/images/problem-solving.svg";
import javaIcon from "../assets/images/java.svg";

export const skillsCategories = [
  {
    name: "Front-end",
    icon: frontendIcon.src,
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "SASS",
      "JavaScript",
      "jQuery",
      "React",
      "Next.js",
    ],
  },
  {
    name: "Back-end",
    icon: backendIcon.src,
    skills: ["PHP", "Laravel", "SQL", "System Design"],
  },
  {
    name: "Design",
    icon: designIcon.src,
    skills: ["Adobe XD", "Figma"],
  },
  {
    name: "Others",
    icon: othersIcon.src,
    skills: ["Git", "Problem Solving", "Java"],
  },
];

export const skillsIcons = {
  HTML: htmlIcon.src,
  CSS: cssIcon.src,
  Bootstrap: bootstrapIcon.src,
  SASS: sassIcon.src,
  JavaScript: javascriptIcon.src,
  jQuery: jqueryIcon.src,
  React: reactIcon.src,
  "Next.js": nextjsIcon.src,
  PHP: phpIcon.src,
  Laravel: laravelIcon.src,
  SQL: sqlIcon.src,
  "System Design": systemDesignIcon.src,
  "Adobe XD": adobeXDIcon.src,
  Figma: figmaIcon.src,
  Git: gitIcon.src,
  "Problem Solving": problemSolvingIcon.src,
  Java: javaIcon.src,
  "Database Design": sqlIcon,
};
