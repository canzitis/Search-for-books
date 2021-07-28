import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Redux/redux-store';
import { BrowserRouter, HashRouter } from 'react-router-dom';


ReactDOM.render(
 
  <React.StrictMode>
    <HashRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

