import { colors, shadows, borderRadius } from '../colors';

function Header() {
  // Función para scroll suave
  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Manejar clicks en enlaces de navegación
  const handleNavClick = (e, elementId) => {
    e.preventDefault();
    smoothScrollTo(elementId);
  };

  // Estilos para el header
  const headerNavStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    background: 'rgba(6, 78, 59, 0.95)',
    backdropFilter: 'blur(10px)',
    zIndex: 1000,
    padding: '1rem 0',
    boxShadow: shadows.md
  };

  const navContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const logoStyle = {
    color: colors.accent,
    fontSize: '1.5rem',
    fontWeight: 700,
    margin: 0
  };

  const navMenuStyle = {
    display: 'flex',
    gap: '2rem'
  };

  const navLinkStyle = {
    color: colors.textWhite,
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'all 0.3s ease',
    position: 'relative'
  };

  return (
    <header style={headerNavStyle} className="header-nav">
      <div style={navContainerStyle} className="nav-container">
        <div>
          <h2 style={logoStyle} className="logo">Mi Portafolio</h2>
        </div>
        <nav style={navMenuStyle} className="nav-menu">
          <a 
            href="#inicio" 
            style={navLinkStyle}
            onClick={(e) => handleNavClick(e, 'inicio')}
          >
            Inicio
          </a>
          <a 
            href="#sobre-mi" 
            style={navLinkStyle}
            onClick={(e) => handleNavClick(e, 'sobre-mi')}
          >
            Sobre Mí
          </a>
          <a 
            href="#skills" 
            style={navLinkStyle}
            onClick={(e) => handleNavClick(e, 'skills')}
          >
            Tecnologías
          </a>
          <a 
            href="#proyectos" 
            style={navLinkStyle}
            onClick={(e) => handleNavClick(e, 'proyectos')}
          >
            Proyectos
          </a>
          <a 
            href="#contacto" 
            style={navLinkStyle}
            onClick={(e) => handleNavClick(e, 'contacto')}
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
