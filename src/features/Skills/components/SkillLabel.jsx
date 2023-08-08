import React from "react";
import { css, styled } from "styled-components";
import { skillsIcons } from "../data/skills";
import Image from "next/image";
import { theme } from "@/data/theme";
import { breakpoints } from "@/data/breakpoints";

const StyledSkillLabel = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 8px;
  background: linear-gradient(
    rgba(255, 255, 255, 0.7) 0%,
    rgba(158, 4, 249, 0) 100%
  );
  border-radius: 10px;
  ${({ size }) => {
    if (size === "sm") {
      return css`
        padding: 6px 8px;
        @media (max-width: ${breakpoints.mobile}) {
          padding: 4px 6px;
        }
      `;
    }
    if (size === "md") {
      return css`
        padding: 8px 12px;
        @media (max-width: ${breakpoints.mobile}) {
          padding: 6px 12px;
        }
      `;
    }
  }}
`;

const Title = styled.p`
  font: ${theme.typography.label.lg.regular};
  @media (max-width: ${breakpoints.laptop}) {
    font: ${theme.typography.label.md.regular};
  }
`;

export default function SkillLabel({ skill, size = "md" }) {
  return (
    <StyledSkillLabel size={size}>
      <Image src={skillsIcons[skill]} alt="" width={25} height={25} />
      <Title>{skill}</Title>
    </StyledSkillLabel>
  );
}
