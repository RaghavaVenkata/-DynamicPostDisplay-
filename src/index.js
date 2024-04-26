import React from 'react';
import { createRoot } from 'react-dom'; // Import createRoot from react-dom
import App from './App.js';

// Use createRoot to render the app
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

