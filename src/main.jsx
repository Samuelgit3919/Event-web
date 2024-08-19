import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from "@react-oauth/google"



ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='97884430160-o3mqegje97g82u9668un19s1vfubrfp0.apps.googleusercontent.com'>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </GoogleOAuthProvider>
)
