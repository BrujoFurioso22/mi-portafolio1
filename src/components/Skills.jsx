import styled from "styled-components";
import { colors, shadows, borderRadius } from "../colors";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const SkillsSection = styled.section`
  padding: 4rem 2rem;
  background: ${colors.primaryDark};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SkillsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${colors.textWhite};
  margin-bottom: 1rem;
  text-align: center;
  position: relative;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const SkillsSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${colors.textWhite};
  margin-bottom: 3rem;
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
  opacity: 0.95;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  position: relative;
  z-index: 2;
`;

const SkillCard = styled.div`
  background: ${colors.bgCard};
  border-radius: ${borderRadius.lg};
  padding: 2rem;
  text-align: center;
  box-shadow: ${shadows.card};
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${shadows.cardHover};
    border-color: ${colors.primary};
  }
`;

const SkillIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  border-radius: ${borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  background: ${colors.primary}20;
  border: 2px solid ${colors.primary}30;
`;

const SkillIconImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

const SkillName = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${colors.accent};
  margin-bottom: 0.5rem;
`;

const SkillLevel = styled.p`
  font-size: 0.9rem;
  color: ${colors.textSecondary};
  margin-bottom: 1rem;
`;

const SkillDescription = styled.p`
  font-size: 0.85rem;
  color: ${colors.textSecondary};
  line-height: 1.4;
`;

const DecorativeShape = styled.div`
  position: absolute;
  z-index: 1;
`;

const Shape1 = styled(DecorativeShape)`
  top: 10%;
  left: 5%;
  width: 100px;
  height: 100px;
  background: ${colors.accent}30;
  border-radius: 50%;
`;

const Shape2 = styled(DecorativeShape)`
  top: 20%;
  right: 10%;
  width: 80px;
  height: 80px;
  background: ${colors.accent}30;
  border-radius: 20px;
  transform: rotate(45deg);
`;

const Shape3 = styled(DecorativeShape)`
  bottom: 15%;
  left: 15%;
  width: 60px;
  height: 60px;
  background: ${colors.accent}40;
  border-radius: 50%;
`;

const Shape4 = styled(DecorativeShape)`
  bottom: 25%;
  right: 5%;
  width: 120px;
  height: 120px;
  background: ${colors.accent}20;
  border-radius: 30px;
  transform: rotate(-30deg);
`;

function Skills() {
  const { language } = useLanguage();
  const t = translations[language];
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  // Datos de las tecnologías
  const technologies = [
    {
      id: 1,
      name: "JavaScript",
      levelKey: "avanzado",
      descriptionKey: "javascript",
      icon: "/images/technologies/javascript.svg",
      color: "#F7DF1E",
    },
    {
      id: 2,
      name: "React",
      levelKey: "avanzado",
      descriptionKey: "react",
      icon: "/images/technologies/react.svg",
      color: "#61DAFB",
    },
    {
      id: 3,
      name: "Python",
      levelKey: "intermedio",
      descriptionKey: "python",
      icon: "/images/technologies/python.svg",
      color: "#3776AB",
    },
    {
      id: 4,
      name: "HTML/CSS",
      levelKey: "avanzado",
      descriptionKey: "htmlcss",
      icon: "/images/technologies/html.svg",
      color: "#E34F26",
    },
    {
      id: 5,
      name: "Git",
      levelKey: "basico",
      descriptionKey: "git",
      icon: "/images/technologies/git.svg",
      color: "#F05032",
    },
    {
      id: 6,
      name: "SQL",
      levelKey: "intermedio",
      descriptionKey: "sql",
      icon: "/images/technologies/sql.svg",
      color: "#336791",
    },
    {
      id: 7,
      name: "VS Code",
      levelKey: "avanzado",
      descriptionKey: "vscode",
      icon: "/images/technologies/vscode.svg",
      color: "#007ACC",
    },
    {
      id: 8,
      name: "Node.js",
      levelKey: "basico",
      descriptionKey: "nodejs",
      icon: "/images/technologies/nodejs.svg",
      color: "#339933",
    },
    {
      id: 9,
      name: "Flutter",
      levelKey: "intermedio",
      descriptionKey: "flutter",
      icon: "/images/technologies/flutter.svg",
      color: "#02569B",
    },
    {
      id: 10,
      name: "React Native",
      levelKey: "intermedio",
      descriptionKey: "reactnative",
      icon: "/images/technologies/react-native.svg",
      color: "#61DAFB",
    },
    {
      id: 11,
      name: "Supabase",
      levelKey: "intermedio",
      descriptionKey: "supabase",
      icon: "/images/technologies/supabase.svg",
      color: "#3776AB",
    },
  ];

  return (
    <SkillsSection
      id="skills"
      ref={ref}
      className={`skills-section section-fade-in ${isVisible ? "visible" : ""}`}
    >
      <Shape1 />
      <Shape2 />
      <Shape3 />
      <Shape4 />

      <SkillsTitle className="section-title">{t.skills.title}</SkillsTitle>
      <SkillsSubtitle>{t.skills.subtitle}</SkillsSubtitle>

      <SkillsGrid className="skills-grid">
        {technologies.map((tech) => (
          <SkillCard key={tech.id} className="skill-card">
            <SkillIcon className="skill-icon">
              <SkillIconImg src={tech.icon} alt={tech.name} />
            </SkillIcon>
            <SkillName className="skill-name">{tech.name}</SkillName>
            <SkillLevel className="skill-level">
              {t.skills.levels[tech.levelKey]}
            </SkillLevel>
            <SkillDescription className="skill-description">
              {t.skills.technologies[tech.descriptionKey].description}
            </SkillDescription>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
}

export default Skills;
