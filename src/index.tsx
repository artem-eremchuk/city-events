import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from './styles/themes';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './styles/index.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routes } from './routes/routes';

const router = createBrowserRouter(
  routes, {
    basename: "/city-events"
  }
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
