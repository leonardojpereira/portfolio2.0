import styled, { keyframes } from "styled-components";

export const HomeSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10em 0 10em 0;
  text-align: left;
  background-color: #fff;
  box-shadow: inset 0px 1px 0px 0px rgba(0, 0, 0, 0.05),
    inset 0px 2px 3px 0px rgba(0, 0, 0, 0.1);
  border-bottom: #ddd;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: calc(100% - 50px);
  width: 1200px;
`;

export const Row = styled.div`
  display: flex;
  box-sizing: border-box;
  @media screen and (max-width: 1120px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ImageContainer = styled.div`
  margin-right: 4em;
  @media screen and (max-width: 1120px) {
    margin: 0 0 22px 0;
  }
`;

export const ImageFit = styled.div`
  border-radius: 100%;
  width: 20em;
  height: 20em;
  margin: 0;
  background-color: #0083ff;
  @media screen and (max-width: 540px) {
    width: 17em;
  height: 17em;
  }
  @media screen and (max-width: 420px) {
    width: 15em;
  height: 15em;
  }
`;

export const Image = styled.img`
  border-radius: 100%;
  display: block;
  width: 100%;
`;

export const Apresentation = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 1120px) {
    text-align: center;
    align-items: center;
  }
`;

const typing = keyframes`
  from {
    width: 0;
  }
`;

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

export const Title = styled.h1`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  animation: ${typing} 2s steps(19), ${blink} 0.5s step-end infinite alternate;
  padding-right: 10px;
  max-width: 700px;
  padding-right: 6px;
  font-size: 3.25em;
  @media screen and (max-width: 720px) {
      font-size: 2.5em
  }
  @media screen and (max-width: 540px) {
      font-size: 2em;
  }
  @media screen and (max-width: 420px) {
      font-size: 1.7em;
  }
  @media screen and (max-width: 375px) {
      font-size: 1.4em;
  }
  
`;

export const TextAboutMe = styled.p`
  font-size: 1.5em;
  line-height: 1.75em;
  @media screen and (max-width: 720px) {
      font-size: 1.4em
  }
  @media screen and (max-width: 540px) {
      font-size: 1.2em
  }
  @media screen and (max-width: 420px) {
      font-size: 1.1em
  }
  @media screen and (max-width: 365px) {
      font-size: 1em
  }
`;

