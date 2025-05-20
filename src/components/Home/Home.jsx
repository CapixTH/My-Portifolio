import { FaGithub, FaLinkedin } from 'react-icons/fa';
import cv from '../../img/cv.jpg';

const Home = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-around flex-wrap text-center mt-5">
        <div style={{ maxWidth: '600px' }}>
          <h5 className="text-white">Desenvolvedor de Software</h5>
          <p className="display-3 text-wrap font-weight-bold text-light">
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
        </div>
        <div>
          <img
            src={cv}
            alt="Portfólio Guilherme Batista"
            className="rounded-circle"
            style={{
              width: '350px',
              height: '350px',
              border: '5px solid #5856D6',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            }}
          />
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center flex-wrap  py-5">
        <a
          href="https://github.com/CapixTH"
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex align-items-center justify-content-center flex-wrap py-5"
        >
          <div id="iconGit" type="button">
            <FaGithub
              style={{
                width: '50px',
                height: '50px',
                alignContent: 'center',
              }}
            />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/guilherme-batista-9a6b692b9"
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex align-items-center justify-content-center flex-wrap py-5"
        >
          <div id="iconGit" type="button" className="px-3">
            <FaLinkedin
              style={{
                paddingLeft: '10px',
                width: '50px',
                height: '50px',
                alignContent: 'center',
              }}
            />
          </div>
        </a>
      </div>
    </>
  );
};

export default Home;
