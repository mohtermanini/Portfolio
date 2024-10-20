"use client";
import SectionTitle from "@/components/Title/SectionTitle";
import React from "react";
import { Container } from "@/styles/GlobalStyles";
import { styled } from "styled-components";
import BackgroundFill from "@/components/BackgroundFill/BackgroundFill";
import { experiences } from "../data/experiences";
import WorkExperienceCard from "./WorkExperienceCard";

const WorkExperienceBody = styled.div`
  display: flex;
`;

const WorkExperienceBodyContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

export default function WorkExperience() {
  return (
    <>
      <SectionTitle backgroundColor="rgba(17, 61, 80, 0.7)">
        Work Experience
      </SectionTitle>
      <WorkExperienceBody>
        <BackgroundFill color="rgba(28, 96, 124, 0.7)" />
        <WorkExperienceBodyContainer>
          {experiences.map((experience, ind) => (
            <WorkExperienceCard
              key={ind}
              evenChild={(ind + 1) % 2 === 0}
              {...experience}
            />
          ))}
        </WorkExperienceBodyContainer>
        <BackgroundFill color="rgba(28, 96, 124, 0.7)" />
      </WorkExperienceBody>
    </>
  );
}
