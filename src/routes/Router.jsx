import { Route, Routes } from 'react-router';
import Contact from '../components/Contato/Contact.jsx';
import Home from '../components/Home/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
export default AppRoutes;
