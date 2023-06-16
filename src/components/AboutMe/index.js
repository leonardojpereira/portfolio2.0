import { CSSTransition } from "react-transition-group";
import { RiFolderUserFill } from "react-icons/ri";
import { MdBuild } from "react-icons/md";
import { useAnimation } from "../../hooks";

import {
  AboutMeSection,
  Container,
  Row,
  AboutMeTextContainer,
  TitleAboutMe,
  Text,
  ButtonContainer,
  SkillsContainer,
  TitleLevel,
  Grid,
} from "./style";
import SkillBar from "./SkillBar";
import Title from "../Title";
import { ButtonLink } from "../Button/style";

export const skills = [
  { name: "HTML5", score: "90%", color: "#ff6347" },
  { name: "CSS", score: "80%", color: "#264de4" },
  { name: "JavaScript", score: "75%", color: "#F0DB4F" },
  { name: "NodeJS", score: "50%", color: "#3c873a" },
  { name: "ReactJS", score: "75%", color: "#61dafb" },
  { name: "NextJS", score: "60%", color: "#000" },
  { name: "Styled-Components", score: "70%", color: "purple" },
  { name: "SASS", score: "60%", color: "#cc6699" },
  { name: "REST API", score: "75%", color: "cyan" },
  { name: "Git", score: "80%", color: "#f34f29" },
];

export default function AboutMe() {
  const { getAnimationWidth, ref, inView } = useAnimation();

  return (
    <AboutMeSection id="aboutme" ref={ref}>
      <Container data-aos="fade-right">
        <Title children="Sobre mim" />
        <Row>
          <AboutMeTextContainer>
            <TitleAboutMe>Quem sou eu?</TitleAboutMe>
            <Text>
              Olá! Me chamo Leonardo, tenho 20 anos e estou no meu{" "}
              <strong>3º semestre</strong> de{" "}
              <strong>Análise e Desenvolvimento de Sistemas</strong>.
              Atualmente, tenho experiência em projetos acadêmicos e pessoais,
              onde pude aplicar meus conhecimentos em HTML, CSS, JavaScript e
              outras tecnologias relevantes para o desenvolvimento{" "}
              <strong>web</strong>. Logo abaixo, você poderá ver alguns
              dos meus projetos e as respectivas tecnologias utilizadas. Além
              disso, finalizei um curso de inglês com duração de 5 anos e tenho{" "}
              <strong>sólido conhecimento na língua inglesa</strong>.
            </Text>
            <Text>
              Caso queira saber um pouco mais sobre mim, confira o meu currículo
              logo abaixo.
            </Text>
            <ButtonContainer>
              <ButtonLink
                gap="9px"
                widthOnHover="14em"
                widthMobileLarge="100%"
                fontSizeMobile="0.9em"
                target="blank"
                href="https://drive.google.com/file/d/1MqHK3E2a7G5dar5RTpjcixjxEZezA_bm/view?usp=sharing"
              >
                <RiFolderUserFill color="#fff" size={26} /> Meu currículo
              </ButtonLink>
              <ButtonLink
                gap="9px"
                widthOnHover="14em"
                widthMobileLarge="100%"
                fontSizeMobile="0.9em"
                href="#projects"
              >
                <MdBuild color="#fff" size={22} /> Meus projetos
              </ButtonLink>
            </ButtonContainer>
          </AboutMeTextContainer>
          <SkillsContainer>
            <TitleLevel>Meus conhecimentos</TitleLevel>
            <Grid>
              {skills.map((skill, index) => (
                <CSSTransition
                  key={index}
                  in={inView}
                  timeout={500}
                  classNames="skill-animation"
                >
                  <SkillBar
                    skill={skill}
                    animationWidth={getAnimationWidth(skill.score)}
                  />
                </CSSTransition>
              ))}
            </Grid>
          </SkillsContainer>
        </Row>
      </Container>
    </AboutMeSection>
  );
}
