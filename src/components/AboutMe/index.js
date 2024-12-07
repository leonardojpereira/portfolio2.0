import { CSSTransition } from "react-transition-group";
import { RiFolderUserFill } from "react-icons/ri";
import { MdBuild } from "react-icons/md";
import { useAnimation } from "../../hooks";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css';

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
  SwiperControler,
  SwiperPagination
} from "./style";
import SkillBar from "./SkillBar";
import Title from "../Title";
import { ButtonLink } from "../Button/style";

export const firstSliderSkill = [
  { name: "Angular", score: "90%", color: "#ff6347" },
  { name: "React", score: "80%", color: "#264de4" },
  { name: "TypeScript", score: "90%", color: "#F0DB4F" },
  { name: "C#", score: "75%", color: "#61dafb" },
  { name: ".NET", score: "75%", color: "#21759b" },
  { name: "MySQL", score: "90%", color: "#f59620" },
  { name: "Flutter", score: "85%",  color: "#027DFD"},
  { name: "SCSS", score: "90%", color: "purple" },
  { name: "HTML", score: "90%", color: "#4F5B93" },
  { name: "Azure DevOps", score: "90%", color: "#3c873a" },
];

export const secondSliderSkill = [
  { name: "SASS", score: "60%", color: "#cc6699" },
  { name: "REST API", score: "75%", color: "cyan" },
  { name: "Git", score: "80%", color: "#f34f29" },
  { name: "BootStrap", score: "60%", color: "#9461fb" },
  { name: "TailwindCSS", score: "50%", color: "#38bdf8" },
  { name: "React Native", score: "65%", color: "#61dafb" },
  { name: "Linux", score: "50%", color: "#2577b1" },
  { name: "MongoDB", score: "45%", color: "#00ED64" },
  { name: "NextJS", score: "50%", color: "#000" },
  {name: "WordPress", score: "70%", color: "#21759b" },
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
            Olá! Sou o Leonardo, tenho 21 anos e sou apaixonado por tecnologia. Estou cursando Análise e Desenvolvimento de Sistemas e atuo como <strong>Desenvolvedor Fullstack</strong>. No meu portfólio, você encontrará alguns dos projetos que mais me orgulho, junto com as tecnologias que utilizei para criá-los.
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
                widthMobileHover="100%"
                target="blank"
                href="https://drive.google.com/file/d/1sA2SMjQmzftUSC3s1Cuw2xnxXGUHtk9R/view?usp=sharing"
              >
                <RiFolderUserFill color="#fff" size={26} /> Meu currículo
              </ButtonLink>
              <ButtonLink
                gap="9px"
                widthOnHover="14em"
                widthMobileLarge="100%"
                widthMobileHover="100%"
                fontSizeMobile="0.9em"
                href="#projects"
              >
                <MdBuild color="#fff" size={22} /> Meus projetos
              </ButtonLink>
            </ButtonContainer>
          </AboutMeTextContainer>
          <SkillsContainer>
            <TitleLevel>Meus conhecimentos</TitleLevel>
            <Swiper
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              pagination={{ el: '.swiper-pagination', clickable: true }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="SwiperContainer"
            >
              <SwiperSlide className="SwiperSlide">
                <Grid>
                  {firstSliderSkill.map((skill, index) => (
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
              </SwiperSlide>

              <SwiperSlide className="SwiperSlide">
                <Grid>
                  {secondSliderSkill.map((skill, index) => (
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
              </SwiperSlide>
              <SwiperControler className="slider-controler">
                <SwiperPagination className="swiper-pagination"></SwiperPagination>
              </SwiperControler>
            </Swiper>
          </SkillsContainer>
        </Row>
      </Container>
    </AboutMeSection>
  );
}
