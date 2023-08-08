import { breakpoints } from "@/data/breakpoints";
import { theme } from "@/data/theme";
import React from "react";
import { styled } from "styled-components";

const StyledTernaryButton = styled.button`
  background: linear-gradient(0deg, rgb(39, 39, 62) 0%, rgb(48, 63, 84) 65%);
  color: ${theme.palette.white};
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font: ${theme.typography.body.sm.regular};
  @media (max-width: ${breakpoints.laptop}) {
    font: ${theme.typography.body.xs.regular};
    padding: 6px 12px;
  }
  &:hover {
    background: linear-gradient(0deg, rgb(48, 63, 84) 0%, rgb(39, 39, 62) 65%);
  }
`;

export default function TernaryButton({ onClick, children }) {
  return (
    <StyledTernaryButton onClick={onClick}>{children}</StyledTernaryButton>
  );
}
