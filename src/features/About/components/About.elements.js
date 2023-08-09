import { breakpoints } from "@/data/breakpoints";
import { theme } from "@/data/theme";
import { styled } from "styled-components";

export const AboutSubTitle = styled.h3`
  margin-bottom: 10px;
  font: ${theme.typography.title.lg.bold};
  @media (max-width: ${breakpoints.laptop}) {
    font: ${theme.typography.title.md.bold};
  }
  @media (max-width: ${breakpoints.mobile}) {
    font: ${theme.typography.title.sm.bold};
  }
`;

export const AboutDescription = styled.div`
  font: ${theme.typography.body.md.regular};
  @media (max-width: ${breakpoints.laptop}) {
    font: ${theme.typography.body.sm.regular};
  }
  @media (max-width: ${breakpoints.mobile}) {
    font: ${theme.typography.body.xs.regular};
  }
`;

export const AboutList = styled.ul`
  list-style: outside disc;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
`;
export const AboutListItem = styled.li``;

export const AboutLink = styled.a``;
