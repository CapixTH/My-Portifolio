import { useState } from 'react';
import { CFormInput } from '@coreui/react';
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
        <div className="text-center">
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <CFormInput
            className="w-100"
            type="text"
            placeholder="Informe seu nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <CFormInput
            type="email"
            placeholder="Informe seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CFormInputWithMask
            mask="+{55}(00)00000-0000"
            placeholder="Informe seu telefone"
            value={phone}
            onAccept={(value) => setPhone(value)}
            overwrite
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
