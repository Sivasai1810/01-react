import { useState } from "react";


function todoapp(){
    const [todo,setTodo]=useState(["task1","task2"])
    const [newtask,setNewTask]=useState("")
  
function handleInputChange(event){
setNewTask(event.target.value)
}
function handleAddEvent(){
  if(newtask.trim()!==""){
    setTodo(t=>[...t,newtask])
    setNewTask("")
  }
}

return(
 <div>
  <h1>TO-DO-APPLICATION</h1>
  <div>
    <h1> LIST OF TASK</h1>
    <input type="text" placeholder="enter your task" id="taskinput" onChange={handleInputChange}/>
    <button onClick={handleAddEvent}>ADD TASK</button>
  </div>
  <ul>
    {todo.map((element,index)=><li key={index}>{element}</li>)}
  </ul>
 </div>

)
}
export  default todoapp

