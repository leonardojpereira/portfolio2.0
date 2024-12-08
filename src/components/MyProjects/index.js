import React from "react";
import Title from "../Title";
import {
  MyProjectsSection,
  Container,
  ProjectContainer,
  SeeMore,
  ProjectDisplay,
  ProjectInfo,
  ProjectVideo,
  SourceVideo,
  ProjectTitle,
  ProjectDescription,
  TechnologiesContainer,
  GitHubLinks,
  GitHubLink,
  Subtitle,
  StackContainer,
  Stack,
  GitHubLinksContainer,
  GitHubLinkWithIcon,
} from "./style";
import { ButtonLink } from "../Button/style";
import { ProfileLink } from "../Footer/style";
import { BsFillChatTextFill } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import VideoProjectBrigaderia from "../../assets/media/rb_brigaderia_video.mp4";

export default function MyProjects() {
  return (
    <MyProjectsSection id="projects">
      <Container>
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
                <Stack>Angular 18</Stack>
                <Stack>.NET 8</Stack>
                <Stack>MySQL</Stack>
                <Stack>Git</Stack>
                <Stack>GitHub</Stack>
              </StackContainer>
            </TechnologiesContainer>
            <GitHubLinks>
              <Subtitle>Repositórios</Subtitle>
              <GitHubLinksContainer>
                <GitHubLinkWithIcon>
                  <GitHubLink
                    href="https://github.com/leonardojpereira/rb-brigaderia-front"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Front-End
                  </GitHubLink>
                  <FaExternalLinkAlt />
                </GitHubLinkWithIcon>
                <GitHubLinkWithIcon>
                  <GitHubLink
                    href="https://github.com/leonardojpereira/rb-brigaderia-api"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Back-End
                  </GitHubLink>
                  <FaExternalLinkAlt />
                </GitHubLinkWithIcon>
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
}
