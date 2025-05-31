import { BsArrowDownRightCircleFill } from 'react-icons/bs';

const Services = () => {
  return (
    <>
      <div className="container pt-3">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="service-card border-bottom border-primary">
              <div>
                <div
                  style={{
                    fontSize: '3rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <div>01</div>
                  <div>
                    <BsArrowDownRightCircleFill />
                  </div>
                </div>
                <h1>Desenvolvimento Web</h1>
              </div>

              <p className='text-secondary'>
                Construção de sites responsivos e de alta performance com foco
                na experiência do usuário e tecnologias modernas.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-card border-bottom border-primary">
              <div
                style={{
                  fontSize: '3rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
              >
                <div>02</div>
                <div>
                  <BsArrowDownRightCircleFill />
                </div>
              </div>
              <h1>Design UI/UX</h1>
              <p className='text-secondary'>
                Criação de interfaces intuitivas e visualmente atraentes que
                aumentam o engajamento do usuário.
              </p>
            </div>
          </div>
          <div className="col-md-6 pt-3">
            <div className="service-card">
              <div
                style={{
                  fontSize: '3rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
              >
                <div>03</div>
                <div>
                  <BsArrowDownRightCircleFill />
                </div>
              </div>
              <h1>Inteligência de Negócios</h1>
              <p className='text-secondary'>
                Transformando dados em insights com análises avançadas e
                visualizações eficazes.
              </p>
            </div>
          </div>
          <div className="col-md-6 pt-3">
            <div className="service-card">
              <div
                style={{
                  fontSize: '3rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
              >
                <div>04</div>
                <div>
                  <BsArrowDownRightCircleFill />
                </div>
              </div>
              <h1>Suporte Técnico</h1>
              <p className='text-secondary'>
                Assistência técnica para resolver problemas de software e
                hardware.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
