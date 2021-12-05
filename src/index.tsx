import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { PortfolioProvider } from './hooks/usePortfolio';

ReactDOM.render(
  <React.StrictMode>
    <PortfolioProvider>
      <App />
    </PortfolioProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.register();
