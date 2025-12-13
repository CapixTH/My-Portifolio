import { FaGithub, FaLinkedin } from 'react-icons/fa';
import cv from '../../img/cv.jpg';
import { CContainer, CRow, CCol, CImage, CButton } from '@coreui/react';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 },
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 + 0.4, duration: 0.4 },
  }),
  hover: {
    scale: 1.1,
    transition: { duration: 0.2 },
  },
};

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
          <motion.h5
            className="text-white text-center"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Desenvolvedor de Software
          </motion.h5>
          <motion.p
            className="display-3 text-wrap font-weight-bold text-light text-center"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            Olá, eu sou <br />
            <span style={{ color: '#5856D6', fontWeight: 'bold' }}>
              Guilherme Batista
            </span>
          </motion.p>
          <motion.p
            style={{
              color: '#D2D2D3',
              textAlign: 'justify',
              paddingTop: '10px',
            }}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Desenvolvedor de software com experiência no desenvolvimento de
            soluções criativas e eficazes, tanto para front-end quanto para
            back-end. Domino diversas tecnologias para criar aplicações ágeis,
            seguras e de alta performance. Explore meu portfólio e veja como
            posso contribuir com soluções sob medida para o seu projeto.
          </motion.p>
        </CCol>
        <CCol xs={12} md={5} className="d-flex justify-content-center">
          <div
            style={{
              position: 'relative',
              width: '290px',
              height: '290px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Borda tracejada animada */}
            <motion.div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                border: '5px dashed #5856D6',
                borderRadius: '50%',
                top: 0,
                left: 0,
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            {/* Imagem */}
            <motion.img
              src={cv}
              alt="Portfólio Guilherme Batista"
              className="rounded-circle"
              style={{
                width: '280px',
                height: '280px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                objectFit: 'cover',
                position: 'relative',
                zIndex: 1,
              }}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            />
          </div>
        </CCol>
      </CRow>
      <CRow className="justify-content-center pt-3">
        <CCol
          xs={12}
          className="d-flex align-items-center justify-content-center gap-4"
        >
          <motion.div
            custom={0}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
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
          </motion.div>
          <motion.div
            custom={1}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
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
          </motion.div>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default Home;
