import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importa componente App
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Renderiza componente App na DIV com id ROOT */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
