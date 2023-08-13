import React from "react";
import { useProjects } from "../contexts/ProjectsProvider";
import { categories } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { useSelectedProject } from "../hooks/useSelectedProject";
import SectionSeparator from "@/components/Separators/SectionSeparator";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { CSSTransition } from "react-transition-group";
import { useModals } from "@/contexts/ModalProvider";
import ProjectModal from "./ProjectModal/ProjectModal";
import { styled } from "styled-components";
import { breakpoints } from "@/data/breakpoints";
import { theme } from "@/data/theme";

const StyledProjectsList = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
  flex-grow: 1;
  min-height: 400px;
  padding: 25px 50px;
  background-color: rgba(86, 86, 179, 0.7);
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 48px;
  @media (max-width: 800px) {
    padding: 25px 40px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
    min-height: auto;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px 40px;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }
`;

const SelectedProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: rgba(29, 29, 61, 0.7);
  padding: 25px 50px;
`;
const Title = styled.h4`
  color: ${theme.palette.white};
  font: ${theme.typography.title.md.bold};
  @media (max-width: ${breakpoints.tablet}) {
    font: ${theme.typography.title.sm.bold};
  }
  @media (max-width: ${breakpoints.mobile}) {
    font: ${theme.typography.title.xs.bold};
  }
`;

const Description = styled.div`
  font: ${theme.typography.body.sm.regular};
  @media (max-width: ${breakpoints.mobile}) {
    font: ${theme.typography.body.xs.regular};
  }
`;

const SelectedProjectDetailsButtonContainer = styled.div`
  align-self: flex-end;
`;
const FadeContainer = styled.div`
  height: 100%;
  z-index: 99;
`;
export default function ProjectsList() {
  const { selectedCategory } = useProjects();
  const { selectedProject } = useSelectedProject();
  const { showModal, setShowModal } = useModals();
  function onClickDetailsButton() {
    setShowModal(true);
  }

  return (
    <StyledProjectsList>
      <CSSTransition
        in={showModal}
        timeout={500}
        classNames={"fade"}
        appear={true}
        unmountOnExit={true}
      >
        <FadeContainer>
          <ProjectModal />
        </FadeContainer>
      </CSSTransition>
      <List>
        {categories
          .find((category) => category.name === selectedCategory)
          .projects?.map((project) => (
            <CSSTransition
              key={project.title}
              in={project.category === selectedCategory}
              timeout={750}
              classNames={"animate-card"}
              appear={true}
              unmountOnExit={true}
            >
              <ProjectCard
                title={project.title}
                mainThumbnail={project.mainThumbnail}
              />
            </CSSTransition>
          ))}
      </List>
      <SectionSeparator />
      {selectedProject && (
        <SelectedProjectDescription>
          <Title>{selectedProject.title}</Title>
          <Description>{selectedProject.mainDescription}</Description>
          <SelectedProjectDetailsButtonContainer>
            <PrimaryButton onClick={onClickDetailsButton}>
              More Details
            </PrimaryButton>
          </SelectedProjectDetailsButtonContainer>
        </SelectedProjectDescription>
      )}
    </StyledProjectsList>
  );
}
