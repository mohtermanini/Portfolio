import TernaryButton from "@/components/Buttons/TernaryButton";
import SectionSeparator from "@/components/Separators/SectionSeparator";
import { breakpoints } from "@/data/breakpoints";
import { theme } from "@/data/theme";
import SkillLabel from "@/features/Skills/components/SkillLabel";
import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { styled } from "styled-components";

const StyledProjectDescription = styled.div`
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  margin-bottom: 12px;
  font: ${theme.typography.title.lg.bold};
  @media (max-width: ${breakpoints.laptop}) {
    font: ${theme.typography.title.md.bold};
  }
`;

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Section = styled.div``;

const SectionTitle = styled.h3`
  margin-bottom: 12px;
  font: ${theme.typography.title.md.bold};
  @media (max-width: ${breakpoints.laptop}) {
    font: ${theme.typography.title.sm.bold};
  }
`;

const SectionContent = styled.div`
  ul {
    list-style: disc;
    display: flex;
    flex-direction: column;
    gap: 8px;
    li {
      display: flex;
      &::marker {
        content: "";
      }
      &::before {
        content: "⏺";
        margin-right: 8px;
      }
    }
  }
  p + ul {
    margin-top: 6px;
  }
  p,
  li {
    font: ${theme.typography.body.sm.regular};
    @media (max-width: ${breakpoints.laptop}) {
      font: ${theme.typography.body.xs.regular};
    }
  }
`;

const SkillsSection = styled.div``;
const SkillsList = styled.ul`
  gap: 20px 25px;
  display: flex;
  flex-wrap: wrap;
`;

const SeparatorContainer = styled.div`
  margin: 10px 0;
`;

const SiteLinkContainer = styled.div`
  align-self: flex-end;
`;
const VisitSiteButton = styled(TernaryButton)``;

export default function ProjectDescription({ title, sections, skills, link }) {
  return (
    <StyledProjectDescription>
      <Title>{title}</Title>
      <Sections>
        {sections.map((section) => (
          <Section key={section.title}>
            {section.title && <SectionTitle>{section.title}</SectionTitle>}
            <SectionContent>{section.content}</SectionContent>
          </Section>
        ))}
        {skills && skills.length > 0 && (
          <SkillsSection>
            <SectionTitle>Skills</SectionTitle>
            <SkillsList>
              {skills.map((skill) => (
                <SkillLabel key={skill} skill={skill} />
              ))}
            </SkillsList>
          </SkillsSection>
        )}
        <SeparatorContainer>
          <SectionSeparator />
        </SeparatorContainer>
        <SiteLinkContainer>
          <a target="_blank" rel="noreferrer" href={link}>
            <VisitSiteButton>
              Visit Site <HiOutlineExternalLink />
            </VisitSiteButton>
          </a>
        </SiteLinkContainer>
      </Sections>
    </StyledProjectDescription>
  );
}
