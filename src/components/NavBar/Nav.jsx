import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import './Nav.css';

const Nav = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <a
            href="Home"
            className="fs-2"
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            Guilherme <span style={{ color: '#5856D6' }}>.</span>
          </a>
        </div>
        <div className="d-inline-flex fs-4 ">
          <a href="/" className="mx-2 nav-link-custom py-1 px-2">
            Home
          </a>
          <a href="services" className="mx-2 nav-link-custom py-1 px-2">
            Serviços
          </a>
          <a href="resum" className="mx-2 nav-link-custom py-1 px-2">
            Resumo
          </a>
          <a href="works" className="mx-2 nav-link-custom py-1 px-2">
            Trabalhos
          </a>
          <a href="contact" className="mx-2 nav-link-custom py-1 px-2">
            Contato
          </a>
          <a href="teste" id="hire-me">
            Hire me
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
