import Home from './components/Home/Home';
import Services from './components/pages/Services.jsx';
import Contact from './components/pages/Contact.jsx';
import Resum from './components/pages/Resum.jsx';

const App = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      {/* Seção Home */}
      <section id="home" style={{ minHeight: '100vh' }}>
        <Home />
      </section>

      {/* Seção Serviços */}
      <section id="services" style={{ minHeight: '100vh', paddingTop: '40px' }}>
        <Services />
      </section>

      {/* Seção Resumo */}
      <section id="resum" style={{ minHeight: '100vh', paddingTop: '40px' }}>
        <Resum />
      </section>

      {/* Seção Contato */}
      <section id="contact" style={{ minHeight: '100vh', paddingTop: '40px' }}>
        <Contact />
      </section>
    </div>
  );
};

export default App;
