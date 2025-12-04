import styled from "styled-components";
import { colors, shadows, borderRadius } from "../colors";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const HeaderNav = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(31, 41, 55, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 0;
  box-shadow: ${shadows.md};
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h2`
  color: ${colors.accent};
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled.a`
  color: ${colors.textWhite};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: ${colors.accent};
  }
`;

const LanguageButton = styled.button`
  background: ${colors.accent};
  color: ${colors.primaryDark};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: ${borderRadius.md};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background: ${colors.accentDark};
    transform: scale(1.05);
  }
`;

function Header() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

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
    <HeaderNav className="header-nav">
      <NavContainer className="nav-container">
        <div>
          <Logo className="logo">{t.header.logo}</Logo>
        </div>
        <NavMenu className="nav-menu">
          <NavLink href="#inicio" onClick={(e) => handleNavClick(e, "inicio")}>
            {t.header.nav.inicio}
          </NavLink>
          <NavLink
            href="#sobre-mi"
            onClick={(e) => handleNavClick(e, "sobre-mi")}
          >
            {t.header.nav.sobreMi}
          </NavLink>
          <NavLink href="#skills" onClick={(e) => handleNavClick(e, "skills")}>
            {t.header.nav.tecnologias}
          </NavLink>
          <NavLink
            href="#proyectos"
            onClick={(e) => handleNavClick(e, "proyectos")}
          >
            {t.header.nav.proyectos}
          </NavLink>
          <NavLink
            href="#contacto"
            onClick={(e) => handleNavClick(e, "contacto")}
          >
            {t.header.nav.contacto}
          </NavLink>
          <LanguageButton onClick={toggleLanguage} aria-label="Cambiar idioma">
            {language === "es" ? "EN" : "ES"}
          </LanguageButton>
        </NavMenu>
      </NavContainer>
    </HeaderNav>
  );
}

export default Header;
