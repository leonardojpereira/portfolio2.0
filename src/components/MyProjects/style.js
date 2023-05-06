import styled from "styled-components";

export const MyProjectsSection = styled.section`
  box-shadow: inset 0px 1px 0px 0px rgba(0, 0, 0, 0.05),
    inset 0px 2px 3px 0px rgba(0, 0, 0, 0.1);
  padding: 8em 2em;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  width: 100%;
  margin: 5em 0px 3em 0;
`;

export const Box = styled.div`
  background-color: rgb(0, 131, 255);
  box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),
    0px 2px 3px 0px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  color: #fff;
  border-radius: 12px;
`;


export const ProjectImageWrapper = styled.div`
  position: relative;
  height: 75%;
  border-top-left-radius: 12px;
    border-top-right-radius: 12px;
`;

export const ProjectImage = styled.img`
  width: 100%;
  display: block;
  height: 100%;
  position: relative;
  border-top-left-radius: 12px;
    border-top-right-radius: 12px;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
  opacity: 0;
  filter: "brightness(50%)";
  transition: opacity 0.5s ease-in-out;
  height: 100%;
  border-top-left-radius: 12px;
    border-top-right-radius: 12px;
`;


export const ProjectName = styled.h3`
  font-size: 1.5em;
  height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    background-color: rgb(40, 40, 40);
`;

export const LinksContainer = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const GitHubLink = styled.a`
  font-size: 32px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
  transition: ease 0.4s;
  border-radius: 50%;
  background-color: rgb(41 41 41 / 75%);
  &:hover {
    transform: scale(1.1);
    background-color: rgb(41 41 41);  
  }
`;

export const Deploy = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(41 41 41 / 75%);
  width: 60px;
  height: 60px;
  font-size: 28px;
  color: #fff;
  border-radius: 50%;
  transition: ease 0.4s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    background-color: rgb(41 41 41);
  }
`;

export const SeeMore = styled.span`
color: #888;
font-size: 1.5em;
margin-bottom: 2em;
transition: 0.4s ease;
&:hover {
  opacity: 0.8;
}
`;
