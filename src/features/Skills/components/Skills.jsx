"use client";
import BackgroundFill from "@/components/BackgroundFill/BackgroundFill";
import SectionTitle from "@/components/Title/SectionTitle";
import React from "react";
import { skillsCategories } from "../data/skills";
import SkillsCard from "./SkillsCard";
import { styled } from "styled-components";
import { Container } from "@/styles/GlobalStyles";
import { breakpoints } from "@/data/breakpoints";

const SkillsBody = styled.div`
  display: flex;
  padding: 40px 100px;
  background-color: rgba(105, 21, 158, 0.7);
  @media (max-width: ${breakpoints.laptop}) {
    padding: 40px 70px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    padding: 40px 40px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding: 40px 20px;
  }
`;

const SkillsBodyContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 50px;
  column-gap: 50px;
  width: 100%;
  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: 1fr;
    row-gap: 30px;
    width: auto;
  }
  
`;

export default function Skills() {
  return (
    <>
      <SectionTitle backgroundColor="rgba(90, 26, 128, 0.7)">
        Skills
      </SectionTitle>
      <SkillsBody>
        <SkillsBodyContainer>
          {skillsCategories.map((category) => (
            <SkillsCard
              key={category.name}
              name={category.name}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </SkillsBodyContainer>
      </SkillsBody>
    </>
  );
}
