import Experience from './index';
import { experiences } from './experiencesData';
import { ExperienceSection, TitleContainer } from './styles';
import Title from '../Title';

const ExperienceList = () => {
    return (
      <ExperienceSection id="experiences">
        <TitleContainer>
        <Title>Experiências</Title>
        </TitleContainer>
        {experiences.map((exp, index) => (
          <Experience
            key={index}
            logo={exp.logo}
            title={exp.title}
            period={exp.period}
            description={exp.description}
            activity={exp.activity}
            projects={exp.projects}
            tecnologies={exp.tecnologies}
          />
        ))}
      </ExperienceSection>
    );
  };

export default ExperienceList;