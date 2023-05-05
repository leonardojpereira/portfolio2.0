import Title from "../Title";
import { MyProjectsSection, Container, Row, Box, ProjectImage, ArticleContainer, ProjectName, LinksContainer, GitHubLink, Deploy } from './style';
import InfoGamesImage from '../../images/infogames.jpg';
import SalesSystemImage from '../../images/salesystem.png';
import BlogAppImage from '../../images/blogapp.jpg';
import CardPersonImage from '../../images/cardperson.jpg';
import CreditCardImage from '../../images/creditcard.png';
import BibleAppImage from '../../images/bible.jpg';
import { BsGithub } from 'react-icons/bs';
import Button from "../Button";

export default function MyProjects() {
    return (
        <MyProjectsSection>
            <Container>
                <Title children="Meus projetos" />
                <Row>
                    <Box>
                        <ProjectImage src={InfoGamesImage} alt="Imagem do projeto" />
                        <ArticleContainer>
                            <ProjectName>Info Games</ProjectName>
                            <LinksContainer>
                                <GitHubLink><BsGithub /></GitHubLink>
                                <Deploy>Live</Deploy>
                            </LinksContainer>
                        </ArticleContainer>
                    </Box>

                    <Box>
                        <ProjectImage src={SalesSystemImage} alt="Imagem do projeto" />
                        <ArticleContainer>
                            <ProjectName>Sales System</ProjectName>
                            <LinksContainer>
                                <GitHubLink><BsGithub /></GitHubLink>
                                <Deploy>Live</Deploy>
                            </LinksContainer>
                        </ArticleContainer>
                    </Box>

                    <Box>
                        <ProjectImage src={BlogAppImage} alt="Imagem do projeto" />
                        <ArticleContainer>
                            <ProjectName>Blog App</ProjectName>
                            <LinksContainer>
                                <GitHubLink><BsGithub /></GitHubLink>
                                <Deploy>Live</Deploy>
                            </LinksContainer>
                        </ArticleContainer>
                    </Box>

                    <Box>
                        <ProjectImage src={CardPersonImage} alt="Imagem do projeto" />
                        <ArticleContainer>
                            <ProjectName>Card Person</ProjectName>
                            <LinksContainer>
                                <GitHubLink><BsGithub /></GitHubLink>
                                <Deploy>Live</Deploy>
                            </LinksContainer>
                        </ArticleContainer>
                    </Box>

                    <Box>
                        <ProjectImage src={CreditCardImage} alt="Imagem do projeto" />
                        <ArticleContainer>
                            <ProjectName>Info Games</ProjectName>
                            <LinksContainer>
                                <GitHubLink><BsGithub /></GitHubLink>
                                <Deploy>Live</Deploy>
                            </LinksContainer>
                        </ArticleContainer>
                    </Box>

                    <Box>
                        <ProjectImage src={BibleAppImage} alt="Imagem do projeto" />
                        <ArticleContainer>
                            <ProjectName>Bíblia Digital</ProjectName>
                            <LinksContainer>
                                <GitHubLink><BsGithub /></GitHubLink>
                                <Deploy>Live</Deploy>
                            </LinksContainer>
                        </ArticleContainer>
                    </Box>
                </Row>
                <Button href="#">Contate-me!</Button>
            </Container>
        </MyProjectsSection>
    );
}