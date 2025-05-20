import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Nav from './components/NavBar/Nav.jsx';
// import Home from './components/Home/Home.jsx';
// import Contact from './components/Contato/Contact.jsx';
import AppRoutes from './routes/Router.jsx';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <Nav/>
    </div>
    <BrowserRouter>
      {/* <div style={{ paddingTop: '50px' }}>
      <Home />
      </div> */}
      {/* <Contact /> */}
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
