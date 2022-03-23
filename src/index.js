import {StrictMode} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {Provider} from 'react-redux';
import store from './store/index';


ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
