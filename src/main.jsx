import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Nav from './components/NavBar/Nav.jsx';
import AppRoutes from './routes/Router.jsx';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Nav />
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
