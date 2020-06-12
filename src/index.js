import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TestRouter from './components/TestRouter';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './components/store';


ReactDOM.render(
  <Provider store={store}> 
      <PersistGate loading={null} persistor={persistor}>
          <TestRouter></TestRouter>
      </PersistGate>
      
  </Provider>,
  document.getElementById('root')
);


