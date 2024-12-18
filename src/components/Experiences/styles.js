import styled from "styled-components";

export const ExperienceSection = styled.section`
  padding: 8em 2em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 28px;
  box-shadow: inset 0px 1px 0px 0px rgba(0, 0, 0, 0.05),
    inset 0px 2px 3px 0px rgba(0, 0, 0, 0.1);
`;

export const TitleContainer = styled.div`
  margin-bottom: 50px;
`;

export const ExperienceContainer = styled.div`
  border: 1px solid #333;
  border-radius: 6px;
  background-color: #1b1b1b;
  color: #fff;
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  transition: all 0.3s ease-in 0s;

  @media (max-width: 1400px) {
    width: 100%;
  }

  @media (max-width: 947px) {
    padding: 0 20px;
  }
`;

export const ExperienceHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  cursor: pointer;
  position: relative;
`;

export const ExperienceLogoContainer = styled.div`
  width: 120px;
  height: 120px;
  margin-right: 20px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

export const ExperienceLogo = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const ExperienceTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 22px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Period = styled.span`
  font-size: 16px;
  color: #aaa;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ExperienceToggle = styled.div`
  font-size: 20px;
  position: absolute;
  right: 0;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.5s ease;

  @media (max-width: 515px) {
    top: 20px;
  }
`;

export const ExperienceDetails = styled.div`
  background-color: #1b1b1b;
  border-top: 1px solid #ddd;
  padding: ${({ isOpen }) => (isOpen ? "20px 0" : "")};
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? "1600px" : "0")};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: max-height 0.5s ease, opacity 0.3s ease, padding 0.5s ease;

  @media (max-width: 947px) {
    overflow: auto;;
  }
`;

export const TitleRole = styled.span`
  margin: 0;
  font-size: 18px;
`;

export const ListActivities = styled.ul`
  margin-top: 20px;
`;

export const Activity = styled.li`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const ProjectTitle = styled.h3`
  margin-left: 20px;
`;

export const ProjectList = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`;

export const ProjectItem = styled.div`
  margin-bottom: 30px;
  display: flex;
  gap: 14px;

  @media (max-width: 947px) {
    flex-direction: column;
  }
`;

export const ProjectInfoContainer = styled.div`
  display: flex;
  gap: 6px;
  flex-direction: column;
`;

export const ProjectName = styled.h4`
  margin: 0;
  font-size: 18px;
`;

export const ProjectPeriod = styled.span`
  font-size: 16px;
  color: #ff8a00;
`;

export const ProjectTecnologiesContainer = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #aaa;
`;

export const TitleTecnology = styled.span`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #fff;
`;

export const ListTecnologies = styled.ul`
  display: flex;
  list-style: none;
  gap: 12px;

  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

export const Stack = styled.li`
  font-size: 14px;
  padding: 6px 12px;
  background-color: rgb(255 138 0 / 70%);
  color: #fff;
  border-radius: 4px;
  font-weight: bold;
`;

export const ProjectDescription = styled.p`
  margin: 0;
  font-size: 16px;
  color: #aaa;
`;

export const ProjectImage = styled.img`
  max-width: 150px;
  object-fit: contain;
  border-radius: 6px;
  background-color: #fff;

  @media (max-width: 947px) {
    max-width: 100% !important;
    height: 100px;
    object-position: center;
  }
`;
