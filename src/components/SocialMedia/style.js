import styled from 'styled-components';

export const Column = styled.div`
    width: 100%;
`

export const Line = styled.hr`
        border: 0;
    border-top: solid 1px #444;
    border-top-color: rgba(0, 0, 0, 0.35);
    box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.1);
    height: 1px;
    margin: 3em 0;
`;

export const SocialTitle = styled.h3`
    color: #fff;
    font-size: 1.5em;
    letter-spacing: -0.015em;
    margin: 0 0 0.75em 0;
    font-weight: 700;
`;

export const SocialContainer = styled.ul`
      cursor: default;
    margin: 0;
    list-style: none;
    padding-left: 0;
`;

export const SocialItem = styled.li`
         position: relative;
    display: inline-block;
    margin: 0.35em;
    top: 0;
    padding-left: 0;
`;

export const SocialLink = styled.a`
    width: 48px;
    height: 48px;
    border-radius: 6px;
    top: 0;
    position: relative;
    transition: .4s ease;
    background: #444;
    border-radius: 6px;
    box-shadow: inset 0px 0px 0px 1px #282828, inset 0px 2px 1px 0px rgba(255, 255, 255, 0.1);
    color: #2E2E2E !important;
    font-size: 28px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    outline: 0;
    overflow: hidden;
    text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        top: -5px;
        background: ${props => props.backgroundColor};
    }

`;