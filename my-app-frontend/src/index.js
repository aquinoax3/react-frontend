import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import FullPage from './components/Fullpage';

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <FullPage/>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
