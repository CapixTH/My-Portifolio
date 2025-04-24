import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/NavBar/NavBar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="NavBar" id="NavBar">
      <App />
    </div>
  </StrictMode>
);
