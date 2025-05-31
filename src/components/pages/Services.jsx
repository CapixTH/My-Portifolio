import { BsArrowDownRightCircleFill } from 'react-icons/bs';
import '../Css/Services.css';

const Services = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="service-card border-bottom border-primary border-2">
            <div className="service-header">
              <div>01</div>
              <div className="service-icon">
                <BsArrowDownRightCircleFill />
              </div>
            </div>
            <h1 className="service-title">Desenvolvimento Web</h1>
            <p className="service-description">
              Construção de sites responsivos e de alta performance com foco na
              experiência do usuário e tecnologias modernas.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="service-card border-bottom border-primary border-2">
            <div className="service-header">
              <div>02</div>
              <div className="service-icon">
                <BsArrowDownRightCircleFill />
              </div>
            </div>
            <h1 className="service-title">Design UI/UX</h1>
            <p className="service-description">
              Criação de interfaces intuitivas e visualmente atraentes que
              aumentam o engajamento do usuário.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="service-card border-bottom border-primary border-2">
            <div className="service-header">
              <div>03</div>
              <div className="service-icon">
                <BsArrowDownRightCircleFill />
              </div>
            </div>
            <h1 className="service-title">Inteligência de Negócios</h1>
            <p className="service-description">
              Transformando dados em insights com análises avançadas e
              visualizações eficazes.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="service-card border-bottom border-primary border-2">
            <div className="service-header">
              <div>04</div>
              <div className="service-icon">
                <BsArrowDownRightCircleFill />
              </div>
            </div>
            <h1 className="service-title">Suporte Técnico</h1>
            <p className="service-description">
              Assistência técnica para resolver problemas de software e
              hardware.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
