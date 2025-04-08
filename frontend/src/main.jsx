import React from 'react';
import ReactDOM from 'react-dom/client'; // Remarque : utilise 'react-dom/client' avec React 18
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation de Bootstrap

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
