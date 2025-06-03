import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
// import Blog from './marketing/pages/Blog';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />  
    {/* <Blog /> */}
  </StrictMode>,
)
