"use client";
import React from "react";
import Image from "next/image";
import { styled } from "styled-components";
import { theme } from "@/data/theme";
import { breakpoints } from "@/data/breakpoints";
import { Container } from "@/styles/GlobalStyles";
import githubIcon from "../../../../public/assets/images/footer/github.svg";
import emailIcon from "../../../../public/assets/images/footer/email.svg";
import linkedinIcon from "../../../../public/assets/images/footer/linkedin.svg";
import phoneIcon from "../../../../public/assets/images/footer/phone.svg";

const StyledFooter = styled.div`
  padding: 25px 70px 25px 50px;
  @media (max-width: ${breakpoints.desktop}) {
    padding: 25px 70px 25px 50px;
  }
  @media (max-width: ${breakpoints.laptop}) {
    padding: 25px 40px 25px 50px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    padding: 25px 50px;
  }
`;

const FooterContainer = styled(Container)`
  display: flex;
  align-items: center;
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
`;

const Title = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: ${breakpoints.mobile}) {
    gap: 5px;
  }
`;

const TitleAsideText = styled.p`
  font: ${theme.typography.body.md.regular};
  @media (max-width: ${breakpoints.laptop}) {
    font: ${theme.typography.body.sm.regular};
  }
  @media (max-width: ${breakpoints.mobile}) {
    font: ${theme.typography.body.xs.regular};
  }
`;

const Name = styled.p`
  font: ${theme.typography.headline.md.bold};
  @media (max-width: ${breakpoints.laptop}) {
    font: ${theme.typography.headline.sm.bold};
  }
  @media (max-width: ${breakpoints.mobile}) {
    font: ${theme.typography.headline.xs.bold};
  }
`;

const Info = styled.div`
  display: flex;
  gap: 50px;
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 12px;
  }
`;
const InfoList = styled.div``;

const InfoTitle = styled.h3`
  margin-bottom: 8px;
  font: ${theme.typography.headline.md.bold};
  @media (max-width: ${breakpoints.laptop}) {
    font: ${theme.typography.headline.sm.bold};
  }
  @media (max-width: ${breakpoints.mobile}) {
    font: ${theme.typography.headline.xs.bold};
  }
`;

const InfoListItems = styled.ul`
  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 20px;
  }
`;

const InfoListItemButton = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  font: ${theme.typography.body.md.regular};
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  @media (max-width: ${breakpoints.desktop}) {
    font: ${theme.typography.body.sm.regular};
  }
  @media (max-width: ${breakpoints.laptop}) {
    font: ${theme.typography.body.xs.regular};
  }
`;

const InfoListItem = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  font: ${theme.typography.body.md.regular};
  @media (max-width: ${breakpoints.desktop}) {
    font: ${theme.typography.body.sm.regular};
  }
  @media (max-width: ${breakpoints.laptop}) {
    font: ${theme.typography.body.xs.regular};
  }
`;

const Icon = styled(Image)``;

const InfoText = styled.span``;

export default function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <Title>
          <TitleAsideText>Portfolio of</TitleAsideText>
          <Name>Mohamad Termanini</Name>
        </Title>
        <Info>
          <InfoList>
            <InfoTitle>Social Accounts</InfoTitle>
            <InfoListItems>
              <InfoListItemButton
                href="https://github.com/mohtermanini"
                target="_blank"
                rel="noreferrer"
              >
                <Icon src={githubIcon} alt="" width={25} height={25} />
                <InfoText>Github</InfoText>
              </InfoListItemButton>
              <InfoListItemButton
                href="https://www.linkedin.com/in/mohamad-termanini-100252247"
                target="_blank"
                rel="noreferrer"
              >
                <Icon src={linkedinIcon} alt="" width={25} height={25} />
                <InfoText>LinkedIn</InfoText>
              </InfoListItemButton>
            </InfoListItems>
          </InfoList>

          <InfoList>
            <InfoTitle>Contact me</InfoTitle>
            <InfoListItems>
              <InfoListItem>
                <Icon src={phoneIcon} alt="" width={25} height={25} />
                <InfoText>+971 545982007</InfoText>
              </InfoListItem>
              <InfoListItem>
                <Icon src={emailIcon} alt="" width={25} height={25} />
                <InfoText><a href="mailto:mohtermanini.job@gmail.com">mohtermanini.job@gmail.com</a></InfoText>
              </InfoListItem>
            </InfoListItems>
          </InfoList>
        </Info>
      </FooterContainer>
    </StyledFooter>
  );
}
