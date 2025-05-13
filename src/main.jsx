import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Usestates from './usestate.jsx'
//import Updateobject from "./updateobject.jsx"
// import Changefr from "./onchange.jsx"
// import Colorpicker from './colorpicker.jsx'
//import Updatearray from './updatearray.jsx'
import  "./index.css"
import Updateobjectarray from "./updatearrayobject"
createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <Usestates />, */}
  {/* <Changefr /> */}
  {/* <Colorpicker /> */}
  {/* <Updateobject /> */}
{/* <Updatearray /> */}
<Updateobjectarray />
  </StrictMode>

  )
