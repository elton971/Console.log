import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./Global.css";
import { AuthGoogleProvider } from './contextApi/Context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <AuthGoogleProvider>
          <App/>
      </AuthGoogleProvider>
  </React.StrictMode>
)
