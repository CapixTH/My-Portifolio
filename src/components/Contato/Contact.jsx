import { useState } from 'react';
import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormSelect,
  CFormTextarea,
} from '@coreui/react';
import { IMaskMixin } from 'react-imask';

const CFormInputWithMask = IMaskMixin(({ inputRef, ...props }) => (
  <CFormInput {...props} ref={inputRef} />
));

const Contact = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <>
      <div
        className="w-50 py-5"
        style={{
          margin: '0 auto',
          borderRadius: '10px',
          padding: '20px',
        }}
      >
        <div className="text-center mb-4">
          <h1
            style={{
              color: '#5856D6',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Vamos trabalhar juntos
          </h1>
          <p>
            Sinta-se livre para me chamar caso tenha dúvidas, sugestões ou
            queira conversar sobre possíveis parcerias. Estou sempre aberto a
            trocar ideias, explorar projetos e encontrar maneiras de
            colaborarmos.
          </p>
        </div>

        <CForm className="d-flex flex-column gap-3">
          <CFormInput
            type="text"
            placeholder="Informe seu nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          <div className="d-flex gap-3">
            <CFormInput
              type="email"
              placeholder="Informe seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <CFormInputWithMask
              mask="+{55}(00)00000-0000"
              placeholder="Informe seu telefone"
              value={phone}
              onAccept={(value) => setPhone(value)}
              overwrite
              required
            />
          </div>

          <CFormSelect
            aria-label="Default select example"
            options={[
              { label: 'Open this select menu', key: 'default' },
              { label: 'One', value: '1', key: 'one' },
              { label: 'Two', value: '2', key: 'two' },
              { label: 'Three', value: '3', disabled: true, key: 'three' },
            ]}
          />

          <CFormTextarea placeholder="Escreva sua mensagem aqui" rows={4} />

          <div className="d-flex justify-content-center mt-3">
            <CButton color="primary" type="submit">
              Enviar formulário
            </CButton>
          </div>
        </CForm>
      </div>
    </>
  );
};

export default Contact;
