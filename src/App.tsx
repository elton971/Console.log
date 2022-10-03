import { BrowserRouter } from 'react-router-dom';
import { AuthGoogleProvider } from './contextApi/Context';
import Router from './routers/Router';

export default function App() {
  return (
    <AuthGoogleProvider> 
      <Router/>
    </AuthGoogleProvider>
  )
}
