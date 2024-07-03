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
  background-color: rgba(255,255,255, 0.15);
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
  font: ${theme.typography.display.xl.bold};
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
    font: ${theme.typography.body.md.regular};
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
          Graduated at <b>top</b> of my class with excellence, currently employed at Cheil MEA, part of the prestigious <b>Samsung Group</b>. Participated and ranked in the <b>top 3</b> in collegiate programming contests, having solved  <b>+1000</b> programming problems <a href="https://www.stopstalk.com/user/profile/Mohamad_Termanini" target="_blank"><u>(Stopstalk)</u></a>. With <b>+3.5</b> years of experience as a <b>Full Stack Web
            Developer</b>, I’ve contributed to projects spanning multiple countries, playing pivotal roles as a key member or
          team leader. Proficient in trending frontend frameworks such as <b>React/Next.js</b> with <b>TypeScript</b> and proficient in backend
          development using <b>PHP</b> and <b>Laravel</b>, I have a track record of delivering efficient and high-quality solutions.
        </Description>
      </HeroContainer>
    </StyledHero>
  );
}
