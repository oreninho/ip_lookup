import ReactDOM from 'react-dom/client';
import React, {Suspense} from 'react';
import App from './App.tsx';
import './i18n.js';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Suspense fallback={null}>
    <App />
        </Suspense>
  </React.StrictMode>,
)
