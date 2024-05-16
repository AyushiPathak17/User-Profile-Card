// src/index.js
import React from 'react';
import { createRoot } from 'react-dom';

import App from './App';

const root = document.getElementById('root');
const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Create the root
createRoot(root).render(rootElement);
