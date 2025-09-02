import { colors, shadows, borderRadius } from "../colors";
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
function Contact() {
  // Estilos para la sección de contacto
  const contactSectionStyle = {
    padding: "6rem 0",
    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`,
    position: "relative",
    overflow: "hidden",
  };

  const contactContentStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 2rem",
    position: "relative",
    zIndex: 2,
  };

  const contactTitleStyle = {
    fontSize: "2.5rem",
    fontWeight: 700,
    textAlign: "center",
    marginBottom: "1rem",
    color: colors.textWhite,
  };

  const contactSubtitleStyle = {
    fontSize: "1.2rem",
    textAlign: "center",
    marginBottom: "3rem",
    color: colors.textWhite,
    opacity: 0.9,
  };

  const contactGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    marginTop: "3rem",
  };

  const contactCardStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: colors.bgCard,
    borderRadius: borderRadius.lg,
    padding: "2rem",
    textAlign: "center",
    boxShadow: shadows.lg,
    position: "relative",
    overflow: "hidden",
    transition: "all 0.3s ease",
    border: `1px solid ${colors.gray200}`,
  };

  const contactIconStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: `linear-gradient(45deg, ${colors.accent}, ${colors.accentLight})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 1.5rem",
    fontSize: "1.2rem",
    color: colors.primaryDark,
    fontWeight: "bold",
  };

  const contactCardTitleStyle = {
    fontSize: "1.25rem",
    fontWeight: 700,
    color: colors.primary,
    marginBottom: "1rem",
  };

  const contactCardTextStyle = {
    color: colors.textSecondary,
    fontSize: "1rem",
    lineHeight: 1.6,
    marginBottom: "1.5rem",
  };
  const contactCardTextStyle2 = {
    color: colors.primary,
    fontSize: "0.9rem",
    lineHeight: 1.1,
    marginBottom: "1.5rem",
  };

  const contactLinkStyle = {
    display: "inline-block",
    background: colors.primary,
    color: colors.textWhite,
    padding: "0.75rem 1.5rem",
    borderRadius: borderRadius.md,
    textDecoration: "none",
    fontWeight: 600,
    transition: "all 0.3s ease",
  };

  // Formas decorativas para contacto
  const contactShape1Style = {
    position: "absolute",
    top: "10%",
    left: "10%",
    width: "150px",
    height: "150px",
    background: `linear-gradient(45deg, ${colors.accent}, ${colors.accentLight})`,
    borderRadius: "50%",
    opacity: 0.1,
    zIndex: 1,
  };

  const contactShape2Style = {
    position: "absolute",
    bottom: "20%",
    right: "15%",
    width: "200px",
    height: "200px",
    background: `linear-gradient(45deg, ${colors.accentLight}, ${colors.accent})`,
    borderRadius: "50%",
    opacity: 0.1,
    zIndex: 1,
  };

  const contactShape3Style = {
    position: "absolute",
    top: "50%",
    left: "5%",
    width: "100px",
    height: "100px",
    background: `linear-gradient(45deg, ${colors.primaryLight}, ${colors.accent})`,
    borderRadius: "50%",
    opacity: 0.15,
    zIndex: 1,
  };

  // Datos de contacto
  const contactInfo = [
    {
      id: 1,
      icon: <FaPhone />,
      title: "Teléfono",
      text: "Disponible para llamadas y WhatsApp",
      text2: "+593 96 930 7527",
      link: "tel:+593969307527", // Cambia por tu número real
      linkText: "Llamar Ahora",
    },
    {
      id: 2,
      icon: <FaEnvelope />,
      title: "Email",
      text: "Respuesta rápida en 24 horas",
      text2: "diegobw13@gmail.com",
      link: "mailto:diegobw13@gmail.com",
      linkText: "Enviar Email",
    },
    {
      id: 3,
      icon: <FaLinkedin />,
      title: "LinkedIn",
      text: "Conecta conmigo profesionalmente",
      text2: "diegobarbechoc",
      link: "https://www.linkedin.com/in/diegobarbechoc/",
      linkText: "Ver Perfil",
    },
  ];

  return (
    <section
      id="contacto"
      style={contactSectionStyle}
      className="contact-section"
    >
      {/* Formas decorativas de fondo */}
      <div style={contactShape1Style}></div>
      <div style={contactShape2Style}></div>
      <div style={contactShape3Style}></div>

      <div style={contactContentStyle}>
        <h2 style={contactTitleStyle} className="contact-title">
          Contáctame
        </h2>
        <p style={contactSubtitleStyle} className="contact-subtitle">
          ¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!
        </p>

        <div style={contactGridStyle} className="contact-grid">
          {contactInfo.map((contact) => (
            <div
              key={contact.id}
              style={contactCardStyle}
              className="contact-card"
              onMouseEnter={(e) => {
                // Solo aplicar el efecto al contenedor principal, no a los hijos
                if (e.target === e.currentTarget) {
                  e.target.style.transform = "translateY(-5px)";
                  e.target.style.boxShadow = shadows.xl;
                }
              }}
              onMouseLeave={(e) => {
                // Solo aplicar el efecto al contenedor principal, no a los hijos
                if (e.target === e.currentTarget) {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = shadows.lg;
                }
              }}
            >
              <div style={contactIconStyle} className="contact-icon">
                {contact.icon}
              </div>
              <h3 style={contactCardTitleStyle} className="contact-card-title">
                {contact.title}
              </h3>
              <p style={contactCardTextStyle} className="contact-card-text">
                {contact.text}
              </p>
              <p style={contactCardTextStyle2}>{contact.text2}</p>
              <a
                href={contact.link}
                style={contactLinkStyle}
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={(e) => {
                  e.target.style.background = colors.accent;
                  e.target.style.color = colors.primaryDark;
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = colors.primary;
                  e.target.style.color = colors.textWhite;
                  e.target.style.transform = "translateY(0)";
                }}
              >
                {contact.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
