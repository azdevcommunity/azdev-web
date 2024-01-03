import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './root/App.tsx'
import './index.css'
import { register } from './serviceWorkerRegistration.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

register();
