import { useEffect, useState } from "react";
import { colors, shadows, borderRadius } from "../colors";

function Hero() {
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

  // Estilos para la sección hero
  const heroSectionStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    background: colors.primaryDark,
    position: "relative",
    overflow: "hidden",
    paddingTop: "80px",
  };

  const heroContentStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 2rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4rem",
    alignItems: "center",
    position: "relative",
    zIndex: 2,
    minHeight: "calc(100vh - 80px)",
  };

  const heroTextStyle = {
    color: colors.textWhite,
  };

  const heroTitleStyle = {
    fontSize: "3.5rem",
    fontWeight: 700,
    marginBottom: "1.5rem",
    lineHeight: 1.2,
    margin: 0,
    textAlign: "left",
  };

  const highlightStyle = {
    color: colors.accent,
    position: "relative",
  };

  const heroSubtitleStyle = {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    opacity: 0.9,
    fontWeight: 300,
    margin: "0 0 1rem 0",
    textAlign: "left",
  };

  const heroDescriptionStyle = {
    fontSize: "1.1rem",
    marginBottom: "2.5rem",
    opacity: 0.8,
    lineHeight: 1.6,
    margin: "0 0 2.5rem 0",
    textAlign: "left",
  };

  const heroButtonsStyle = {
    display: "flex",
    gap: "1rem",
  };

  const btnStyle = {
    display: "inline-block",
    padding: "0.875rem 2rem",
    borderRadius: borderRadius.md,
    textDecoration: "none",
    fontWeight: 600,
    transition: "all 0.3s ease",
    border: "2px solid transparent",
  };

  const btnPrimaryStyle = {
    ...btnStyle,
    background: colors.accent,
    color: colors.primaryDark,
    hover: {
      background: colors.accent,
      color: colors.primaryDark,
    },
  };

  const btnOutlineStyle = {
    ...btnStyle,
    background: "transparent",
    color: colors.accent,
    borderColor: colors.accent,
  };

  // Estilos para las formas decorativas
  const heroShapesStyle = {
    position: "relative",
    height: "400px",
  };

  const shapeBaseStyle = {
    position: "absolute",
    borderRadius: "50%",
    background: colors.accent,
    opacity: 0.1,
    animation: "float 6s ease-in-out infinite",
  };

  const shape1Style = {
    ...shapeBaseStyle,
    width: "200px",
    height: "200px",
    top: "20%",
    right: "10%",
    animationDelay: "0s",
  };

  const shape2Style = {
    ...shapeBaseStyle,
    width: "150px",
    height: "150px",
    top: "60%",
    right: "30%",
    animationDelay: "2s",
  };

  const shape3Style = {
    ...shapeBaseStyle,
    width: "100px",
    height: "100px",
    top: "10%",
    right: "50%",
    animationDelay: "4s",
  };

  return (
    <section
      id="inicio"
      style={heroSectionStyle}
      className={`hero-section ${
        isVisible ? "section-fade visible" : "section-fade"
      }`}
    >
      <div style={heroContentStyle} className="hero-content">
        <div style={heroTextStyle}>
          <h1 style={heroTitleStyle} className="hero-title">
            Hola, soy <span style={highlightStyle}>Diego Barbecho</span>
          </h1>
          <p style={heroSubtitleStyle} className="hero-subtitle">
            Desarrollador Frontend
          </p>
          <p style={heroDescriptionStyle} className="hero-description">
            Desarrollador proactivo y motivado, especializado en frontend con
            experiencia en React, JavaScript, React Native, Flutter y tecnologías
            modernas. También tengo conocimientos básicos en backend con Python
            y Express.js. Apasionado por crear interfaces web y móviles
            atractivas y funcionales que generen valor real para las empresas.
          </p>
          <div style={heroButtonsStyle} className="hero-buttons">
            <a
              href="#proyectos"
              style={btnPrimaryStyle}
              onClick={(e) => handleNavClick(e, "proyectos")}
              onMouseEnter={(e) => {
                e.target.style.background = colors.accentDark;
                e.target.style.color = colors.primaryDark;
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = shadows.lg;
              }}
              onMouseLeave={(e) => {
                e.target.style.background = colors.accent;
                e.target.style.color = colors.primaryDark;
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              Ver Proyectos
            </a>
            <a
              href="#contacto"
              style={btnOutlineStyle}
              onClick={(e) => handleNavClick(e, "contacto")}
              onMouseEnter={(e) => {
                e.target.style.background = colors.accent;
                e.target.style.color = colors.primaryDark;
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = shadows.lg;
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = colors.accent;
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              Contactar
            </a>
          </div>
        </div>
        <div style={heroShapesStyle}>
          <div style={shape1Style}></div>
          <div style={shape2Style}></div>
          <div style={shape3Style}></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
