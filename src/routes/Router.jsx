import { Route, Routes } from 'react-router';
import Home from '../components/Home/Home';
import Services from '../components/pages/Services.jsx';
import Contact from '../components/pages/Contact.jsx';
import Resum from '../components/pages/Resum.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/resum" element={<Resum />} />
    </Routes>
  );
};
export default AppRoutes;
