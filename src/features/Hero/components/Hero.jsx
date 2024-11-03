"use client";
import { theme } from "@/data/theme";
import React from "react";
import { styled } from "styled-components";
import { HiLocationMarker } from "react-icons/hi";
import { Container } from "@/styles/GlobalStyles";
import { breakpoints } from "@/data/breakpoints";

export const StyledHero = styled.section`
  padding: 100px 100px;
  @media (max-width: ${breakpoints.desktop}) {
    padding: 60px 60px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    padding: 50px 30px;
  }
`;
export const HeroContainer = styled(Container)`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (max-width: ${breakpoints.desktop}) {
    gap: 10px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    align-items: center;
    text-align: center;
    gap: 8px;
  }
`;
export const Speciality = styled.p`
  font: ${theme.typography.headline.lg.regular};
  @media (max-width: ${breakpoints.desktop}) {
    font: ${theme.typography.headline.md.regular};
  }
  @media (max-width: ${breakpoints.mobile}) {
    font: ${theme.typography.headline.sm.regular};
  }
`;
export const Name = styled.p`
  font: ${theme.typography.display.lg.bold};
  @media (max-width: ${breakpoints.desktop}) {
    font: ${theme.typography.display.lg.bold};
  }
  @media (max-width: ${breakpoints.tablet}) {
    font: ${theme.typography.display.md.bold};
  }
  @media (max-width: ${breakpoints.mobile}) {
    font: ${theme.typography.display.sm.bold};
  }
`;
export const Address = styled.p`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.gaps.leftIconText};
  font: ${theme.typography.headline.md.regular};
  @media (max-width: ${breakpoints.desktop}) {
    font: ${theme.typography.headline.sm.regular};
  }
  @media (max-width: ${breakpoints.mobile}) {
    font: ${theme.typography.headline.xs.regular};
  }
`;

const Description = styled.p`
  font: ${theme.typography.body.lg.regular};
  @media (max-width: ${breakpoints.desktop}) {
    font: ${theme.typography.body.md.regular};
  }
  @media (max-width: ${breakpoints.mobile}) {
    font: ${theme.typography.body.sm.regular};
  }
`;

export default function Hero() {
  return (
    <StyledHero>
      <HeroContainer>
        <Speciality>Full-Stack Web Developer, Web Designer</Speciality>
        <Name>Mohamad Termanini</Name>
        <Address>
          <HiLocationMarker />
          Located in Dubai, UAE
        </Address>
        <hr className="hr" />
        <Description>
          <p>
            <b>Seasoned Full Stack Web Developer</b> with over <b>4 years</b> of hands-on experience in building scalable web solutions across
            multiple industries. Currently part of <b>Samsung</b> with the <b>Cheil Middle East &amp; Africa</b> team, I specialize in both frontend
            and backend development, leveraging <b>cutting-edge technologies</b> such as <b>React/Next.js</b>, <b>PHP/Laravel</b>, and{" "}
            <b>C#/ASP.NET Core</b>. Adept at transforming business requirements into high-performance applications, I’ve played key roles in complex
            projects, delivering optimized solutions across multiple countries. Recognized for innovative problem-solving skills and the ability to
            work independently and as part of a team, with a solid understanding of software architecture.
          </p>
        </Description>
      </HeroContainer>
    </StyledHero>
  );
}
