import React from "react";
import { styled } from "styled-components";
import {
  AboutDescription,
  AboutLink,
  AboutList,
  AboutListItem,
  AboutSubTitle,
} from "./About.elements";
import SecondaryButton from "@/components/Buttons/SecondaryButton";

const StyledBrief = styled.div``;

export default function Brief() {
  return (
    <StyledBrief>
      <AboutSubTitle>Brief</AboutSubTitle>
      <AboutDescription>
        <AboutList>
          <AboutListItem>
            I am a <b>Full-stack web developer</b> with <b>+3.5</b> years of experience in web
            development.
          </AboutListItem>
          <AboutListItem>
            I have a strong background in designing and developing web
            applications using Figma, React/Next.js with TypeScript and Laravel.
          </AboutListItem>
        </AboutList>
        <AboutLink
          href="https://drive.google.com/file/d/1gTxXiLMJh-FKnex2cH16WqQeUxV3vpay/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <SecondaryButton>Download CV</SecondaryButton>
        </AboutLink>
      </AboutDescription>
    </StyledBrief>
  );
}
