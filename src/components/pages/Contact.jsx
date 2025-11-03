import { useState } from 'react';
import emailjs from 'emailjs-com';
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

    // Mapeia o valor do serviço para o texto
    const servicos = {
      1: 'Desenvolvimento Web',
      2: 'Design UI/UX',
      3: 'Inteligência de Negócios',
    };

    emailjs
      .send(
        'service_kji4oyb', // Substitua pelo seu Service ID
        'SEU_TEMPLATE_ID', // Substitua pelo seu Template ID
        {
          from_name: nome,
          from_email: email,
          phone,
          service: servicos[servico] || servico,
          message: mensagem,
        },
        'QKsPrEGzolKZNHXoI' // Public Key atualizada
      )
      .then(() => {
        setFeedback('Mensagem enviada com sucesso!');
        setNome('');
        setEmail('');
        setPhone('');
        setServico('');
        setMensagem('');
      })
      .catch(() => setFeedback('Erro ao enviar mensagem, tente novamente.'));
  };

  return (
    <>
      <div
        className="w-50 pt-1"
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
            '--cui-input-bg': '#ffffff',
            '--cui-input-border-color': '#5856D6',
            '--cui-input-placeholder-color': '#D2D2D3',
            color: '#fff',
          }}
        >
          <CFormInput
            style={{ color: '#D2D2D3' }}
            type="text"
            placeholder="Informe seu nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          <div className="d-flex gap-3">
            <CFormInput
              style={{ color: '#D2D2D3' }}
              type="email"
              placeholder="Informe seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <CFormInputWithMask
              style={{ color: '#D2D2D3' }}
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
              { label: 'Inteligência de Negócios', value: '3' },
            ]}
          />

          <CFormTextarea
            style={{ color: '#D2D2D3' }}
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
