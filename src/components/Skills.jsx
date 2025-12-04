import { colors, shadows, borderRadius } from "../colors";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

function Skills() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  // Estilos para la sección de skills
  const skillsSectionStyle = {
    padding: "4rem 2rem",
    background: colors.primaryDark,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  };

  const skillsTitleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: colors.textWhite,
    marginBottom: "1rem",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
  };

  const skillsSubtitleStyle = {
    fontSize: "1.2rem",
    color: colors.textWhite,
    marginBottom: "3rem",
    textAlign: "center",
    maxWidth: "600px",
    lineHeight: 1.6,
    opacity: 0.95,
    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
  };

  const skillsGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "2rem",
    maxWidth: "1200px",
    width: "100%",
    position: "relative",
    zIndex: 2,
  };

  const skillCardStyle = {
    background: colors.bgCard,
    borderRadius: borderRadius.lg,
    padding: "2rem",
    textAlign: "center",
    boxShadow: shadows.card,
    transition: "all 0.3s ease",
    border: `2px solid transparent`,
    position: "relative",
    overflow: "hidden",
  };

  const skillCardHoverStyle = {
    transform: "translateY(-10px)",
    boxShadow: shadows.cardHover,
    borderColor: colors.primary,
  };

  const skillIconStyle = {
    width: "80px",
    height: "80px",
    margin: "0 auto 1.5rem",
    borderRadius: borderRadius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2.5rem",
    background: `${colors.primary}20`,
    border: `2px solid ${colors.primary}30`,
  };

  const skillNameStyle = {
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: colors.accent,
    marginBottom: "0.5rem",
  };

  const skillLevelStyle = {
    fontSize: "0.9rem",
    color: colors.textSecondary,
    marginBottom: "1rem",
  };

  const skillDescriptionStyle = {
    fontSize: "0.85rem",
    color: colors.textSecondary,
    lineHeight: 1.4,
  };

  // Formas decorativas
  const decorativeShape1Style = {
    position: "absolute",
    top: "10%",
    left: "5%",
    width: "100px",
    height: "100px",
    background: `${colors.accent}30`,
    borderRadius: "50%",
    zIndex: 1,
  };

  const decorativeShape2Style = {
    position: "absolute",
    top: "20%",
    right: "10%",
    width: "80px",
    height: "80px",
    background: `${colors.accent}30`,
    borderRadius: "20px",
    transform: "rotate(45deg)",
    zIndex: 1,
  };

  const decorativeShape3Style = {
    position: "absolute",
    bottom: "15%",
    left: "15%",
    width: "60px",
    height: "60px",
    background: `${colors.accent}40`,
    borderRadius: "50%",
    zIndex: 1,
  };

  const decorativeShape4Style = {
    position: "absolute",
    bottom: "25%",
    right: "5%",
    width: "120px",
    height: "120px",
    background: `${colors.accent}20`,
    borderRadius: "30px",
    transform: "rotate(-30deg)",
    zIndex: 1,
  };

  // Datos de las tecnologías
  const technologies = [
    {
      id: 1,
      name: "JavaScript",
      level: "Avanzado",
      description: "ES6+, Node.js, Express, APIs REST",
      icon: "/images/technologies/javascript.svg",
      color: "#F7DF1E",
    },
    {
      id: 2,
      name: "React",
      level: "Avanzado",
      description: "Hooks, Context, Redux, Next.js",
      icon: "/images/technologies/react.svg",
      color: "#61DAFB",
    },
    {
      id: 3,
      name: "Python",
      level: "Intermedio",
      description: "Django, Flask, Data Science, Automation",
      icon: "/images/technologies/python.svg",
      color: "#3776AB",
    },
    {
      id: 4,
      name: "HTML/CSS",
      level: "Avanzado",
      description: "Responsive Design, CSS Grid, Flexbox",
      icon: "/images/technologies/html.svg",
      color: "#E34F26",
    },
    {
      id: 5,
      name: "Git",
      level: "Básico",
      description: "Control de versiones, GitHub básico",
      icon: "/images/technologies/git.svg",
      color: "#F05032",
    },
    {
      id: 6,
      name: "SQL",
      level: "Intermedio",
      description: "MySQL, PostgreSQL, Database Design",
      icon: "/images/technologies/sql.svg",
      color: "#336791",
    },
    {
      id: 7,
      name: "VS Code",
      level: "Avanzado",
      description: "Editor de código, extensiones, debugging",
      icon: "/images/technologies/vscode.svg",
      color: "#007ACC",
    },
    {
      id: 8,
      name: "Node.js",
      level: "Básico",
      description: "JavaScript backend, npm, Express básico",
      icon: "/images/technologies/nodejs.svg",
      color: "#339933",
    },
    {
      id: 9,
      name: "Flutter",
      level: "Intermedio",
      description: "Flutter, Dart, API REST",
      icon: "/images/technologies/flutter.svg",
      color: "#02569B",
    },
    {
      id: 10,
      name: "React Native",
      level: "Intermedio",
      description: "React Native, JavaScript, API REST",
      icon: "/images/technologies/react-native.svg",
      color: "#61DAFB",
    },
    {
      id: 11,
      name: "Supabase",
      level: "Intermedio",
      description: "Supabase, JavaScript, API REST",
      icon: "/images/technologies/supabase.svg",
      color: "#3776AB",
    },
  ];

  const handleCardHover = (e, isEntering) => {
    if (e.target === e.currentTarget) {
      if (isEntering) {
        Object.assign(e.target.style, skillCardHoverStyle);
      } else {
        e.target.style.transform = "translateY(0)";
        e.target.style.boxShadow = shadows.card;
        e.target.style.borderColor = "transparent";
      }
    }
  };

  return (
    <section
      id="skills"
      ref={ref}
      style={skillsSectionStyle}
      className={`skills-section section-fade-in ${isVisible ? "visible" : ""}`}
    >
      {/* Formas decorativas */}
      <div style={decorativeShape1Style}></div>
      <div style={decorativeShape2Style}></div>
      <div style={decorativeShape3Style}></div>
      <div style={decorativeShape4Style}></div>

      <h2 style={skillsTitleStyle} className="section-title">
        Tecnologías que Manejo
      </h2>
      <p style={skillsSubtitleStyle}>
        Herramientas y lenguajes que utilizo para crear soluciones digitales
        innovadoras
      </p>

      <div style={skillsGridStyle} className="skills-grid">
        {technologies.map((tech) => (
          <div
            key={tech.id}
            style={skillCardStyle}
            className="skill-card"
            onMouseEnter={(e) => handleCardHover(e, true)}
            onMouseLeave={(e) => handleCardHover(e, false)}
          >
            <div style={skillIconStyle} className="skill-icon">
              <img
                src={tech.icon}
                alt={tech.name}
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "contain",
                }}
              />
            </div>
            <h3 style={skillNameStyle} className="skill-name">
              {tech.name}
            </h3>
            <p style={skillLevelStyle} className="skill-level">
              {tech.level}
            </p>
            <p style={skillDescriptionStyle} className="skill-description">
              {tech.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
