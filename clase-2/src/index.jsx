import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Main/>
  </React.StrictMode>,
  document.querySelector('.container')
);
