import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Effect from './useeffect.jsx'
import  "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Effect />
  </StrictMode>

  )
