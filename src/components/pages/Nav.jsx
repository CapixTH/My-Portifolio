import React, { useState } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import '../Css/Nav.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMenuOpen(false);
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  return (
    <nav
      className="navbar navbar-expand-md py-3"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: '#1c1c22',
        margin: 0,
        width: '100%',
        paddingLeft: '50px',
        paddingRight: '50px',
      }}
    >
      <a
        href="#home"
        onClick={(e) => handleScrollToSection(e, 'home')}
        className="fs-2 navbar-brand"
        style={{ color: '#fff', textDecoration: 'none' }}
      >
        Guilherme <span style={{ color: '#5856D6' }}>.</span>
      </a>

      <button
        className="navbar-toggler text-white border-0"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div
        className={`collapse navbar-collapse justify-content-end ${
          menuOpen ? 'show' : ''
        }`}
      >
        <div className="navbar-nav text-center">
          <a
            href="#home"
            onClick={(e) => handleScrollToSection(e, 'home')}
            className="nav-link nav-link-custom mx-2 px-2"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={(e) => handleScrollToSection(e, 'services')}
            className="nav-link nav-link-custom mx-2 px-2"
          >
            Serviços
          </a>
          <a
            href="#resum"
            onClick={(e) => handleScrollToSection(e, 'resum')}
            className="nav-link nav-link-custom mx-2 px-2"
          >
            Resumo
          </a>
          {/* <a href="#works" className="nav-link nav-link-custom mx-2 px-2">
            Trabalhos
          </a> */}
          <a
            href="#contact"
            onClick={(e) => handleScrollToSection(e, 'contact')}
            className="nav-link nav-link-custom mx-2 px-2"
          >
            Contato
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollToSection(e, 'contact')}
            id="hire-me"
            className="mx-2 mt-2 mt-md-0"
          >
            Hire me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
