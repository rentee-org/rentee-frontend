import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import { Header } from './components/Dashboard/header.tsx'
// import { SideBar } from './components/Dashboard/SideBar.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    { <App />}
  </StrictMode>,
)
