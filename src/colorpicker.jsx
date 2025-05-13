import { useState } from "react";

function colorpicker(){
    const [color,setColor]=useState("#FFF")
const mycomponent=(event)=>{
setColor(event.target.value)
}
return (   
  <div className="color-box">
    <h1 className="color-heading">COLOR-PICKER</h1>
     <div className="backgroundcolor" style={{background:color}} ><p> selectedcolor:{color}</p> </div>
    <label className="label">select-color :</label>
        <input  className="input"type="color" value={color} onChange={mycomponent} ></input>
       

  
</div>
)
}
export default colorpicker