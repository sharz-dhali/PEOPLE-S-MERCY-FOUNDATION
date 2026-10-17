import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

const githubPagesRedirect = sessionStorage.getItem('pmf-github-pages-redirect')
if (githubPagesRedirect) {
  sessionStorage.removeItem('pmf-github-pages-redirect')
  if (githubPagesRedirect.startsWith(import.meta.env.BASE_URL)) {
    window.history.replaceState(null, '', githubPagesRedirect)
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
