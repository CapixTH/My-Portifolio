import { FaGithub, FaLinkedin } from 'react-icons/fa';
import cv from '../../img/cv.jpg';
import { CContainer, CRow, CCol, CImage, CButton } from '@coreui/react';

const Home = () => {
  return (
    <CContainer className="ps-5 pb-5 pt-2">
      <CRow className="align-items-center justify-content-center g-4 flex-nowrap pb-5">
        <CCol
          xs={12}
          md={7}
          className="text-start d-flex flex-column justify-content-center"
          style={{ maxWidth: '600px' }}
        >
          <h5 className="text-white text-center">Desenvolvedor de Software</h5>
          <p className="display-3 text-wrap font-weight-bold text-light text-center">
            Olá, eu sou <br />
            <span style={{ color: '#5856D6', fontWeight: 'bold' }}>
              Guilherme Batista
            </span>
          </p>
          <p
            style={{
              color: '#D2D2D3',
              textAlign: 'justify',
              paddingTop: '10px',
            }}
          >
            Desenvolvedor de software com experiência no desenvolvimento de
            soluções criativas e eficazes, tanto para front-end quanto para
            back-end. Domino diversas tecnologias para criar aplicações ágeis,
            seguras e de alta performance. Explore meu portfólio e veja como
            posso contribuir com soluções sob medida para o seu projeto.
          </p>
        </CCol>
        <CCol xs={12} md={5} className="d-flex justify-content-center">
          <img
            src={cv}
            alt="Portfólio Guilherme Batista"
            className="rounded-circle"
            style={{
              width: '280px',
              height: '280px',
              border: '5px solid #5856D6',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              objectFit: 'cover',
            }}
          />
        </CCol>
      </CRow>
      <CRow className="justify-content-center pt-3">
        <CCol
          xs={12}
          className="d-flex align-items-center justify-content-center gap-4"
        >
          <CButton
            color="link"
            href="https://github.com/CapixTH"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: 0 }}
          >
            <FaGithub
              style={{ width: '50px', height: '50px', color: '#fff' }}
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
              style={{ width: '50px', height: '50px', color: '#5856D6' }}
            />
          </CButton>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default Home;
