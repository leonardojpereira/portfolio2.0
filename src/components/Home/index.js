import ProfileImage from "../../images/profile.png";
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
  ButtonAboutMe,
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
            <ButtonAboutMe>Conheça mais sobre mim!</ButtonAboutMe>
          </Apresentation>
        </Row>
      </Container>
    </HomeSection>
  );
}
