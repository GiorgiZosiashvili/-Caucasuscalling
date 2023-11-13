import React from 'react';
import ReactDOM from 'react-dom/client';

import '../Reset.css';
import App from './App.jsx';
import FontStyles from './assets/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FontStyles />
    <App />
  </React.StrictMode>,
);
