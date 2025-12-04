import styled from "styled-components";
import { colors, shadows, borderRadius } from "../colors";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const ProjectsSection = styled.section`
  padding: 6rem 0;
  background: ${colors.bgPrimary};
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin: 0 0 3rem 0;
  color: ${colors.accent};
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ProjectCard = styled.div`
  background: ${colors.bgCard};
  border-radius: ${borderRadius.lg};
  padding: 2rem;
  box-shadow: ${shadows.lg};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid ${colors.primaryLight};
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${shadows.xl};
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.accent};
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`;

const ProjectCompany = styled.p`
  color: ${colors.accent};
  font-weight: 600;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
`;

const ProjectDescription = styled.p`
  color: ${colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
`;

const TechTag = styled.span`
  background: ${colors.accent};
  color: ${colors.primaryDark};
  padding: 0.25rem 0.75rem;
  border-radius: ${borderRadius.sm};
  font-size: 0.875rem;
  font-weight: 600;
`;

const ProjectLink = styled.a`
  display: inline-block;
  background: ${colors.primary};
  color: ${colors.textWhite};
  padding: 0.75rem 1.5rem;
  border-radius: ${borderRadius.md};
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;

  &:hover {
    background: ${colors.accent};
    color: ${colors.primaryDark};
  }
`;

const CardShape = styled.div`
  position: absolute;
  z-index: 1;
`;

const CardShape1 = styled(CardShape)`
  top: -20px;
  right: -20px;
  width: 80px;
  height: 80px;
  background: ${colors.accent};
  border-radius: 50%;
  opacity: 0.1;
`;

const CardShape2 = styled(CardShape)`
  bottom: -30px;
  left: -30px;
  width: 100px;
  height: 100px;
  background: ${colors.primary};
  border-radius: 50%;
  opacity: 0.1;
`;

const CardShape3 = styled(CardShape)`
  top: 50%;
  right: -40px;
  width: 60px;
  height: 60px;
  background: ${colors.accent};
  border-radius: 50%;
  opacity: 0.15;
`;

function Projects() {
  const { language } = useLanguage();
  const t = translations[language];
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  // Datos de los proyectos con traducciones
  const projectsData = [
    {
      id: 1,
      technologies: ["React"],
      link: "https://www.maxximundo.com/",
    },
    {
      id: 2,
      technologies: ["React Native", "Supabase", "iOS/Android"],
      link: "https://www.mamakanguroprocare.com/",
    },
    {
      id: 3,
      technologies: ["React", "PostGreSQL", "Tailwind CSS", "Railway"],
      link: "https://www.aimec-ec.com/",
    },
    {
      id: 4,
      technologies: ["React"],
      link: "https://heyagendo.com/",
    },
    {
      id: 5,
      technologies: ["React"],
      link: "https://app.heyagendo.com/",
    },
    {
      id: 6,
      technologies: ["Flutter"],
      link: "https://play.google.com/store/apps/details?id=com.cuidatuplata.app&pcampaignid=web_share",
    },
  ];

  // Combinar datos estáticos con traducciones
  const projects = projectsData.map((project, index) => ({
    ...project,
    ...t.projects.items[index],
  }));

  return (
    <ProjectsSection
      id="proyectos"
      ref={ref}
      className={`projects-section section-fade-in ${
        isVisible ? "visible" : ""
      }`}
    >
      <Container className="container">
        <SectionTitle className="section-title">
          {t.projects.title}
        </SectionTitle>
        <ProjectsGrid className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              className="project-card"
              onClick={() => window.open(project.link, "_blank")}
            >
              <CardShape1 />
              <CardShape2 />
              <CardShape3 />

              <ProjectTitle className="project-title">
                {project.title}
              </ProjectTitle>
              <ProjectCompany>{project.company}</ProjectCompany>
              <ProjectDescription className="project-description">
                {project.description}
              </ProjectDescription>

              <ProjectTech>
                {project.technologies.map((tech, index) => (
                  <TechTag key={index} className="tech-tag">
                    {tech}
                  </TechTag>
                ))}
              </ProjectTech>

              <ProjectLink
                href="#"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.link, "_blank");
                }}
              >
                {t.projects.verProyecto}
              </ProjectLink>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
}

export default Projects;
