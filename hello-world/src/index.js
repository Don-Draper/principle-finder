import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <App traits={['Compassionate', 'Grateful', 'Gritty']} />,
  document.getElementById('root')
);
