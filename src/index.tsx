import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Container/App';
import reportWebVitals from './reportWebVitals';
import Store from './Store';
import { Provider } from 'react-redux';
import './i18n';
ReactDOM.render(
  <Suspense fallback={"...loading"}>
    <Provider store={Store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
