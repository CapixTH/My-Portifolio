const Home = () => {
  return (
    <>
      <div>
        <h5>Desenvolvedor de Software</h5>
        <p className="display-3 text-wrap font-weight-bold">
          Olá, eu sou <br />
          <span style={{ color: '#5856D6', fontWeight: 'bold' }}>
            Guilherme Batista
          </span>
        </p>
        <p
          style={{
            width: '50%',
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
    </>
  );
};

export default Home;
