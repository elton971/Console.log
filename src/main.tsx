import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthGoogleProvider } from './contextApi/Context'
import "./Global.css"


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthGoogleProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthGoogleProvider>
  </React.StrictMode>
)
