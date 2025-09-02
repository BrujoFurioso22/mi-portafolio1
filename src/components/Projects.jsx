import { colors, shadows, borderRadius } from '../colors';

function Projects() {
  // Estilos para la sección de proyectos
  const projectsSectionStyle = {
    padding: '6rem 0',
    background: colors.bgPrimary,
    position: 'relative'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  };

  const sectionTitleStyle = {
    fontSize: '2.5rem',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '3rem',
    color: colors.primary,
    margin: '0 0 3rem 0'
  };

  const projectsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    marginTop: '3rem'
  };

  const projectCardStyle = {
    background: colors.bgCard,
    borderRadius: borderRadius.lg,
    padding: '2rem',
    boxShadow: shadows.lg,
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    border: `1px solid ${colors.gray200}`
  };

  const projectTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: colors.primary,
    marginBottom: '1rem',
    position: 'relative',
    zIndex: 2
  };

  const projectDescriptionStyle = {
    color: colors.textSecondary,
    lineHeight: 1.6,
    marginBottom: '1.5rem',
    position: 'relative',
    zIndex: 2
  };

  const projectTechStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1.5rem',
    position: 'relative',
    zIndex: 2
  };

  const techTagStyle = {
    background: colors.accent,
    color: colors.primaryDark,
    padding: '0.25rem 0.75rem',
    borderRadius: borderRadius.sm,
    fontSize: '0.875rem',
    fontWeight: 600
  };

  const projectLinkStyle = {
    display: 'inline-block',
    background: colors.primary,
    color: colors.textWhite,
    padding: '0.75rem 1.5rem',
    borderRadius: borderRadius.md,
    textDecoration: 'none',
    fontWeight: 600,
    transition: 'all 0.3s ease',
    position: 'relative',
    zIndex: 2
  };

  // Formas decorativas para las cartas
  const cardShape1Style = {
    position: 'absolute',
    top: '-20px',
    right: '-20px',
    width: '80px',
    height: '80px',
    background: `linear-gradient(45deg, ${colors.accent}, ${colors.accentLight})`,
    borderRadius: '50%',
    opacity: 0.1,
    zIndex: 1
  };

  const cardShape2Style = {
    position: 'absolute',
    bottom: '-30px',
    left: '-30px',
    width: '100px',
    height: '100px',
    background: `linear-gradient(45deg, ${colors.primary}, ${colors.primaryLight})`,
    borderRadius: '50%',
    opacity: 0.1,
    zIndex: 1
  };

  const cardShape3Style = {
    position: 'absolute',
    top: '50%',
    right: '-40px',
    width: '60px',
    height: '60px',
    background: `linear-gradient(45deg, ${colors.accentLight}, ${colors.accent})`,
    borderRadius: '50%',
    opacity: 0.15,
    zIndex: 1
  };

  // Datos de los proyectos
  const projects = [
    {
      id: 1,
      title: "Portales Empresariales",
      company: "Grupo Autollanta",
      description: "Desarrollo de portales web empresariales para gestión interna, incluyendo sistemas de autenticación, modulos de reportes y control de datos.",
      technologies: ["React"],
      link: "https://www.maxximundo.com/"
    },
    {
      id: 2,
      title: "Mamá Kanguro Pro Care",
      company: "App Móvil iOS/Android",
      description: "Aplicación móvil para el cuidado de niños a travez de el servicio de niñeras.",
      technologies: ["React Native", "Supabase", "iOS/Android"],
      link: "https://www.mamakanguroprocare.com/"
    },
    {
      id: 3,
      title: "Web Cotizadora",
      company: "AIMEC",
      description: "Sistema web para cotización de productos industriales con estilo de tienda en linea.",
      technologies: ["React", "PostGreSQL", "Tailwind CSS"],
      link: "https://www.aimec.com/"
    },
    {
      id: 4,
      title: "Web Corporativa",
      company: "Agendo",
      description: "Sitio web moderno con diseño responsive para mostrar los servicios que ofrece la empresa.",
      technologies: ["React","Strapi"],
      link: "https://heyagendo.com/"
    },
    {
      id: 5,
      title: "Portal Web Front-End",
      company: "Agendo",
      description: "Portal web completo con autenticación de usuarios, panel de administración y funcionalidades avanzadas de gestión.",
      technologies: ["React"],
      link: "https://app.heyagendo.com/"
    }
  ];

  return (
    <section id="proyectos" style={projectsSectionStyle} className="projects-section">
      <div style={containerStyle} className="container">
        <h2 style={sectionTitleStyle} className="section-title">Mis Proyectos</h2>
        <div style={projectsGridStyle} className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              style={projectCardStyle}
              className="project-card"
              onMouseEnter={(e) => {
                // Solo aplicar el efecto al contenedor principal, no a los hijos
                if (e.target === e.currentTarget) {
                  e.target.style.transform = 'translateY(-10px)';
                  e.target.style.boxShadow = shadows.xl;
                }
              }}
              onMouseLeave={(e) => {
                // Solo aplicar el efecto al contenedor principal, no a los hijos
                if (e.target === e.currentTarget) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = shadows.lg;
                }
              }}
              onClick={() => window.open(project.link, '_blank')}
            >
              {/* Formas decorativas */}
              <div style={cardShape1Style}></div>
              <div style={cardShape2Style}></div>
              <div style={cardShape3Style}></div>
              
              {/* Contenido de la carta */}
              <h3 style={projectTitleStyle} className="project-title">{project.title}</h3>
              <p style={{...projectDescriptionStyle, fontWeight: 600, color: colors.accent}}>
                {project.company}
              </p>
              <p style={projectDescriptionStyle} className="project-description">
                {project.description}
              </p>
              
              {/* Tecnologías */}
              <div style={projectTechStyle}>
                {project.technologies.map((tech, index) => (
                  <span key={index} style={techTagStyle} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Enlace del proyecto */}
              <a 
                href="#" 
                style={projectLinkStyle}
                onMouseEnter={(e) => {
                  e.target.style.background = colors.accent;
                  e.target.style.color = colors.primaryDark;
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = colors.primary;
                  e.target.style.color = colors.textWhite;
                }}
              >
                Ver Proyecto
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
