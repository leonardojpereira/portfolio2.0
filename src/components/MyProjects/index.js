import Title from "../Title";
import {
  MyProjectsSection,
  Container,
  Row,
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
  SeeMore,
} from "./style";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { RiGithubLine } from "react-icons/ri";

import InfoGamesImage from "../../images/infogames.jpg";
import SalesSystemImage from "../../images/salesystem.png";
import BlogAppImage from "../../images/blogapp.jpg";
import CardPersonImage from "../../images/cardperson.png";
import CreditCardImage from "../../images/creditcard.png";
import BibleAppImage from "../../images/bible.jpg";
import { ButtonLink } from "../Button/style";
import { ProfileLink } from "../Footer/style";

const projects = [
  {
    name: "Info Games",
    image: InfoGamesImage,
    repository: "https://github.com/leonardojpereira/infogames-app",
    deploy: "https://infogamesapp.netlify.app/",
  },
  {
    name: "Sales System",
    image: SalesSystemImage,
    repository: "https://github.com/leonardojpereira/sales-system",
    deploy: "https://salesregisterapp.netlify.app/",
  },
  {
    name: "Blog App",
    image: BlogAppImage,
    repository: "https://github.com/leonardojpereira/blog-app",
    deploy: "https://test-blog-post-app.netlify.app",
  },
  {
    name: "Card Person",
    image: CardPersonImage,
    repository: "https://github.com/leonardojpereira/cardperson-app",
    deploy: "https://leonardojpereira.github.io/cardperson-app/",
  },
  {
    name: "Credit Card",
    image: CreditCardImage,
    repository:
      "https://github.com/leonardojpereira/interactvie-credit-card-react",
    deploy: "https://creditcard.netlify.app/",
  },
  {
    name: "Bíblia Digital",
    image: BibleAppImage,
    description:
      "Projeto feito em ReactJS, trata-se de uma Bíblia digital que retorna os dados através de uma API.",
    repository: "https://github.com/leonardojpereira/bible-app",
    deploy: "https://digitalbible.netlify.app/",
  },
];

function Project({ name, image, repository, deploy }) {
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

export default function MyProjects() {
  return (
    <MyProjectsSection id="projects">
      <Container data-aos="fade-up">
        <Title children="Meus projetos" />
        <Row>
          {projects.map((project) => (
            <Project
              key={project.name}
              name={project.name}
              image={project.image}
              repository={project.repository}
              deploy={project.deploy}
            />
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
          widthOnHover="17em"
          href="#contact"
          fontSizeMobile="1em"
        >
          Fale comigo!
        </ButtonLink>
      </Container>
    </MyProjectsSection>
  );
}
