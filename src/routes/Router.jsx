import { Route, Routes, useLocation } from 'react-router';
import Home from '../components/Home/Home';
import Services from '../components/pages/Services.jsx';
import Contact from '../components/pages/Contact.jsx';
import Resum from '../components/pages/Resum.jsx';
import MotionWrapper from '../components/MotionWrapper.jsx';

const AppRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <MotionWrapper locationKey={location.pathname}>
            <Home />
          </MotionWrapper>
        }
      />
      <Route
        path="/contact"
        element={
          <MotionWrapper locationKey={location.pathname}>
            <Contact />
          </MotionWrapper>
        }
      />
      <Route
        path="/services"
        element={
          <MotionWrapper locationKey={location.pathname}>
            <Services />
          </MotionWrapper>
        }
      />
      <Route
        path="/resum"
        element={
          <MotionWrapper locationKey={location.pathname}>
            <Resum />
          </MotionWrapper>
        }
      />
    </Routes>
  );
};
export default AppRoutes;
