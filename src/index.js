import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline } from "@mui/material";
import { RouterProvider } from 'react-router-dom';
import router from './router/router'
import store from './store/store'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);