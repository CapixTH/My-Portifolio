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

const Skills = () => (
  <div>
    <h2 className="text-center">Minhas Skills</h2>
    <p
      className="text-justify"
      style={{
        color: '#D2D2D3',
      }}
    >
      Atuo como desenvolvedor de software e tenho paixão por construir soluções
      modernas, eficientes e escaláveis. Estou sempre em busca de novos
      aprendizados e me atualizo constantemente, porque o mundo da tecnologia
      está sempre em movimento, e eu faço questão de acompanhar essa evolução.
    </p>
  </div>
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

// Estilo CSS para evitar qualquer efeito de hover
const buttonHoverStyle = `
  .no-hover-selected:hover, .no-hover-selected:focus {
    background-color: #5856D6 !important; // Mantém fundo primário
    color: white !important; // Mantém texto branco
    border-color: #5856D6 !important; // Mantém borda primária
  }
  .no-hover-outline:hover, .no-hover-outline:focus {
    background-color: transparent !important; // Mantém fundo transparente
    color: #5856D6 !important; // Mantém texto primário
    border-color: #5856D6 !important; // Mantém borda primária
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
