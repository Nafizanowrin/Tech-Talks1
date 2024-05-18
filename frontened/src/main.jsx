import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/Context.jsx'
import { AuthProvider } from './store/auth.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  

  <AuthProvider>

  <React.StrictMode>
  
    <AppProvider>

        <App />

    </AppProvider>
        
  </React.StrictMode>,


  </AuthProvider>


 
)
