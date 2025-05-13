
import React,{useState} from "react";
function mycounter(){
const [counter, setName]=useState(0);
const decrement=()=>{
    setName(counter-1)
}
const increment=()=>{
    setName(counter=>counter+2) 
    setName(counter=>counter+1)
    setName(counter=>counter+3)

}
const reset=()=>{
    setName(0)
}

return(
    <div className="container">
        <p className="container-counter">{counter}</p>
        <button className="container-box" onClick={decrement}> decrement</button>
        <button className="container-box" onClick={increment}> increment</button>
        <button className="container-box" onClick={reset}>reset</button>
    </div>
)
        
}
export default mycounter