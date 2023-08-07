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
    padding: 60px 100px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    padding: 50px 30px;
  }
`;
export const HeroContainer = styled(Container)`
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
  font: ${theme.typography.display.md.bold};
  @media (max-width: ${breakpoints.desktop}) {
    font: ${theme.typography.display.sm.bold};
  }
  @media (max-width: ${breakpoints.mobile}) {
    font: ${theme.typography.display.xs.bold};
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

export default function Hero() {
  return (
    <StyledHero>
      <HeroContainer>
        <Speciality>Full-Stack Web Developer, Web Designer</Speciality>
        <Name>Moahmad Termanini</Name>
        <Address>
          <HiLocationMarker />
          Located in Dubai, UAE
        </Address>
      </HeroContainer>
    </StyledHero>
  );
}
