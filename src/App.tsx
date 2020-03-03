import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import light from './styles/themes/light';
import GlobalStyle from './styles/global';

import Routes from './routes';
import history from './services/history';

import { store, persistor } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={light}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={8000} />
          </Router>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
