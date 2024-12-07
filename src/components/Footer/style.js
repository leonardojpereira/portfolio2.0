import styled from 'styled-components';

export const FooterContainer = styled.footer`
        font-size: 0.9em;
        margin: 3em 0 0 0;
`;

export const CopyrightContainer = styled.ul`
    color: #666;
    font-size: 1em;
    line-height: 1em;
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
`;

export const Item = styled.li`
    padding: 0 0 0 1em; 
`;

export const ProfileLink = styled.a`
    color: rgb(120 120 120); 
    font-style: italic;
    transition: .3s ease;
    &:hover {
        color: rgb(255 138 0);
    }
`;