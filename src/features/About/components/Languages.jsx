import React from "react";
import Image from "next/image";
import { styled } from "styled-components";
import { theme } from "@/data/theme";
import { breakpoints } from "@/data/breakpoints";
import { AboutSubTitle } from "./About.elements";
import arabicFlag from "../../../../public/assets/images/about/arabic-flag.svg";
import englishFlag from "../../../../public/assets/images/about/english-flag.svg";

const StyledLanguages = styled.div``;
const LanguagesLabels = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 48px;
  row-gap: 12px;
  margin-left: 20px;
  margin-top: 16px;
`;
const LanguageLabel = styled.div`
  padding: 0px 20px 0px 0px;
  background-color: rgba(40, 40, 67, 0.7);
  border-radius: 0px 10px 10px 0px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 15px;
`;
const Flag = styled(Image)`
  margin-left: -20px;
`;
const Language = styled.p`
  font: ${theme.typography.label.xl.bold};
  @media (max-width: ${breakpoints.laptop}) {
    font: ${theme.typography.label.lg.bold};
  }
  @media (max-width: ${breakpoints.mobile}) {
    font: ${theme.typography.label.md.bold};
  }
`;

export default function Languages() {
  return (
    <StyledLanguages>
      <AboutSubTitle>Languages profeciency</AboutSubTitle>
      <LanguagesLabels>
        <LanguageLabel>
          <Flag src={englishFlag} alt="" width={40} height={40} />
          <Language>English</Language>
        </LanguageLabel>
        <LanguageLabel>
          <Flag src={arabicFlag} alt="" width={40} height={40} />
          <Language>Arabic</Language>
        </LanguageLabel>
      </LanguagesLabels>
    </StyledLanguages>
  );
}
