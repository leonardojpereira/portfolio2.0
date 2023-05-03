import styled from 'styled-components';

export const HeaderContainer = styled.header`
display: flex;
justify-content: center;
align-items: center;
    width: 100%;
    height: 3.5em;
    background-color: #282828;
`;

export const Nav = styled.nav`

`;

export const Ul = styled.ul`

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
    };
`;

export const Link = styled.a`
    font-weight: bolder;
    text-decoration: none;
    color: #FFF;
`;