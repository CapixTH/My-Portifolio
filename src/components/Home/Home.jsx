import { FaGithub, FaLinkedin } from 'react-icons/fa';
import cv from '../../img/cv.jpg';
import { CContainer, CRow, CCol, CImage, CButton } from '@coreui/react';

const Home = () => {
  return (
    <CContainer className="pb-5 pt-2 home-mobile-stack">
      <div className="d-flex flex-column align-items-center justify-content-center gap-3 w-100">
        <nav className="w-100 mb-2" />
        <img
          src={cv}
          alt="Portfólio Guilherme Batista"
          className="rounded-circle mx-auto"
          style={{
            width: '180px',
            height: '180px',
            border: '5px solid #5856D6',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            objectFit: 'cover',
            marginBottom: '1rem',
          }}
        />
        <h5 className="text-white text-center mt-2">
          Desenvolvedor de Software
        </h5>
        <p className="display-5 text-wrap font-weight-bold text-light text-center mb-1">
          Olá, eu sou <br />
          <span style={{ color: '#5856D6', fontWeight: 'bold' }}>
            Guilherme Batista
          </span>
        </p>
        <p
          style={{
            color: '#D2D2D3',
            textAlign: 'center',
            paddingTop: '10px',
            maxWidth: '400px',
            margin: '0 auto',
          }}
        >
          Desenvolvedor de software com experiência no desenvolvimento de
          soluções criativas e eficazes, tanto para front-end quanto para
          back-end. Domino diversas tecnologias para criar aplicações ágeis,
          seguras e de alta performance. Explore meu portfólio e veja como posso
          contribuir com soluções sob medida para o seu projeto.
        </p>
        <div className="d-flex align-items-center justify-content-center gap-4 mt-3">
          <CButton
            color="link"
            href="https://github.com/CapixTH"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: 0 }}
          >
            <FaGithub
              style={{ width: '40px', height: '40px', color: '#fff' }}
            />
          </CButton>
          <CButton
            color="link"
            href="https://www.linkedin.com/in/guilherme-batista-9a6b692b9"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: 0 }}
          >
            <FaLinkedin
              style={{ width: '40px', height: '40px', color: '#5856D6' }}
            />
          </CButton>
        </div>
      </div>
    </CContainer>
  );
};

export default Home;
