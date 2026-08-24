// ============================================================
//  src/main.jsx
//  React entry point
// ============================================================
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';

import ErrorBoundary from './ErrorBoundary';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
}
