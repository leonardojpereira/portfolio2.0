import styled from "styled-components";

export const MyProjectsSection = styled.section`
  background-color: #fff;
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

export const ProjectContainer = styled.div`
  display: flex;
  background-color: rgb(40, 40, 40);
  border-radius: 14px;
  margin: 22px 0;
`;

export const ProjectDisplay = styled.div`
  width: 60%;
  border-radius: 16px;
  border-right: 10px solid rgb(255, 138, 0);
`;

export const ProjectInfo = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  gap: 12px;
  padding: 22px;
`;

export const ProjectTitle = styled.h3`
  font-size: 28px;
`;

export const ProjectDescription = styled.p`
  font-size: 17px;
  margin-bottom: 8px;
  color: #ddd;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GitHubLinksContainer = styled.ul`
  display: flex;
  gap: 22px;
`;

export const GitHubLinkWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 138, 0, 0.7);

  &:hover {
    text-decoration: underline;
  }
`;

export const TechnologiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Subtitle = styled.span`
  font-size: 20px;
`;

export const StackContainer = styled.ul`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
`;

export const Stack = styled.li`
  font-size: 14px;
  padding: 6px 12px;
  background-color: rgb(255 138 0 / 70%);
  color: #fff;
  border-radius: 4px;
  font-weight: bold;
  list-style: none;
  cursor: default;
  transition: ease 0.4s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const GitHubLinks = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const GitHubLink = styled.a`
  color: rgba(255, 138, 0, 0.7);
  text-decoration: none;
  font-size: 16px;

  display: block;
  margin: 5px 0;
`;

export const ProjectVideo = styled.video`
  width: 100%;
  border-radius: 12px;
`;

export const SourceVideo = styled.source`
  height: 100%;
`;

export const SeeMore = styled.span`
  color: #888;
  font-size: 1.5em;
  margin-bottom: 2em;
  transition: 0.4s ease;
  text-align: center;

  &:hover {
    opacity: 0.8;
  }
`;
