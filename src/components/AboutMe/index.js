import { useInView } from "react-intersection-observer";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

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
import SkillBar from "../SkillBar";



import Title from "../Title";
import { ButtonLink } from "../Button/style";

export const skills = [
  { name: "HTML5", score: "90%" },
  { name: "CSS", score: "80%" },
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

  const [inView, setInView] = useState(false);

  const getAnimationWidth = (score) => {
    if (inView) {
      return score;
    }
    return "0%";
  };

  const { ref } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
    threshold: 0.3,
    onChange: (inView) => {
      setInView(inView);
    },
  });

  return (
    <AboutMeSection id="aboutme" ref={ref} >
      <Container data-aos="fade-right">
        <Title children="Sobre mim" />
        <Row>
          <AboutMeTextContainer >
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
            <ButtonContainer>
              <ButtonLink target="blank" href="https://drive.google.com/file/d/13G_B-VoMDxh7ZYHw1nS3b3Xdv15pwotR/view?usp=sharing">Meu currículo</ButtonLink>
              <ButtonLink href="#projects" >Meus projetos</ButtonLink>
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
