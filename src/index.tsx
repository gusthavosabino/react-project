// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import Header from './components/Header/Header';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header title='Marcella' />
    <App />
  </React.StrictMode>,
);
