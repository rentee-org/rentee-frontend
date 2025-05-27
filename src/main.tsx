import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//  import { jsxDEV } from "react/jsx-dev-runtime"; 
import './index.css'
import App from './App'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
