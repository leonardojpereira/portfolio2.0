import styled from 'styled-components';

export const MyProjectsSection = styled.section`
  background-image: url(images/bg.png);
  box-shadow: inset 0px 1px 0px 0px rgba(0, 0, 0, 0.05),
    inset 0px 2px 3px 0px rgba(0, 0, 0, 0.1);
  padding: 8em 2em;
  background-color: #f4f4f4;
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
  margin: 5em 0;
`;

export const Box = styled.div`
       background: #fff;
    box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15), 0px 2px 3px 0px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

export const ProjectImage = styled.img`
    width: 100%;
    display: block;
    min-height: 60%;
`;

export const ArticleContainer = styled.article`
    height: 140px;
    position: relative;
    padding-top: 22px;

`;

export const ProjectName = styled.span`
  font-size: 1.5em;
  margin-top: 22px;
`;

export const LinksContainer = styled.div`
    gap: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 12px;
    position: absolute;
    bottom: 0;
    right: 0;
`;

export const GitHubLink = styled.span`
    font-size: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: ease 0.4s;
    &:hover {
        transform: scale(1.1);
    }
`;

export const Deploy = styled.span`
    background-color: #0083ff;
    padding: 4px 8px;
    border-radius: 12px;
    color: #fff;
    transition: ease 0.4s;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
`;