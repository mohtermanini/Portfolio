import React from "react";
import { useProjects } from "../contexts/ProjectsProvider";
import { breakpoints } from "@/data/breakpoints";
import { theme } from "@/data/theme";
import { css, styled } from "styled-components";
import Image from "next/image";

const StyledProjectCard = styled(({ active, ...props }) => (
  <button {...props} />
))`
  padding: 15px 15px 10px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  ${({ active }) => {
    if (active) {
      return css`
        background-color: rgba(0, 0, 0, 0.4);
        outline: rgb(255, 255, 255) solid 2px;
      `;
    }
    return css`
      &:hover {
        background-color: rgba(0, 0, 0, 0.4);
      }
    `;
  }}
`;

const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  @media (max-width: ${breakpoints.mobile}) {
    width: 125px;
    height: 125px;
  }
`;

const Thumbnail = styled(Image)`
  object-fit: cover;
  border-radius: 5px;
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

export default function ProjectCard({ title, mainThumbnail }) {
  const { selectedProjectTitle, setSelectedProjectTitle } = useProjects();
  function onClickProjectCard() {
    setSelectedProjectTitle(title);
  }
  return (
    <StyledProjectCard
      active={title === selectedProjectTitle}
      onClick={onClickProjectCard}
    >
      <ImageContainer>
        <Thumbnail src={mainThumbnail} alt="" fill/>
      </ImageContainer>
      <Title>{title}</Title>
    </StyledProjectCard>
  );
}
