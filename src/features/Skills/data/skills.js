import frontendIcon from "../../../assets/images/skills/front-end.svg";
import backendIcon from "../../../assets/images/skills/back-end.svg";
import designIcon from "../../../assets/images/skills/design.svg";
import othersIcon from "../../../assets/images/skills/others.svg";

import htmlIcon from "../../../assets/images/skills/html.svg";
import cssIcon from "../../../assets/images/skills/css.svg";
import sassIcon from "../../../assets/images/skills/sass.svg";
import bootstrapIcon from "../../../assets/images/skills/bootstrap.svg";
import javascriptIcon from "../../../assets/images/skills/javascript.svg";
import jqueryIcon from "../../../assets/images/skills/jquery.svg";
import reactIcon from "../../../assets/images/skills/react.svg";
import nextjsIcon from "../../../assets/images/skills/nextjs.svg";

import phpIcon from "../../../assets/images/skills/php.svg";
import laravelIcon from "../../../assets/images/skills/laravel.svg";
import sqlIcon from "../../../assets/images/skills/sql.svg";

import systemDesignIcon from "../../../assets/images/skills/system-design.svg";
import adobeXDIcon from "../../../assets/images/skills/adobe-xd.svg";
import figmaIcon from "../../../assets/images/skills/figma.svg";

import gitIcon from "../../../assets/images/skills/git.svg";
import problemSolvingIcon from "../../../assets/images/skills/problem-solving.svg";
import javaIcon from "../../../assets/images/skills/java.svg";

export const skillsCategories = [
  {
    name: "Front-end",
    icon: frontendIcon,
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "SASS",
      "JavaScript",
      "JQuery",
      "React",
      "Next.js",
    ],
  },
  {
    name: "Back-end",
    icon: backendIcon,
    skills: ["PHP", "Laravel", "SQL", "System Design"],
  },
  {
    name: "Design",
    icon: designIcon,
    skills: ["Adobe XD", "Figma"],
  },
  {
    name: "Others",
    icon: othersIcon,
    skills: ["Git", "Problem Solving", "Java"],
  },
];

export const skillsIcons = {
  HTML: htmlIcon.src,
  CSS: cssIcon.src,
  Bootstrap: bootstrapIcon.src,
  SASS: sassIcon.src,
  JavaScript: javascriptIcon.src,
  JQuery: jqueryIcon.src,
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
  "Database Design": sqlIcon
};
