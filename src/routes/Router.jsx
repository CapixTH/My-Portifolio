import { Route, Routes } from 'react-router';
import Contact from '../components/Contato/Contact.jsx';
import Home from '../components/Home/Home';
import Services from '../components/Serviços/Services.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};
export default AppRoutes;
