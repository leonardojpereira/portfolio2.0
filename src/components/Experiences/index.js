import { useState } from "react";
import {
  ExperienceContainer,
  ExperienceHeader,
  ExperienceLogoContainer,
  ExperienceLogo,
  ExperienceTitle,
  Title,
  Period,
  ExperienceToggle,
  ExperienceDetails,
  TitleRole,
  ListActivities,
  Activity,
  ProjectList,
  ProjectItem,
  ProjectName,
  ProjectDescription,
  ProjectImage,
  ProjectTitle,
  ProjectInfoContainer,
  ProjectPeriod,
  ProjectTecnologiesContainer,
  Stack,
  ListTecnologies,
  TitleTecnology
} from "./styles";
import { FaArrowUp } from "react-icons/fa";

const Experience = ({
  logo,
  title,
  period,
  description,
  activity = [],
  projects = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ExperienceContainer>
      <ExperienceHeader onClick={toggleOpen}>
        <ExperienceLogoContainer>
          <ExperienceLogo src={logo} alt={`${title} logo`} />
        </ExperienceLogoContainer>
        <ExperienceTitle>
          <Title>{title}</Title>
          <Period>{period}</Period>
        </ExperienceTitle>
        <ExperienceToggle isOpen={isOpen}>
          <FaArrowUp />
        </ExperienceToggle>
      </ExperienceHeader>
      <ExperienceDetails isOpen={isOpen}>
        <TitleRole>{description}</TitleRole>
        <ListActivities>
          {activity.map((item, index) => (
            <Activity key={index}>{item}</Activity>
          ))}
        </ListActivities>
        {projects.length > 0 && (
          <>
            <ProjectTitle>Projetos</ProjectTitle>
            <ProjectList>
              {projects.map((project, index) => (
                <ProjectItem key={index}>
                  <ProjectImage
                    src={project.image}
                    alt={`${project.name} image`}
                  />
                  <ProjectInfoContainer>
                    <ProjectName>{project.name}</ProjectName>
                    <ProjectPeriod>{project.projectPeriod}</ProjectPeriod>
                    <ProjectDescription>
                      {project.description}
                    </ProjectDescription>
                    {project.tecnologies && project.tecnologies.length > 0 && (
                      <ProjectTecnologiesContainer>
                        <TitleTecnology>Tecnologias</TitleTecnology>
                        <ListTecnologies>
                          {project.tecnologies.map((tech, techIndex) => (
                            <Stack key={techIndex}>{tech}</Stack>
                          ))}
                        </ListTecnologies>
                      </ProjectTecnologiesContainer>
                    )}
                  </ProjectInfoContainer>
                </ProjectItem>
              ))}
            </ProjectList>
          </>
        )}
      </ExperienceDetails>
    </ExperienceContainer>
  );
};

export default Experience;
