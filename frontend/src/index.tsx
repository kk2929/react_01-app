import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Table from './components/pages/Table';
// import Table from './components/pages/Test';
// import Table from './test';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Table />
  </React.StrictMode>
);

reportWebVitals();
