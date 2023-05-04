import styled from 'styled-components';

export const AboutMeSection = styled.section`
    background-image: url(images/bg.png);
    box-shadow: inset 0px 1px 0px 0px rgba(0, 0, 0, 0.05), inset 0px 2px 3px 0px rgba(0, 0, 0, 0.1);
    padding: 8em 2em;
    
`;

export const Title = styled.h2`
    text-align: center;
    position: relative;
    display: flex;
        justify-content: center;
        align-items: center;
    &::after {
        content: '';
        position: absolute;
        width: 50px;
        height: 6px;
        border-radius: 12px;
        bottom: -12px;
        background-color: #0083ff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Container = styled.div`
max-width: 1200px;
width: 100%;
margin: 0 auto;
`;

export const Row = styled.div`
 display: flex;
 width: 100%;
  justify-content: center;
  margin: 5em 0;
  gap: 12em;
`;

export const AboutMeTextContainer = styled.div`
width: 60%;
`;

export const TitleAboutMe = styled.h3`
    margin-bottom: 1em;
    font-size: 2em;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        width: 50px;
        height: 6px;
        border-radius: 12px;
        bottom: -16px;
        left: 0;
        background-color: #0083ff;
    }
`;

export const Text = styled.p`
    font-size: 18px;
    line-height: 32px;
    text-align: justify;
    margin-bottom: 22px;
`;

export const CvLink = styled.a`
  transition: .4s ease-in-out;
    position: relative;
    display: inline-block;
    color: #fff !important;
    text-decoration: none;
    font-weight: 700;
    border: none;   
    outline: 0;
    text-align: center;
    cursor: pointer;
    border-radius: 8px;
    overflow: hidden;
    background-color: #0083ff;
    padding: 0.8em 3em 0.8em 3em;
    font-size: 1.1em;
    width: 17em;
    &:hover {
        width: 18em;
    };
`;

export const SkillsContainer = styled.div`
  width: 40%;
`;

export const LevelContainer = styled.div`
 width: 100%;
`;

export const ContainerSkill = styled.div`
 display: flex;
 justify-content: space-between;
 margin-bottom: 8px;
`;

export const Score = styled.span`

`;

export const TitleLevel = styled.h3`
    font-size: 2em;
    margin-bottom: 1em;
    position: relative;
     
`;

export const Grid = styled.div`
   display: grid;
  height: 100px;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`;

export const SkillName = styled.span`

`;  

export const LevelBar = styled.div`
    background-color: #ddd;
    max-width: 600px;
    width: 100%;
    height: 8px;
    margin-top: 4px;
    border-radius: 5px;
    position: relative;
`;  

export const LevelBarScore = styled.div`
    width: ${props => props.width};
    height: 8px;
    border-radius: 5px;
    background-color: #0083ff;
`;  