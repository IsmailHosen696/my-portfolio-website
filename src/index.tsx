import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { PortfolioProvider } from './hooks/usePortfolio';
import AuthProvider from './contexts/AuthProvider';

ReactDOM.render(
  <React.StrictMode>
    <PortfolioProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </PortfolioProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.register();
