import frontendIcon from "../../../../public/assets/images/skills/front-end.svg";
import backendIcon from "../../../../public/assets/images/skills/back-end.svg";
import designIcon from "../../../../public/assets/images/skills/design.svg";
import othersIcon from "../../../../public/assets/images/skills/others.svg";

import htmlIcon from "../../../../public/assets/images/skills/html.svg";
import cssIcon from "../../../../public/assets/images/skills/css.svg";
import sassIcon from "../../../../public/assets/images/skills/sass.svg";
import bootstrapIcon from "../../../../public/assets/images/skills/bootstrap.svg";
import javascriptIcon from "../../../../public/assets/images/skills/javascript.svg";
import jqueryIcon from "../../../../public/assets/images/skills/jquery.svg";
import reactIcon from "../../../../public/assets/images/skills/react.svg";
import nextjsIcon from "../../../../public/assets/images/skills/nextjs.svg";

import phpIcon from "../../../../public/assets/images/skills/php.svg";
import laravelIcon from "../../../../public/assets/images/skills/laravel.svg";
import sqlIcon from "../../../../public/assets/images/skills/sql.svg";

import systemDesignIcon from "../../../../public/assets/images/skills/system-design.svg";
import adobeXDIcon from "../../../../public/assets/images/skills/adobe-xd.svg";
import figmaIcon from "../../../../public/assets/images/skills/figma.svg";

import gitIcon from "../../../../public/assets/images/skills/git.svg";
import problemSolvingIcon from "../../../../public/assets/images/skills/problem-solving.svg";
import javaIcon from "../../../../public/assets/images/skills/java.svg";

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
  "Database Design": sqlIcon.src,
};
