
import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Background from './Components/Background';
import './CSS/Background.css'

ReactDOM.render(
  <React.StrictMode>
    <Background className="wrapper"></Background>
    <App />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
