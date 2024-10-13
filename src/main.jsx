import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Elements } from '@stripe/react-stripe-js';

import stripePromisse from './config/stripeConfig.js';
import AppProvider from './hooks/index.jsx';
import { router } from './routes';
import GlobalStyles from './styles/globalStyles.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <Elements stripe={stripePromisse}>
        <RouterProvider router={router} />
      </Elements>
      <GlobalStyles />
      <ToastContainer autoClose={2000} theme="light" />
    </AppProvider>
  </React.StrictMode>,
);
