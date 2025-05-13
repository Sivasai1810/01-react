import { use } from "react";
import { useState } from "react";
const updatearray=()=>{

 const [fruits,setFruits] =useState(["apple"])
 const handleAddFruit=()=>{
const newFood=document.getElementById("foodInput").value;
document.getElementById("foodInput").value="";
setFruits(f=>[...f,newFood])
 }
  const handleRemoveFruit=(index)=>{
    setFruits(fruits.filter((_,i)=>i!==index))
 }

    return(
        <div className="fruit">
          <h1>ADD/REMOVE YOUR FRUITS</h1>
          <ul className="furitarray">
            {fruits.map((fruit,index) =>
                 <li key={index} onClick={()=>handleRemoveFruit(index)}> {fruit.toUpperCase()} </li>)}
 
          </ul>
          <input type="text" id="foodInput" placeholder="enterfoodname" />
          <button onClick={handleAddFruit}> addfruit</button>
        </div>
    )
}
export default updatearray