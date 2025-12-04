import styled, { keyframes } from "styled-components";
import { colors } from "../colors";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
`;

const AboutSection = styled.section`
  padding: 6rem 0;
  background: ${colors.bgSecondary};
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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 0 0 1.5rem 0;
  color: ${colors.textSecondary};
`;

const AboutShapes = styled.div`
  position: relative;
  height: 300px;
`;

const ShapeBase = styled.div`
  position: absolute;
  border-radius: 50%;
  background: ${colors.accent};
  animation: ${floatAnimation} 6s ease-in-out infinite;
`;

const Shape4 = styled(ShapeBase)`
  width: 120px;
  height: 120px;
  top: 20%;
  right: 20%;
  opacity: 0.2;
  animation-delay: 1s;
`;

const Shape5 = styled(ShapeBase)`
  width: 80px;
  height: 80px;
  top: 60%;
  right: 40%;
  opacity: 0.3;
  animation-delay: 3s;
`;

function About() {
  const { language } = useLanguage();
  const t = translations[language];
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <AboutSection
      id="sobre-mi"
      ref={ref}
      className={`about-section section-fade-in ${isVisible ? "visible" : ""}`}
    >
      <Container className="container">
        <SectionTitle className="section-title">{t.about.title}</SectionTitle>
        <AboutContent className="about-content">
          <div>
            <AboutText className="about-text">{t.about.paragraph1}</AboutText>
            <AboutText className="about-text">{t.about.paragraph2}</AboutText>
          </div>
          <AboutShapes className="about-shapes">
            <Shape4 />
            <Shape5 />
          </AboutShapes>
        </AboutContent>
      </Container>
    </AboutSection>
  );
}

export default About;
