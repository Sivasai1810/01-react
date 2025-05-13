import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Todoapp from "./todoapp.jsx"
import  "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Todoapp />
  </StrictMode>

  )
