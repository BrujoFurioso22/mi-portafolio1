import './App.css';
import { colors } from './colors';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  // Estilos para el contenedor principal
  const appStyle = {
    minHeight: '100vh',
    background: colors.bgPrimary,
    color: colors.textPrimary
  };

  return (
    <div style={appStyle}>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;