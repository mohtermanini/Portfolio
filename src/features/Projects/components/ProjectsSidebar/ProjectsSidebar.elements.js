import { breakpoints } from "@/data/breakpoints";
import { theme } from "@/data/theme";
import { css, styled } from "styled-components";

export const StyledProjectsSidebar = styled.div`
  background-color: rgba(75, 75, 187, 0.7);
`;

export const DesktopMenu = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 270px;
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: row;
    button {
      width: 0px;
      flex-grow: 1;
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const CategoryButton = styled(({ active, ...props }) => <button {...props} />)`
  padding: 20px 30px;
  border-bottom: 1px solid rgb(255, 255, 255);
  border-radius: 0;
  position: relative;
  transition: background-color 0.25s ease 0s;
  @media (max-width: ${breakpoints.laptop}) {
    padding: 15px 30px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    &:not(:last-child) {
      border-right: 1px solid rgb(255, 255, 255);
    }
  }
  ${({ active }) => {
    if (active) {
      return css`
        background-color: rgba(34, 35, 77, 0.7);
        h3 {
          font-weight: bold;
        }
        @media (min-width: calc(${breakpoints.tablet} + 0.02px)) {
          &::after {
            content: "";
            position: absolute;
            width: 0px;
            height: 0px;
            border-style: solid;
            border-width: 10px 25px 10px 0px;
            border-color: transparent rgb(62, 62, 127) transparent transparent;
            top: 50%;
            right: 0px;
            transform: translateY(-50%);
          }
        }
      `;
    }
    return css`
      &:hover {
        background-color: rgba(75, 75, 187, 0.4);
      }
    `;
  }}
`;

export const CategoryTitle = styled.h3`
  color: ${theme.palette.white};
  font: ${theme.typography.title.md.regular};
  @media (max-width: ${breakpoints.desktop}) {
    font: ${theme.typography.title.md.regular};
  }
  @media (max-width: ${breakpoints.tablet}) {
    font: ${theme.typography.title.sm.regular};
  }
  @media (max-width: ${breakpoints.mobile}) {
    font: ${theme.typography.title.xs.regular};
  }
`;

export const MobileMenu = styled.div`
  display: none;
  position: relative;
  background-color: rgba(34, 35, 77, 0.7);
  @media (max-width: ${breakpoints.mobile}) {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
  }
`;

export const HamburgerButton = styled.button`
  padding: 15px 30px;
  color: ${theme.palette.white};
  font-size: 20px;
  justify-self: right;
  &:hover {
    background-color: rgba(34, 35, 77, 0.7);
  }
`;

export const MobileCategoryTitle = styled(CategoryTitle)`
  grid-column-start: 2;
  padding: 15px 30px;
`;

export const MobileCategoryButton = styled(CategoryButton)`
  border: none;
  background-color: rgba(68, 70, 131, 0.7);
  border-top: 1px solid rgb(255, 255, 255);
`;

export const MobileCategoriesList = styled.ul`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: max-height 0.5s ease-out;
  max-height: ${({ listHeight }) => `${listHeight}px`};
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1;
  background-color: rgba(34, 35, 77, 0.7);
`;
