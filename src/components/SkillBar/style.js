import styled from "styled-components";

export const LevelContainer = styled.div`
  width: 100%;
`;

export const ContainerSkill = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Score = styled.span``;

export const SkillName = styled.span``;

export const LevelBar = styled.div`
  background-color: rgb(174 174 174);
  max-width: 600px;
  width: 100%;
  height: 8px;
  margin-top: 4px;
  border-radius: 5px;
  position: relative;
`;

export const LevelBarScore = styled.div`
  width: ${(props) => props.width};
  height: 8px;
  border-radius: 5px;
  background-color: #0083ff;
`;
