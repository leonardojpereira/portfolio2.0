import PropTypes from "prop-types";
import {
  BoxContainer,
  Box,
  ImageContainer,
  ProjectImage,
  ImageOverlay,
  ProjectNameContainer,
  ProjectName,
  LinksContainer,
  GitHubLink,
  Deploy,
} from "./style";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { RiGithubLine } from "react-icons/ri";

export default function Project({ project }) {
  const { name, image, repository, deploy } = project;

  return (
    <BoxContainer>
      <Box>
        <ImageContainer>
          <ProjectImage src={image} alt="Imagem do projeto" />
          <ImageOverlay>
            <LinksContainer>
              <GitHubLink target="blank" href={repository}>
                <RiGithubLine />
              </GitHubLink>
              <Deploy target="blank" href={deploy}>
                <BsFillRocketTakeoffFill />
              </Deploy>
            </LinksContainer>
          </ImageOverlay>
        </ImageContainer>
        <ProjectNameContainer>
          <ProjectName>{name}</ProjectName>
        </ProjectNameContainer>
      </Box>
    </BoxContainer>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    repository: PropTypes.string.isRequired,
    deploy: PropTypes.string.isRequired,
  }).isRequired,
};
