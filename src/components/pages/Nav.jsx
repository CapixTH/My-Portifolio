import React, { useState } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import '../Css/Nav.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md container py-3">
      <a
        href="/"
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
          <a href="/" className="nav-link nav-link-custom mx-2 px-2">
            Home
          </a>
          <a href="services" className="nav-link nav-link-custom mx-2 px-2">
            Serviços
          </a>
          <a href="resum" className="nav-link nav-link-custom mx-2 px-2">
            Resumo
          </a>
          {/* <a href="works" className="nav-link nav-link-custom mx-2 px-2">
            Trabalhos
          </a> */}
          <a href="contact" className="nav-link nav-link-custom mx-2 px-2">
            Contato
          </a>
          <a href="teste" id="hire-me" className="mx-2 mt-2 mt-md-0">
            Hire me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
