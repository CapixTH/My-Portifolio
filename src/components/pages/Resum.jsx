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

const sections = [
  {
    label: 'Experiência',
    content: (
      <div>
        <h2>Experiência</h2>
        <p>Adicione aqui sua experiência profissional.</p>
      </div>
    ),
  },
  {
    label: 'Educação',
    content: (
      <div>
        <h2>Educação</h2>
        <p>Adicione aqui sua formação acadêmica.</p>
      </div>
    ),
  },
  {
    label: 'Habilidades',
    content: (
      <div>
        <h2>Habilidades</h2>
        <p>Adicione aqui suas principais habilidades.</p>
      </div>
    ),
  },
  {
    label: 'Sobre mim',
    content: (
      <div>
        <h2>Sobre mim</h2>
        <p>Adicione aqui uma breve descrição sobre você.</p>
      </div>
    ),
  },
];

const Resum = () => {
  const [selected, setSelected] = useState(0);

  return (
    <CContainer className="py-5">
      <CRow className="justify-content-center">
        <CCol md={3} className="mb-3">
          <CButtonGroup vertical className="w-100">
            {sections.map((section, idx) => (
              <CButton
                key={section.label}
                color={selected === idx ? 'primary' : 'light'}
                variant={selected === idx ? '' : 'outline'}
                onClick={() => setSelected(idx)}
                className="mb-2 text-center px-5 py-2"
                style={{ fontWeight: selected === idx ? 'bold' : 'normal' }}
              >
                {section.label}
              </CButton>
            ))}
          </CButtonGroup>
        </CCol>
        <CCol md={7}>
          <CCard>
            <CCardBody>{sections[selected].content}</CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default Resum;
