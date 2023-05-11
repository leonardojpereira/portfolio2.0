import {
  LevelContainer,
  ContainerSkill,
  Score,
  SkillName,
  LevelBar,
  LevelBarScore,
} from "./style";

export default function SkillBar({ skill, animationWidth }) {
  const { name, score } = skill;

  return (
    <LevelContainer key={name}>
      <ContainerSkill>
        <SkillName>{name}</SkillName>
        <Score>{score}</Score>
      </ContainerSkill>
      <LevelBar>
        <LevelBarScore width={skill.score} animationWidth={animationWidth} />
      </LevelBar>
    </LevelContainer>
  );
}
