import { colors } from "../colors";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

function About() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  // Estilos para la sección sobre mí
  const aboutSectionStyle = {
    padding: "6rem 0",
    background: colors.bgSecondary,
    position: "relative",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 2rem",
  };

  const sectionTitleStyle = {
    fontSize: "2.5rem",
    fontWeight: 700,
    textAlign: "center",
    marginBottom: "3rem",
    color: colors.accent,
    margin: "0 0 3rem 0",
  };

  const aboutContentStyle = {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "4rem",
    alignItems: "center",
  };

  const aboutTextStyle = {
    fontSize: "1.1rem",
    lineHeight: 1.8,
    marginBottom: "1.5rem",
    color: colors.textSecondary,
    margin: "0 0 1.5rem 0",
  };

  const aboutShapesStyle = {
    position: "relative",
    height: "300px",
  };

  const shapeBaseStyle = {
    position: "absolute",
    borderRadius: "50%",
    background: colors.accent,
    opacity: 0.1,
    animation: "float 6s ease-in-out infinite",
  };

  const shape4Style = {
    ...shapeBaseStyle,
    width: "120px",
    height: "120px",
    top: "20%",
    right: "20%",
    background: colors.accent,
    opacity: 0.2,
    animationDelay: "1s",
  };

  const shape5Style = {
    ...shapeBaseStyle,
    width: "80px",
    height: "80px",
    top: "60%",
    right: "40%",
    background: colors.accent,
    opacity: 0.3,
    animationDelay: "3s",
  };

  return (
    <section
      id="sobre-mi"
      ref={ref}
      style={aboutSectionStyle}
      className={`about-section section-fade-in ${isVisible ? "visible" : ""}`}
    >
      <div style={containerStyle} className="container">
        <h2 style={sectionTitleStyle} className="section-title">
          Sobre Mí
        </h2>
        <div style={aboutContentStyle} className="about-content">
          <div>
            <p style={aboutTextStyle} className="about-text">
              Soy Diego Barbecho, un desarrollador de software con 3 años de
              experiencia en el área de Desarrollo y Sistemas. Especializado en
              frontend, trabajo principalmente con React, JavaScript, React
              Native, Flutter, HTML y CSS para crear interfaces web y móviles
              atractivas y funcionales. También tengo conocimientos básicos en
              backend con Python y Express.js, así como en bases de datos con
              SQL.
            </p>
            <p style={aboutTextStyle} className="about-text">
              Me considero una persona responsable, organizada y comprometida.
              Manejo herramientas de despliegue como Vercel, Supabase, Netlify y Railway,
              y tengo experiencia en el desarrollo de aplicaciones móviles para
              iOS y Android. Estoy entusiasmado por aplicar los conocimientos
              adquiridos y seguir aprendiendo de equipos profesionales.
            </p>
          </div>
          <div style={aboutShapesStyle} className="about-shapes">
            <div style={shape4Style}></div>
            <div style={shape5Style}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
