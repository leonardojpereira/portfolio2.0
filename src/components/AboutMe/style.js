import styled from "styled-components";

export const AboutMeSection = styled.section`
  background-image: url(images/bg.png);
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
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 5em 0;
  gap: 7em;
  @media screen  and (max-width: 1200px) {
    gap: 5em;
    flex-direction: column;
  }
`;

export const AboutMeTextContainer = styled.div`
  width: 60%;
  @media screen  and (max-width: 1200px) {
    width: 100%;
  }
`;

export const TitleAboutMe = styled.h3`
  margin-bottom: 1em;
  font-size: 2em;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 40px;
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

export const ButtonContainer = styled.div`
 display: flex;
 gap: 20px;
`;

export const SkillsContainer = styled.div`
  width: 40%;
  @media screen  and (max-width: 1200px) {
    width: 100%;
  }
`;

export const TitleLevel = styled.h3`
  font-size: 2em;
  margin-bottom: 1em;
  position: relative;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  @media screen  and (max-width: 500px) {
  grid-template-columns: repeat(1, 1fr);
  }
`;

export const SkillName = styled.span``;
