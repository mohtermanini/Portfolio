import { breakpoints } from "@/data/breakpoints";
import { theme } from "@/data/theme";
import React from "react";
import { styled } from "styled-components";

const StyledSecondaryButton = styled.button`
  background: linear-gradient(
    rgba(5, 154, 83, 0.7) 0%,
    rgba(1, 60, 32, 0.7) 100%
  );
  color: ${theme.palette.white};
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  padding: 12px 20px;
  font: ${theme.typography.label.xl.regular};
  @media (max-width: ${breakpoints.laptop}) {
    font: ${theme.typography.label.lg.regular};
    padding: 12px 16px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding: 10px 16px;
  }
  &:hover {
    background: linear-gradient(
      rgba(1, 60, 32, 0.7) 0%,
      rgba(5, 154, 83, 0.7) 100%
    );
  }
`;

export default function SecondaryButton({ onClick, children }) {
  return (
    <StyledSecondaryButton onClick={onClick}>{children}</StyledSecondaryButton>
  );
}
