import { BsArrowDownRightCircleFill } from 'react-icons/bs';
import { CContainer, CRow, CCol, CCard, CCardBody } from '@coreui/react';
import '../Css/Services.css';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
  hover: {
    y: -10,
    transition: { duration: 0.3 },
  },
};

const Services = () => {
  const services = [
    {
      number: '01',
      title: 'Desenvolvimento Web',
      description:
        'Construção de sites responsivos e de alta performance com foco na experiência do usuário e tecnologias modernas.',
    },
    {
      number: '02',
      title: 'Design UI/UX',
      description:
        'Criação de interfaces intuitivas e visualmente atraentes que aumentam o engajamento do usuário.',
    },
    {
      number: '03',
      title: 'Inteligência de Negócios',
      description:
        'Transformando dados em insights com análises avançadas e visualizações eficazes.',
    },
    {
      number: '04',
      title: 'Suporte Técnico',
      description:
        'Assistência técnica para resolver problemas de software e hardware.',
    },
  ];

  return (
    <CContainer className="container">
      <CRow>
        {services.map((service, index) => (
          <CCol xs={12} md={6} key={index}>
            <motion.div
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
            >
              <CCard className="service-card border-bottom border-primary border-2">
                <CCardBody>
                  <div className="service-header">
                    <div>{service.number}</div>
                    <div className="service-icon">
                      <BsArrowDownRightCircleFill />
                    </div>
                  </div>
                  <h1 className="service-title">{service.title}</h1>
                  <p className="service-description">{service.description}</p>
                </CCardBody>
              </CCard>
            </motion.div>
          </CCol>
        ))}
      </CRow>
    </CContainer>
  );
};

export default Services;
