import React from 'react';
import ReactDOM from 'react-dom';
import Providers from './services/providers';
import { App } from './container';
import reportWebVitals from './reportWebVitals';

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Providers>
        <App />
      </Providers>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
