"use client";
import SectionTitle from "@/components/Title/SectionTitle";
import React from "react";
import { styled } from "styled-components";
import { Container } from "@/styles/GlobalStyles";
import Brief from "./Brief";
import { breakpoints } from "@/data/breakpoints";
import Education from "./Education";
import Languages from "./Languages";
import { AboutSeparator } from "./About.elements";

const AboutBody = styled.div`
  display: flex;
  padding: 30px 60px;
  background-color: rgba(106, 106, 216, 0.7);
  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px 30px;
  }
`;

const AboutBodyContainer = styled(Container)`
 
`;

export default function About() {
  return (
    <>
      <SectionTitle backgroundColor="rgba(91, 91, 165, 0.7)">
        About me
      </SectionTitle>
      <AboutBody>
        <AboutBodyContainer>
            <Brief />
            <AboutSeparator />
            <Education />
            <AboutSeparator />
            <Languages />
        </AboutBodyContainer>
      </AboutBody>
    </>
  );
}
