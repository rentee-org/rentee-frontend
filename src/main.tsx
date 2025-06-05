import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
// import Blog from './marketing/pages/Blog';
// import Blogdetails from './components/layout/Blogdetails';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />  
    {/* <Blog /> */}
    {/* <Blogdetails /> */}
  </StrictMode>,
)
