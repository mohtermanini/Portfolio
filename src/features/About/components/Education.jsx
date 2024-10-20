import React from "react";
import { styled } from "styled-components";
import { AboutDescription, AboutLink, AboutList, AboutListItem, AboutSubTitle } from "./About.elements";
import SecondaryButton from "@/components/Buttons/SecondaryButton";

const StyledEducation = styled.div``;

const EducationItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 12px;
`;
const Date = styled.p``;
const Degree = styled.p`
  font-weight: bold;
`;
const University = styled.p``;
const ExtraInfo = styled.p``;

export default function Education() {
  return (
    <StyledEducation>
      <AboutSubTitle>Education</AboutSubTitle>
      <AboutDescription>
        <EducationItem>
          <Date>10/2015 - 11/2020</Date>
          <Degree>Bachelor&apos;s Degree in Informatics Engineering (5-year Computer Science program)</Degree>
          <University>Aleppo University</University>
          <ExtraInfo>I have Graduated at the top of my class with a GPA of 87%.</ExtraInfo>
        </EducationItem>
        <AboutLink href="https://drive.google.com/file/d/1BZFfJwNvqzjP9Brtaltkexuc5lVQBDa7/view?usp=sharing" target="_blank" rel="noreferrer">
          <SecondaryButton>Academic Transcripts</SecondaryButton>
        </AboutLink>
      </AboutDescription>
    </StyledEducation>
  );
}
