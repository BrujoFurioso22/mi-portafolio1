import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { colors, shadows, borderRadius } from "../colors";
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

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: ${colors.primaryDark};
  position: relative;
  overflow: hidden;
  padding-top: 80px;
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;

  &.visible {
    opacity: 1;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
  min-height: calc(100vh - 80px);
`;

const HeroText = styled.div`
  color: ${colors.textWhite};
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0 0 1.5rem 0;
  line-height: 1.2;
  text-align: left;
`;

const Highlight = styled.span`
  color: ${colors.accent};
  position: relative;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  opacity: 0.9;
  font-weight: 300;
  text-align: left;
`;

const HeroDescription = styled.p`
  font-size: 1.1rem;
  margin: 0 0 2.5rem 0;
  opacity: 0.8;
  line-height: 1.6;
  text-align: left;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.875rem 2rem;
  border-radius: ${borderRadius.md};
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid transparent;
`;

const PrimaryButton = styled(Button)`
  background: ${colors.accent};
  color: ${colors.primaryDark};

  &:hover {
    background: ${colors.accentDark};
    transform: translateY(-2px);
    box-shadow: ${shadows.lg};
  }
`;

const OutlineButton = styled(Button)`
  background: transparent;
  color: ${colors.accent};
  border-color: ${colors.accent};
  position: relative;
  z-index: 1;

  &:hover {
    background: ${colors.accent};
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: ${shadows.lg};
  }
`;

const HeroShapes = styled.div`
  position: relative;
  height: 400px;
`;

const ShapeBase = styled.div`
  position: absolute;
  border-radius: 50%;
  background: ${colors.accent};
  opacity: 0.1;
  animation: ${floatAnimation} 6s ease-in-out infinite;
`;

const Shape1 = styled(ShapeBase)`
  width: 200px;
  height: 200px;
  top: 20%;
  right: 10%;
  animation-delay: 0s;
`;

const Shape2 = styled(ShapeBase)`
  width: 150px;
  height: 150px;
  top: 60%;
  right: 30%;
  animation-delay: 2s;
`;

const Shape3 = styled(ShapeBase)`
  width: 100px;
  height: 100px;
  top: 10%;
  right: 50%;
  animation-delay: 4s;
`;

function Hero() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Función para scroll suave
  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Manejar clicks en enlaces de navegación
  const handleNavClick = (e, elementId) => {
    e.preventDefault();
    smoothScrollTo(elementId);
  };

  return (
    <HeroSection
      id="inicio"
      className={`hero-section ${
        isVisible ? "section-fade visible" : "section-fade"
      }`}
    >
      <HeroContent className="hero-content">
        <HeroText>
          <HeroTitle className="hero-title">
            {t.hero.greeting} <Highlight>Diego Barbecho</Highlight>
          </HeroTitle>
          <HeroSubtitle className="hero-subtitle">
            {t.hero.subtitle}
          </HeroSubtitle>
          <HeroDescription className="hero-description">
            {t.hero.description}
          </HeroDescription>
          <HeroButtons className="hero-buttons">
            <PrimaryButton
              href="#proyectos"
              onClick={(e) => handleNavClick(e, "proyectos")}
            >
              {t.hero.buttons.verProyectos}
            </PrimaryButton>
            <OutlineButton
              href="#contacto"
              onClick={(e) => handleNavClick(e, "contacto")}
            >
              {t.hero.buttons.contactar}
            </OutlineButton>
          </HeroButtons>
        </HeroText>
        <HeroShapes>
          <Shape1 />
          <Shape2 />
          <Shape3 />
        </HeroShapes>
      </HeroContent>
    </HeroSection>
  );
}

export default Hero;
