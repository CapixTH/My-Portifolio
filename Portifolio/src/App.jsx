import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const [valor, setValor] = useState(0);

  const add = () => {
    setValor(valor + 1);
  };

  const reduce = () => {
    if (valor>0) {
      setValor(valor-1);
    }
  };

  return (
    <div>
      <h1>Primeiro Contador</h1>
      <div className="m-2 fs-3">{valor}</div>
      <div className="btn btn-primary" onClick={reduce}>Reduzir</div>
      <div className="btn btn-primary" onClick={add}>
        Adicionar
      </div>
    </div>
  );
};

export default App;
