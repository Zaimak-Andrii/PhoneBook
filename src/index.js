import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'theme';
import { persistedStore, store } from 'redux/store';
import './index.css';
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <BrowserRouter basename="PhoneBook">
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
