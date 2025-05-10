import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Nav from './components/NavBar/Nav.jsx';
import Home from './components/Home/Home.jsx';
import Contact from './components/Contato/Contact.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    {/* <div style={{ paddingTop: '50px' }}>
      <Home />
    </div> */}
    <Contact />
  </StrictMode>
);
