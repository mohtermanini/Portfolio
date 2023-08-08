"use client";
import SectionTitle from "@/components/Title/SectionTitle";
import React from "react";
import ProjectsSidebar from "./ProjectsSidebar/ProjectsSidebar";
import { Container } from "@/styles/GlobalStyles";
import ProjectsList from "./ProjectsList";
import { styled } from "styled-components";
import ProjectsProvider from "../contexts/ProjectsProvider";
import { breakpoints } from "@/data/breakpoints";
import BackgroundFill from "@/components/BackgroundFill/BackgroundFill";

const ProjectsBody = styled.div`
  display: flex;
`;

const ProjectsBodyContainer = styled(Container)`
  display: flex;
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export default function Projects() {
  return (
    <>
      <SectionTitle backgroundColor="rgba(32, 32, 95, 0.7)">
        Projects
      </SectionTitle>
      <ProjectsBody>
        <BackgroundFill color="rgba(86, 86, 179, 0.7)" />
        <ProjectsBodyContainer>
          <ProjectsProvider>
            <ProjectsSidebar />
            <ProjectsList />
          </ProjectsProvider>
        </ProjectsBodyContainer>
        <BackgroundFill color="rgba(86, 86, 179, 0.7)" />
      </ProjectsBody>
    </>
  );
}
