"use client";
import { breakpoints } from "@/data/breakpoints";
import { theme } from "@/data/theme";
import { Container } from "@/styles/GlobalStyles";
import React from "react";
import { styled } from "styled-components";

const StyledSectionTitle = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 32px 60px;
  @media (max-width: ${breakpoints.desktop}) {
    padding: 25px 50px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px 30px;
  }
`;

const SectionTitleContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SmallLine = styled.hr`
  width: 30px;
  margin: 0;
`;

const Title = styled.h2`
  line-height: normal !important;
  font: ${theme.typography.display.lg.bold};
  @media (max-width: ${breakpoints.desktop}) {
    font: ${theme.typography.display.md.bold};
  }
  @media (max-width: ${breakpoints.tablet}) {
    font: ${theme.typography.display.sm.bold};
  }
  @media (max-width: ${breakpoints.mobile}) {
    font: ${theme.typography.display.xs.bold};
  }
`;

export default function SectionTitle({
  backgroundColor = "transparent",
  children,
}) {
  return (
    <StyledSectionTitle backgroundColor={backgroundColor}>
      <SectionTitleContainer>
        <SmallLine />
        <Title>{children}</Title>
      </SectionTitleContainer>
    </StyledSectionTitle>
  );
}
