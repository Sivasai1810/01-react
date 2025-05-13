
import { model, set } from 'mongoose';
import React, { useState } from 'react';

function updateobject(){
    const [car,setCar]=useState({year:0,
                                   make:"ford",
                                    model:"mustang"})
 function handleyearevent(event){

        setCar(c=>({...c  , year :event.target.value}))
     // setCar(event.target.value)
      
 }
function handlemakeevent(event){

    setCar(c=>({...c  , make :event.target.value}))

 }
 function handlemodelevent(event){
  setCar(c=>({...c  , model :event.target.value}))
 // setCar(event.target.value)

 }




    return(
  <div>
     <p>this is my car model :{car.year} {car.make} {car.model} </p>
     <input  type="number"value={car.year} onChange={handleyearevent}/><br/>
     <input  type="text"value={car.make} onChange={handlemakeevent}/><br/>
                           <input  type="text"
                      value={car.model} onChange={handlemodelevent}/><br/>
  </div>
       



    )
}

export default updateobject