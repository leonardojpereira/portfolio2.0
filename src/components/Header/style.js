import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.5em;
  background-color: #282828;
  position: fixed;
  top: 0;
  z-index: 2;
`;

export const Nav = styled.nav`
      display: flex;
    align-items: center;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 3.5em;
    right: ${({ open }) => (open ? "0" : "-100%")};
    width: 50%;
    height: calc(100vh - 3.5em);
    background-color: #282828;
    transition: right 0.3s ease-in-out;
  }
`;


export const List = styled.li`
  display: inline;
  margin: 1.5em;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.6s ease;
  &:hover {
    background-color: #393939;
  }
  @media (max-width: 768px) {
    display: block;
    margin: 0;
    padding: 1em;
    text-align: center;
  }
`;

export const Link = styled.a`
  font-weight: bolder;
  text-decoration: none;
  color: #fff;
`;

export const MenuIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 0.8em;
    cursor: pointer;
    z-index: 3;
  }
`;