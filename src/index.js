import React from 'react';
import ReactDOM from 'react-dom';
import Api from './components/api/Api'
import reportWebVitals from './reportWebVitals';
import "./index.css";

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Api />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
