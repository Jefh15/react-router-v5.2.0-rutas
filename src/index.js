import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // lo desactivo por mis rutas de mi Link en el navbar
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

