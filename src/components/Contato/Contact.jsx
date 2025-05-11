import { useState } from 'react';
import {
  CButton,
  CForm,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CAlert,
} from '@coreui/react';
import { IMaskMixin } from 'react-imask';

const CFormInputWithMask = IMaskMixin(({ inputRef, ...props }) => (
  <CFormInput {...props} ref={inputRef} />
));

const Contact = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [servico, setServico] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simula envio dos dados (ex: envio para API)
    const dadosFormulario = {
      nome,
      email,
      telefone: phone,
      servico,
      mensagem,
    };

    console.log('Dados enviados:', dadosFormulario);

    // Feedback para o usuário
    setFeedback('Mensagem enviada com sucesso!');

    // Resetar o formulário
    setNome('');
    setEmail('');
    setPhone('');
    setServico('');
    setMensagem('');
  };

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
            queira conversar sobre possíveis parcerias.
          </p>
        </div>

        {feedback && <CAlert color="success">{feedback}</CAlert>}

        <CForm
          className="d-flex flex-column gap-3"
          onSubmit={handleSubmit}
          style={{
            '--cui-body-bg': '#27272C',
            '--cui-border-color': '#5856D6',
            '--cui-input-bg': '#27272C',
            '--cui-input-border-color': '#5856D6',
            '--cui-input-placeholder-color': '#D2D2D3',
          }}
        >
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
            style={{ color: '#D2D2D3' }}
            aria-label="Selecione o tipo de serviço"
            value={servico}
            onChange={(e) => setServico(e.target.value)}
            required
            options={[
              {
                label: 'Selecione o tipo de serviço',
                value: '',
                disabled: true,
              },
              { label: 'Desenvolvimento Web', value: '1' },
              { label: 'Design UI/UX', value: '2' },
              { label: 'Inteligência de Negócios', value: '3', disabled: true },
            ]}
          />

          <CFormTextarea
            placeholder="Escreva sua mensagem aqui"
            rows={4}
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
          />

          <div className="d-flex justify-content-center mt-3">
            <CButton color="primary" type="submit">
              Enviar mensagem
            </CButton>
          </div>
        </CForm>
      </div>
    </>
  );
};

export default Contact;
