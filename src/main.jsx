import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'mini.css/dist/mini-default.min.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
