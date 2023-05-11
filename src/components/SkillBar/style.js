import styled from "styled-components";

export const LevelContainer = styled.div`
  margin-bottom: 20px;
`;

export const ContainerSkill = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const SkillName = styled.span`
  font-weight: bold;
`;

export const Score = styled.span`
  font-size: 14px;
  color: #777777;
`;

export const LevelBar = styled.div`
  background-color: #e9ecef;
  height: 6px;
  border-radius: 10px;
`;

export const LevelBarScore = styled.div`
  background-color: #007bff;
  height: 100%;
  border-radius: 10px;
  width: ${(props) => props.width};
  transition: width 1.5s ease-in-out; /* adicionado para animação */
  width: ${(props) => (props.animationWidth ? props.animationWidth : props.width)}; /* adicionado para animação */
`;
