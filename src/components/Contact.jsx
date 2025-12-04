import styled from "styled-components";
import { colors, shadows, borderRadius } from "../colors";
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const ContactSection = styled.section`
  padding: 6rem 0;
  background: ${colors.primaryDark};
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

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: ${colors.textWhite};
`;

const ContactSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${colors.textWhite};
  opacity: 0.9;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.bgCard};
  border-radius: ${borderRadius.lg};
  padding: 2rem;
  text-align: center;
  box-shadow: ${shadows.lg};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid ${colors.primaryLight};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${shadows.xl};
  }
`;

const ContactIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.2rem;
  color: ${colors.primaryDark};
  font-weight: bold;
`;

const ContactCardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${colors.accent};
  margin-bottom: 1rem;
`;

const ContactCardText = styled.p`
  color: ${colors.textSecondary};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ContactCardText2 = styled.p`
  color: ${colors.accent};
  font-size: 0.9rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
`;

const ContactLink = styled.a`
  display: inline-block;
  background: ${colors.primary};
  color: ${colors.textWhite};
  padding: 0.75rem 1.5rem;
  border-radius: ${borderRadius.md};
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.accent};
    color: ${colors.primaryDark};
    transform: translateY(-2px);
  }
`;

const ContactShape = styled.div`
  position: absolute;
  z-index: 1;
`;

const ContactShape1 = styled(ContactShape)`
  top: 10%;
  left: 10%;
  width: 150px;
  height: 150px;
  background: ${colors.accent};
  border-radius: 50%;
  opacity: 0.1;
`;

const ContactShape2 = styled(ContactShape)`
  bottom: 20%;
  right: 15%;
  width: 200px;
  height: 200px;
  background: ${colors.accent};
  border-radius: 50%;
  opacity: 0.1;
`;

const ContactShape3 = styled(ContactShape)`
  top: 50%;
  left: 5%;
  width: 100px;
  height: 100px;
  background: ${colors.accent};
  border-radius: 50%;
  opacity: 0.15;
`;

function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  // Datos de contacto
  const contactInfo = [
    {
      id: 1,
      icon: <FaPhone />,
      title: t.contact.phone.title,
      text: t.contact.phone.text,
      text2: "+593 96 930 7527",
      link: "tel:+593969307527",
      linkText: t.contact.phone.linkText,
    },
    {
      id: 2,
      icon: <FaEnvelope />,
      title: t.contact.email.title,
      text: t.contact.email.text,
      text2: "diegobw13@gmail.com",
      link: "mailto:diegobw13@gmail.com",
      linkText: t.contact.email.linkText,
    },
    {
      id: 3,
      icon: <FaLinkedin />,
      title: t.contact.linkedin.title,
      text: t.contact.linkedin.text,
      text2: "diegobarbechoc",
      link: "https://www.linkedin.com/in/diegobarbechoc/",
      linkText: t.contact.linkedin.linkText,
    },
  ];

  return (
    <ContactSection
      id="contacto"
      ref={ref}
      className={`contact-section section-fade-in ${isVisible ? "visible" : ""}`}
    >
      <ContactShape1 />
      <ContactShape2 />
      <ContactShape3 />

      <ContactContent>
        <ContactTitle className="contact-title">
          {t.contact.title}
        </ContactTitle>
        <ContactSubtitle className="contact-subtitle">
          {t.contact.subtitle}
        </ContactSubtitle>

        <ContactGrid className="contact-grid">
          {contactInfo.map((contact) => (
            <ContactCard key={contact.id} className="contact-card">
              <ContactIcon className="contact-icon">
                {contact.icon}
              </ContactIcon>
              <ContactCardTitle className="contact-card-title">
                {contact.title}
              </ContactCardTitle>
              <ContactCardText className="contact-card-text">
                {contact.text}
              </ContactCardText>
              <ContactCardText2>{contact.text2}</ContactCardText2>
              <ContactLink
                href={contact.link}
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.linkText}
              </ContactLink>
            </ContactCard>
          ))}
        </ContactGrid>
      </ContactContent>
    </ContactSection>
  );
}

export default Contact;
