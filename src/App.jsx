import Home from './components/Home/Home';
import Services from './components/pages/Services.jsx';
import Contact from './components/pages/Contact.jsx';
import Resum from './components/pages/Resum.jsx';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const homeVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const App = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      {/* Seção Home */}
      <motion.section
        id="home"
        style={{ minHeight: '100vh' }}
        initial="hidden"
        animate="visible"
        variants={homeVariants}
      >
        <Home />
      </motion.section>

      {/* Seção Serviços */}
      <motion.section
        id="services"
        style={{ minHeight: '100vh', paddingTop: '40px' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Services />
      </motion.section>

      {/* Seção Resumo */}
      <motion.section
        id="resum"
        style={{ minHeight: '100vh', paddingTop: '40px' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Resum />
      </motion.section>

      {/* Seção Contato */}
      <motion.section
        id="contact"
        style={{ minHeight: '100vh', paddingTop: '40px' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Contact />
      </motion.section>
    </div>
  );
};

export default App;
