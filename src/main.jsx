import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Login } from './containers/Login/index.jsx';
import GlobalStyles from './styles/globalStyles.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
    <GlobalStyles />
    <ToastContainer autoClose={2000} theme="light" />
  </React.StrictMode>,
);
