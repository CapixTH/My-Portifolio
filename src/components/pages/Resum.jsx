import React, { useState } from 'react';
import {
  CContainer,
  CRow,
  CCol,
  CButtonGroup,
  CButton,
  CCard,
  CCardBody,
} from '@coreui/react';
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import { DiJavascript } from 'react-icons/di';
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi';
import { VscVscode } from 'react-icons/vsc';

// Componentes separados para cada seção
const Experience = () => (
  <div>
    <h2 className="text-center">Minha experiência</h2>
    <p
      className="text-justify"
      style={{
        color: '#D2D2D3',
      }}
    >
      Sou um desenvolvedor full-stack com atuação em business intelligence e
      análise de dados. Tenho experiência na criação de sistemas do início ao
      fim, aprendendo novas tecnologias para melhorar a gestão e os processos
      empresariais. Meu objetivo é converter dados em decisões estratégicas e
      transformar ideias em soluções digitais práticas e eficazes.
    </p>
  </div>
);

const Education = () => (
  <div>
    <h2 className="text-center">Minha educação</h2>
    <p
      className="text-justify"
      style={{
        color: '#D2D2D3',
      }}
    >
      Sou um desenvolvedor de software entusiasta por aprendizado contínuo,
      constantemente buscando novas tecnologias e expandindo meus conhecimentos.
      Pretendo cursar um mestrado e acredito que a combinação entre teoria e
      prática é essencial para desenvolver soluções realmente inovadoras.
    </p>
  </div>
);

const skillColors = {
  react: '#61DAFB',
  html: '#E44D26',
  css: '#1572B6',
  js: '#F7DF1E',
  python: '#3776AB',
  excel: '#217346',
  bootstrap: '#7952B3',
  vscode: '#0078D7',
};

const Skills = () => (
  <>
    <style>{`
      .skill-icon {
        transition: color 0.3s, fill 0.3s, transform 0.3s;
        cursor: pointer;
        color: #fff;
        fill: #fff;
      }
      .skill-react:hover { color: ${skillColors.react} !important; fill: ${skillColors.react} !important; transform: scale(1.15); }
      .skill-html:hover { color: ${skillColors.html} !important; fill: ${skillColors.html} !important; transform: scale(1.15); }
      .skill-css:hover { color: ${skillColors.css} !important; fill: ${skillColors.css} !important; transform: scale(1.15); }
      .skill-js:hover { color: ${skillColors.js} !important; fill: ${skillColors.js} !important; transform: scale(1.15); }
      .skill-python:hover { color: ${skillColors.python} !important; fill: ${skillColors.python} !important; transform: scale(1.15); }
      .skill-excel:hover { color: ${skillColors.excel} !important; fill: ${skillColors.excel} !important; transform: scale(1.15); }
      .skill-bootstrap:hover { color: ${skillColors.bootstrap} !important; fill: ${skillColors.bootstrap} !important; transform: scale(1.15); }
      .skill-vscode:hover { color: ${skillColors.vscode} !important; fill: ${skillColors.vscode} !important; transform: scale(1.15); }
    `}</style>
    <div>
      <h2 className="text-center">Minhas Skills</h2>
      <p
        className="text-justify mb-5"
        style={{
          color: '#D2D2D3',
        }}
      >
        Atuo como desenvolvedor de software e tenho paixão por construir soluções
        modernas, eficientes e escaláveis. Estou sempre em busca de novos
        aprendizados e me atualizo constantemente, porque o mundo da tecnologia
        está sempre em movimento, e eu faço questão de acompanhar essa evolução.
      </p>
      <CRow className="mt-4 justify-content-center">
        <CCol xs={3} className="text-center border-2 border-primary">
          <FaReact className="skill-icon skill-react" style={{ fontSize: '3rem' }} />
        </CCol>
        <CCol xs={3} className="text-center">
          <FaHtml5 className="skill-icon skill-html" style={{ fontSize: '3rem' }} />
        </CCol>
        <CCol xs={3} className="text-center">
          <FaCss3Alt className="skill-icon skill-css" style={{ fontSize: '3rem' }} />
        </CCol>
        <CCol xs={3} className="text-center">
          <DiJavascript className="skill-icon skill-js" style={{ fontSize: '3rem' }} />
        </CCol>
      </CRow>
      <CRow className="mt-5 justify-content-center">
        <CCol xs={3} className="text-center">
          <FaPython className="skill-icon skill-python" style={{ fontSize: '3rem' }} />
        </CCol>
        <CCol xs={3} className="text-center">
          <PiMicrosoftExcelLogoFill className="skill-icon skill-excel" style={{ fontSize: '3rem' }} />
        </CCol>
        <CCol xs={3} className="text-center">
          <FaBootstrap className="skill-icon skill-bootstrap" style={{ fontSize: '3rem' }} />
        </CCol>
        <CCol xs={3} className="text-center">
          <VscVscode className="skill-icon skill-vscode" style={{ fontSize: '3rem' }} />
        </CCol>
      </CRow>
    </div>
  </>
);

const About = () => (
  <div>
    <h2 className="text-center">Sobre mim</h2>
    <p
      className="text-justify"
      style={{
        color: '#D2D2D3',
      }}
    >
      Sou estudante de Engenharia de Software na Universidade UniAcademia e
      tenho experiência prática em inteligência de negócios, com mais de 10
      projetos realizados. Tenho domínio de ferramentas como Power BI, Excel,
      DBeaver, além de tecnologias como Python, JavaScript e React. Sou
      apaixonado por crescer profissionalmente e estou sempre aprendendo, seja
      por meio de cursos online ou projetos práticos.
    </p>
  </div>
);

// Estilo para os botões
const buttonStyle = {
  transition: 'none', // Remove transições para evitar qualquer efeito visual
  borderRadius: '10px', // Bordas arredondadas (aumentei ligeiramente para combinar com o tamanho)
  fontSize: '1.2rem', // Aumenta o tamanho da fonte
  padding: '12px 24px', // Aumenta o preenchimento (altura e largura)
};

// Estilo CSS para hover mais suave nos botões
const buttonHoverStyle = `
  .no-hover-selected:hover, .no-hover-selected:focus {
    background-color: #5856D6 !important;
    color: #e0e0e0 !important; /* Apenas um pouco mais escuro que o branco */
    border-color: #5856D6 !important;
  }
  .no-hover-outline:hover, .no-hover-outline:focus {
    background-color: transparent !important;
    color: #7a7a99 !important; /* Cinza claro, escurece só um pouco */
    border-color: #5856D6 !important;
  }
`;

const Resum = () => {
  const [selected, setSelected] = useState(0);

  // Array de botões para facilitar a renderização
  const buttons = [
    { label: 'Experiência', index: 0 },
    { label: 'Educação', index: 1 },
    { label: 'Habilidades', index: 2 },
    { label: 'Sobre mim', index: 3 },
  ];

  // Mapeamento de componentes para cada seção
  const sections = [
    <Experience key="experience" />,
    <Education key="education" />,
    <Skills key="skills" />,
    <About key="about" />,
  ];

  return (
    <>
      <style>{buttonHoverStyle}</style>
      <CContainer className="py-5">
        <CRow className="justify-content-center">
          <CCol md={3} className="mb-3">
            <CButtonGroup vertical className="w-100">
              {buttons.map((button) => (
                <CButton
                  key={button.index}
                  onClick={() => setSelected(button.index)}
                  className={`mb-3 text-center border-1 border-primary ${
                    selected === button.index
                      ? 'no-hover-selected'
                      : 'no-hover-outline'
                  }`}
                  color={selected === button.index ? 'primary' : 'light'}
                  variant={selected === button.index ? '' : 'outline'}
                  style={{
                    fontWeight: selected === button.index ? 'bold' : 'normal',
                    ...buttonStyle,
                  }}
                >
                  {button.label}
                </CButton>
              ))}
            </CButtonGroup>
          </CCol>
          <CCol md={7}>
            <CCard className="border-0">
              <CCardBody>{sections[selected]}</CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default Resum;
