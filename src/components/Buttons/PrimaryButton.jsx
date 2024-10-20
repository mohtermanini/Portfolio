import { breakpoints } from "@/data/breakpoints";
import { theme } from "@/data/theme";
import React from "react";
import { styled } from "styled-components";

const StyledPrimaryButton = styled.button`
  background: linear-gradient(0deg, rgb(86, 86, 179) 0%, rgb(39, 39, 62) 100%);
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
      0deg,
      rgb(39, 39, 62) 0%,
      rgb(86, 86, 179) 100%
    );
  }
`;

export default function PrimaryButton({ onClick, children }) {
  return (
    <StyledPrimaryButton onClick={onClick}>{children}</StyledPrimaryButton>
  );
}
