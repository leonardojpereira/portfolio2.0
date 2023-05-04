import {
  AboutMeSection,
  Title,
  AfterContainer,
  After,
  Circle,
  SecondAfter,
  Container,
  Row,
  AboutMeTextContainer,
  TitleAboutMe,
  Text,
  CvLink,
  SkillsContainer,
  TitleLevel,
  Grid,
} from "./style";
import SkillBar from "../SkillBar";

export const skills = [
  { name: "HTML5", score: "90%" },
  { name: "CSS3", score: "80%" },
  { name: "JavaScript", score: "75%" },
  { name: "NodeJS", score: "50%" },
  { name: "ReactJS", score: "75%" },
  { name: "NextJS", score: "60%" },
  { name: "Styled-Components", score: "70%" },
  { name: "SASS", score: "60%" },
  { name: "REST API", score: "75%" },
  { name: "Git", score: "80%" },
];

export default function AboutMe() {
  return (
    <AboutMeSection>
      <header>
        <Title>Sobre mim</Title>
        <AfterContainer>
          <After />
          <Circle />
          <SecondAfter />
        </AfterContainer>
      </header>
      <Container>
        <Row>
          <AboutMeTextContainer>
            <TitleAboutMe>Quem sou eu?</TitleAboutMe>
            <Text>
              Olá! Eu sou um estudante de Análise e Desenvolvimento de Sistemas
              no 3º semestre, com uma paixão por criar belas e funcionais
              interfaces para a web. Tenho 20 anos e moro em Santos, e estou
              procurando uma oportunidade para aplicar minhas habilidades como
              Desenvolvedor Front-End em projetos desafiadores. Estou
              constantemente aprendendo e buscando melhorar, e estou ansioso
              para contribuir com a sua equipe.
            </Text>
            <Text>
              Caso queira saber um pouco mais sobre mim, confira o meu currículo
              logo abaixo.
            </Text>
            <CvLink href="#">Meu Currículo</CvLink>
          </AboutMeTextContainer>
          <SkillsContainer>
            <TitleLevel>Meus conhecimentos</TitleLevel>
            <Grid>
              {skills.map((skill) => (
                <SkillBar skill={skill} />
              ))}
            </Grid>
          </SkillsContainer>
        </Row>
      </Container>
    </AboutMeSection>
  );
}
