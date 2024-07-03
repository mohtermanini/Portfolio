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
import reduxIcon from "../../../../public/assets/images/skills/redux.svg";
import rtkQuery from "../../../../public/assets/images/skills/redux.svg";
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
import typscriptIcon from "../../../../public/assets/images/skills/typescript.svg";

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
      "TypeScript",
      "jQuery",
      "React",
      "Redux",
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
  HTML: htmlIcon,
  CSS: cssIcon,
  Bootstrap: bootstrapIcon,
  SASS: sassIcon,
  JavaScript: javascriptIcon,
  TypeScript: typscriptIcon,
  jQuery: jqueryIcon,
  React: reactIcon,
  Redux: reduxIcon,
  "RTK Query": reduxIcon,
  "Next.js": nextjsIcon,
  PHP: phpIcon,
  Laravel: laravelIcon,
  SQL: sqlIcon,
  "System Design": systemDesignIcon,
  "Adobe XD": adobeXDIcon,
  Figma: figmaIcon,
  Git: gitIcon,
  "Problem Solving": problemSolvingIcon,
  Java: javaIcon,
  "Database Design": sqlIcon,
};
