import ProfileImage from "../../images/profile.png";
import { ButtonLink } from "../Button/style";
import {
  HomeSection,
  Container,
  Row,
  ImageContainer,
  ImageFit,
  Image,
  Apresentation,
  Header,
  Title,
  TextAboutMe,
} from "./style";
export default function Home() {
  return (
    <HomeSection>
      <Container> 
        <Row>
          <ImageContainer>
            <ImageFit>
              <Image src={ProfileImage} alt="Foto de perfil" />
            </ImageFit>
          </ImageContainer>
          <Apresentation>
            <Header>
              <Title>
                Olá. meu nome é <strong>Leonardo</strong>.
              </Title>
            </Header>
            <TextAboutMe>
              Sou um desenvolvedor <strong>Front-End</strong> e esse é o meu
              portfolio pessoal. Fique a vontade para explorá-lo!
            </TextAboutMe>
            <ButtonLink href="#aboutme" width="350px" height="70px" widthOnHover="21em">Conheça mais sobre mim!</ButtonLink>
          </Apresentation>
        </Row>
      </Container>
    </HomeSection>
  );
}
