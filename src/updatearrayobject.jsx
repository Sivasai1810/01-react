import { model } from "mongoose";
import { useState } from "react";
function mycomponentobject(){
    const [cars,setCars]=useState([]);
    const [caryear,setCarYear]=useState(new Date().getFullYear())
    const [carmake,setCarMake]=useState("")
    const [carmodel,setCarModel]=useState("")
    function handleAddEvent(){
       const newcar={year:caryear,
                     make:carmake,
                    model:carmodel
       }
       setCars(cars=>[...cars,newcar]);
       setCarYear(new Date().getFullYear());
       setCarMake("");
       setCarModel("");
    }
    function handleRemoveEvent(index){
         setCars(c=>c.filter((_,i)=>i!==index))
    }
    function handleCarYear(event){
      setCarYear(event.target.value)
    }
     function handleCarMake(event){
         setCarMake(event.target.value)
    }
    
     function handleCarModel(event){
         setCarModel(event.target.value)
    }

    return (
        <div>
            <h1> LIST OF CARS IN</h1>
      <ul>
        {cars.map((car,index)=><li key={index} onClick={()=>handleRemoveEvent(index)}>
                   {car.year} {car.make} {car.model}
        </li>)}
      </ul>
<input type="number" value={caryear} onChange={handleCarYear} /><br/>
<input type="text" value={carmake} onChange={handleCarMake}  placeholder="Enter car make"/><br/>
<input type="text" value={carmodel} onChange={handleCarModel}   placeholder="Enter car model" /><br/>
<button onClick={handleAddEvent}> ADD Car</button>
        </div>
    )
}
export default mycomponentobject