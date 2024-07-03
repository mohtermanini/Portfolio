import { breakpoints } from "@/data/breakpoints";
import { theme } from "@/data/theme";
import { styled } from "styled-components";

export const AboutSubTitle = styled.h3`
  margin-bottom: 16px;
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
    font: ${theme.typography.body.md.regular};
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
  gap: 12px;
  margin-bottom: 12px;
`;
export const AboutListItem = styled.li``;

export const AboutLink = styled.a``;

export const AboutSeparator = styled.hr`
  width: 60px;
  height: 1px;
  margin: 28px 0;
  @media (max-width: ${breakpoints.tablet}) {
    margin: 24px 0;
  }
  @media (max-width: ${breakpoints.mobile}) {
    margin: 20px 0;
  }
`;