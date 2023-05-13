import { useState } from 'react';
import { HeaderContainer, Nav, Ul, Link, List, MenuIcon } from "./style";
import { VscThreeBars } from 'react-icons/vsc';
import { AiOutlineClose } from 'react-icons/ai';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <HeaderContainer>
      <Nav>
        <MenuIcon onClick={() => setOpen(!open)}>
        {open === false ? <VscThreeBars color='#fff' size={42}/> : <AiOutlineClose color='#fff' size={42}/>}
        </MenuIcon>
    
        <Ul open={open}>
          <List>
            <Link onClick={() => setOpen(!open)} href="#" >Home</Link>
          </List>
          <List>
            <Link onClick={() => setOpen(!open)} href="#aboutme">Sobre mim</Link>
          </List>
          <List>
            <Link onClick={() => setOpen(!open)} href="#projects">Projetos</Link>
          </List>
          <List>
            <Link onClick={() => setOpen(!open)} href="#contact">Contato</Link>
          </List>
        </Ul>
      </Nav>
    </HeaderContainer>
  );
}