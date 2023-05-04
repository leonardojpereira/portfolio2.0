import styled from "styled-components";

export const AboutMeSection = styled.section`
  background-image: url(images/bg.png);
  box-shadow: inset 0px 1px 0px 0px rgba(0, 0, 0, 0.05),
    inset 0px 2px 3px 0px rgba(0, 0, 0, 0.1);
  padding: 8em 2em;
`;

export const Title = styled.h2`
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AfterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
`;

export const After = styled.div`
  width: 30px;
  height: 3px;
  border-radius: 12px;
  background-color: #0083ff;
`;

export const Circle = styled.div`
  width: 15px;
  height: 15px;
  background-color: #0083ff;
  transform: rotate(45deg);
`;

export const SecondAfter = styled.div`
  width: 30px;
  height: 3px;
  border-radius: 12px;
  background-color: #0083ff;
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
`;

export const AboutMeTextContainer = styled.div`
  width: 60%;
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

export const CvLink = styled.a`
  transition: 0.4s ease-in-out;
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
  padding: 0.8em 2em 0.8em 2em;
  font-size: 1.1em;
  width: 14em;
  &:hover {
    width: 15em;
  }
`;

export const SkillsContainer = styled.div`
  width: 40%;
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

export const SkillName = styled.span``;
