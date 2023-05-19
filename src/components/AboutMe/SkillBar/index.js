import {
  LevelContainer,
  ContainerSkill,
  Score,
  SkillName,
  LevelBar,
  LevelBarScore,
} from "./style";

export default function SkillBar({ skill, animationWidth }) {
  const { name, score, color } = skill;

  return (
    <LevelContainer key={name}>
      <ContainerSkill>
        <SkillName>{name}</SkillName>
        <Score>{score}</Score>
      </ContainerSkill>
      <LevelBar>
        <LevelBarScore
          backgroundColor={color}
          width={skill.score}
          animationWidth={animationWidth}
        />
      </LevelBar>
    </LevelContainer>
  );
}
