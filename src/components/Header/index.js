import { HeaderContainer, Nav, Ul, Link, List } from "./style";

export default function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Ul>
          <List>
            <Link href="#">Home</Link>
          </List>
          <List>
            <Link href="#aboutme">Sobre mim</Link>
          </List>
          <List>
            <Link href="#projects">Projetos</Link>
          </List>
          <List>
            <Link href="#contact">Contato</Link>
          </List>
        </Ul>
      </Nav>
    </HeaderContainer>
  );
}
