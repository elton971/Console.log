import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./Global.css";
import { AuthGoogleProvider } from './contextApi/Context';
import { ApolloProvider } from '@apollo/client';
import { Client } from './service/ApolloService';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      
      <AuthGoogleProvider>
          <ApolloProvider client={Client}>
              <App/>
          </ApolloProvider>
      </AuthGoogleProvider>
  </React.StrictMode>
)
