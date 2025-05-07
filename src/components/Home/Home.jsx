import cv from '../../img/cv.jpg';
// import teste from '../../img/teste.jpg';
import './Home.css'; // (se quiser separar estilos)

const Home = () => {
  return (
    <div className="d-flex align-items-center justify-content-around flex-wrap text-center">
      <div style={{ maxWidth: '600px' }}>
        <h5>Desenvolvedor de Software</h5>
        <p className="display-3 text-wrap font-weight-bold">
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
          seguras e de alta performance. Explore meu portfólio e veja como posso
          contribuir com soluções sob medida para o seu projeto.
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
  );
};

export default Home;
