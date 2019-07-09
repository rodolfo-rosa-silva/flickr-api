import React from 'react';
import { Provider } from 'react-redux';

import './config/reactotron';

import Routes from './routes';
import store from './store';

import GlobalStyle from './styles/global';

const App = () => (
  <Provider store={store}>
    <>
      <GlobalStyle />
      <Routes />
    </>
  </Provider>
);

export default App;
