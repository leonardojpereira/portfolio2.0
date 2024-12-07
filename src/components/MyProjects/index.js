import React from "react";
import Title from "../Title";
import {
  MyProjectsSection,
  Container,
  ProjectContainer,
  ProjectDisplay,
  ProjectInfo,
  ProjectVideo,
  SourceVideo,
  ProjectTitle,
  ProjectDescription,
  TechnologiesContainer,
  Subtitle,
  StackContainer,
  Stack,
  GitHubLinks,
  GitHubLinksContainer,
  GitHubLinkWithIcon,
  GitHubLink,
  SeeMore,
} from "./style";
import { ButtonLink } from "../Button/style";
import { ProfileLink } from "../Footer/style";
import { BsFillChatTextFill } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import VideoProjectBrigaderia from "../../assets/media/rb_brigaderia_video.mp4";

const MyProjects = () => {
  const techStack = ["Angular 18", ".NET 8", "MySQL", "Git", "GitHub"];
  const githubLinks = [
    {
      name: "Front-End",
      url: "https://github.com/seu-usuario/front-end-repository",
    },
    {
      name: "Back-End",
      url: "https://github.com/seu-usuario/back-end-repository",
    },
  ];

  return (
    <MyProjectsSection id="projects">
      <Container data-aos="fade-up">
        <Title children="Projetos" />
        <ProjectContainer>
          <ProjectDisplay>
            <ProjectVideo width="100%" height="100%" controls>
              <SourceVideo src={VideoProjectBrigaderia} type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </ProjectVideo>
          </ProjectDisplay>
          <ProjectInfo>
            <ProjectTitle>RB Brigaderia</ProjectTitle>
            <ProjectDescription>
              O RB Brigaderia é um sistema desenvolvido para automatizar o
              controle de vendas e estoque de uma brigaderia que antes realizava
              a precificação e o gerenciamento manualmente, o que gerava perda
              de tempo e falta de visibilidade sobre as quantidades de produtos.
            </ProjectDescription>
            <TechnologiesContainer>
              <Subtitle>Tecnologias</Subtitle>
              <StackContainer>
                {techStack.map((tech, index) => (
                  <Stack key={index}>{tech}</Stack>
                ))}
              </StackContainer>
            </TechnologiesContainer>
            <GitHubLinks>
              <Subtitle>Repositórios</Subtitle>
              <GitHubLinksContainer>
                {githubLinks.map(({ name, url }, index) => (
                  <GitHubLinkWithIcon key={index}>
                    <GitHubLink
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {name}
                    </GitHubLink>
                    <FaExternalLinkAlt />
                  </GitHubLinkWithIcon>
                ))}
              </GitHubLinksContainer>
            </GitHubLinks>
          </ProjectInfo>
        </ProjectContainer>
        <SeeMore>
          Caso queira ver mais projetos meus, dê uma olhadinha no meu{" "}
          <ProfileLink
            target="blank"
            href="https://github.com/leonardojpereira?tab=repositories"
          >
            GitHub
          </ProfileLink>{" "}
          :)
        </SeeMore>
        <ButtonLink
          fontSize="1.3em"
          height="75px"
          width="16em"
          widthOnHover="16em"
          href="#contact"
          fontSizeMobile="1em"
          gap="9px"
        >
          <BsFillChatTextFill size={32} />
          Fale comigo
        </ButtonLink>
      </Container>
    </MyProjectsSection>
  );
};

export default MyProjects;
// Compare this snippet from src/components/MyProjects/style.js: