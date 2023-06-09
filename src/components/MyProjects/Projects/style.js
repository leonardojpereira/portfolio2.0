import styled from 'styled-components';

export const ProjectImage = styled.img`
width: 100%;
height: 100%;
border-top-left-radius: 12px;
border-top-right-radius: 12px;
`;

export const ImageOverlay = styled.div`
width: 100%;
height: 100%;
top: 0;
right: -100%;
color: #fff;
position: absolute;
background: #1f3d4738;
backdrop-filter: blur(5px);
border-top-left-radius: 12px;
border-top-right-radius: 12px;
padding: 30px;
display: flex;
flex-direction: column;
justify-content: center;
transition: .6s;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  border-top-left-radius: 12px;
border-top-right-radius: 12px;
&:hover {
  ${ImageOverlay} {
    right: 0;
  }
}
`;

export const BoxContainer = styled.div`
  height: 100%;
  border-top-left-radius: 12px;
border-top-right-radius: 12px;
`;

export const Box = styled.div`
width: 100%;
height: 80%;
position: relative;
`;

export const ProjectNameContainer = styled.div`
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    background-color: rgb(40, 40, 40);
    color: #fff;
    @media screen  and (max-width: 1000px) {
      height: 40px;
  }
  @media screen  and (max-width: 700px) {
    height: 60px;
  }
`;  

export const ProjectName = styled.h3`
  font-size: 1.5em;
  @media screen  and (max-width: 1000px) {
    font-size: 1.1em;
  } 
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