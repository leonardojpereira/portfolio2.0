import styled from 'styled-components';

export const HomeSection = styled.section`
    padding: 10em 0 10em 0;
    text-align: left;
    background-color: #fff;
    box-shadow: inset 0px 1px 0px 0px rgba(0, 0, 0, 0.05), inset 0px 2px 3px 0px rgba(0, 0, 0, 0.1);
    border-bottom: #ddd;
`;

export const Container = styled.div`
    margin: 0 auto;
    max-width: calc(100% - 50px);
    width: 1200px;
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    align-items: stretch;
`;

export const ImageContainer = styled.div`
       width: 33.33333%;
`;

export const ImageFit = styled.div`
    border-radius: 100%;
    width: 20em;
    height: 20em;
    margin: 0;
    background-color: #0083ff;
`;

export const Image = styled.img`
       border-radius: 100%;
       display: block;
    width: 100%;
`;

export const Apresentation = styled.div`
display: flex;
flex-direction: column;
 width: 66.66667%;
 gap: 20px;
`;


export const Title = styled.h1`
  margin-top: 0.35em;
`;

export const TextAboutMe = styled.p`
    font-size: 1.5em;
    line-height: 1.75em;
`;

export const ButtonAboutMe = styled.a`
transition: background-color .2s ease-in-out;
    position: relative;
    display: inline-block;
    color: #fff !important;
    text-decoration: none;
    font-weight: 700;
    border: none;   
    outline: 0;
    cursor: pointer;
    border-radius: 8px;
    overflow: hidden;
    background-color: #0083ff;
    padding: 1em 2.35em 1em 2.35em;
    font-size: 1.1em;
    max-width: 17em;
`;