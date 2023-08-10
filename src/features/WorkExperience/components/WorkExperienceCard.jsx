import { breakpoints } from "@/data/breakpoints";
import { theme } from "@/data/theme";
import SkillLabel from "@/features/Skills/components/SkillLabel";
import Image from "next/image";
import React from "react";
import { styled } from "styled-components";

const StyledWorkExperienceCard = styled(({evenChild, ...props}) => <div {...props}/>)`
  display: flex;
  flex-direction: ${({ evenChild }) => (evenChild ? "row-reverse" : "row")};
`;

const Body = styled(({ evenChild, ...props }) => <div {...props} />)`
  background-color: ${({ evenChild }) =>
    evenChild ? "rgba(16, 58, 77, 0.7)" : "rgba(28, 96, 124, 0.7)"};
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 40px 35px;
  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;

const DescriptionContainer = styled.div`
  font: ${theme.typography.body.md.regular};
  @media (max-width: ${breakpoints.desktop}) {
    font: ${theme.typography.body.sm.regular};
  }
  @media (max-width: ${breakpoints.mobile}) {
    font: ${theme.typography.body.xs.regular};
  }
`;
const Description = styled.div`
  ul {
    list-style: outside disc;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  a {
    text-decoration: underline;
    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;

const WorkType = styled.div`
  font: ${theme.typography.title.lg.bold};
  @media (max-width: ${breakpoints.desktop}) {
    font: ${theme.typography.title.md.bold};
  }
  @media (max-width: ${breakpoints.tablet}) {
    font: ${theme.typography.title.sm.bold};
  }
  @media (max-width: ${breakpoints.mobile}) {
    font: ${theme.typography.title.xs.bold};
  }
`;
const Title = styled.div`
  font: ${theme.typography.title.lg.regular};
  @media (max-width: ${breakpoints.desktop}) {
    font: ${theme.typography.title.md.regular};
  }
  @media (max-width: ${breakpoints.tablet}) {
    font: ${theme.typography.title.sm.regular};
  }
  @media (max-width: ${breakpoints.mobile}) {
    font: ${theme.typography.title.xs.regular};
  }
`;
const Position = styled.div`
  font: ${theme.typography.title.xl.bold};
  @media (max-width: ${breakpoints.desktop}) {
    font: ${theme.typography.title.lg.bold};
  }
  @media (max-width: ${breakpoints.tablet}) {
    font: ${theme.typography.title.md.bold};
  }
  @media (max-width: ${breakpoints.mobile}) {
    font: ${theme.typography.title.sm.bold};
  }
`;
const ImageContainer = styled.div`
  width: 50%;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(38, 45, 192, 0.2);
  }
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;
const SideImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const WorkLinks = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const WorkLinkContainer = styled.div``;
const WorkLinkName = styled.p`
  display: inline-block;
`;
const WorkLink = styled.a`
  text-decoration: underline;
  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;
const SkillsList = styled.ul`
  gap: 20px 25px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export default function WorkExperienceCard({
  evenChild,
  workType,
  title,
  position,
  description,
  image,
  urls,
  technicalStack,
}) {
  return (
    <StyledWorkExperienceCard evenChild={evenChild}>
      <Body evenChild={evenChild}>
        <WorkType>{workType}</WorkType>
        <Title>{title}</Title>
        <Position>{position}</Position>
        <DescriptionContainer>
          <Description>{description}</Description>
          {urls && (
            <WorkLinks>
              {urls.map((url) => (
                <WorkLinkContainer key={url.link}>
                  <WorkLinkName>{url.name}:</WorkLinkName>{" "}
                  <WorkLink
                    href={url.link}
                    target="_blank"
                    referrerPolicy="noreferrer"
                  >
                    {url.link}
                  </WorkLink>
                </WorkLinkContainer>
              ))}
            </WorkLinks>
          )}
        </DescriptionContainer>
        {technicalStack && (
          <SkillsList>
            {technicalStack.map((skill) => (
              <SkillLabel key={skill} skill={skill} size={"sm"} />
            ))}
          </SkillsList>
        )}
      </Body>
      <ImageContainer>
        <SideImage src={image} alt="" />
      </ImageContainer>
    </StyledWorkExperienceCard>
  );
}
