"use client";
import { breakpoints } from "@/data/breakpoints";
import { theme } from "@/data/theme";
import React from "react";
import { styled } from "styled-components";

const StyledSectionSeparator = styled.hr`
  background-color: ${theme.palette.white};
  height: 4px;
  @media (max-width: ${breakpoints.desktop}) {
    height: 3px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    height: 2px;
  }
`;

export default function SectionSeparator() {
  return <StyledSectionSeparator />;
}
