import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Clock from './usecallbacks.jsx'
import  "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Clock />
  </StrictMode>

  )