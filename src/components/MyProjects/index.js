import React from "react";
import Title from "../Title";
import Project from "./Projects/projects";
import { MyProjectsSection, Container, Row, SeeMore } from "./style";
import { ButtonLink } from "../Button/style";
import { ProfileLink } from "../Footer/style";
import { BsFillChatTextFill } from "react-icons/bs";
import projects from "./projectsData";

export default function MyProjects() {
  return (
    <MyProjectsSection id="projects">
      <Container data-aos="fade-up">
        <Title children="Meus projetos" />
        <Row>
          {projects.map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </Row>
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
