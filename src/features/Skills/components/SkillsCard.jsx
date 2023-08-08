import Image from "next/image";
import React from "react";
import { styled } from "styled-components";
import SkillLabel from "./SkillLabel";
import { theme } from "@/data/theme";
import { breakpoints } from "@/data/breakpoints";

const StyledSkillsCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(42, 10, 62, 0.7);
  border-radius: 10px;
  padding: 25px 20px;
  gap: 25px;
  max-width: 700px;
`;

const Header = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 15px;
`;
const Icon = styled(Image)`
`;

const Title = styled.h3`
  font: ${theme.typography.title.lg.bold};
  @media (max-width: ${breakpoints.laptop}) {
    font: ${theme.typography.title.md.bold};
  }
  @media (max-width: ${breakpoints.mobile}) {
    font: ${theme.typography.title.sm.bold};
  }
`;

const SkillsList = styled.ul`
  display: flex;
  gap: 20px 25px;
  flex-wrap: wrap;
  margin-left: 55px;
`;


export default function SkillsCard({ name, icon, skills }) {
  return (
    <StyledSkillsCard>
      <Header>
        <Icon src={icon} alt="" width={35} height={35} />
        <Title>{name}</Title>
      </Header>
      {skills && skills.length > 0 && (
          <SkillsList>
            {skills.map((skill) => (
              <SkillLabel key={skill} skill={skill} />
            ))}
          </SkillsList>
      )}
    </StyledSkillsCard>
  );
}
