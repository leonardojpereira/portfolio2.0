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
    display: inline-block;
    border-left: solid 1px rgba(0, 0, 0, 0.5);
    box-shadow: -1px 0px 0px 0px rgba(255, 255, 255, 0.1);
    padding: 0 0 0 1em;
    margin: 0 0 0 1em;
`;

export const ProfileLink = styled.a`
    color: rgb(120 120 120); 
    font-style: italic;
    transition: .3s ease;
    &:hover {
        color: rgb(0, 131, 255);
    }
`;