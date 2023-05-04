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
            <Link href="#">Sobre mim</Link>
          </List>
          <List>
            <Link href="#">Projetos</Link>
          </List>
          <List>
            <Link href="#">Contato</Link>
          </List>
        </Ul>
      </Nav>
    </HeaderContainer>
  );
}
