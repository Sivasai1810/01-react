
import React, { useState } from "react";
import axios from 'axios'
const testcase=()=>{
 const [user,setUser]=useState({
    username:"",
    password:""

 })
 const [message,setMessage]=useState("")
 const handlechange=(e)=>{
    setUser((prevData)=>({
       ...prevData,
       [e.target.name]:e.target.value
       
    }))
 }
 
 const handleget= async (e)=>{
     e.preventDefault();
     const res=await axios.post("http://localhost:3010/create",user)
     console.log(res.data)
     setMessage(res.data.message)
 }
//  catch(error){
//  console.log("something went wrong with internal server" +error)
//  }
 return(
    <div>
        <form onSubmit={handleget}>
            <input type="text" placeholder="enterusername" onChange={handlechange} name="username"></input>
            <input type="text" placeholder="enterpassword" onChange={handlechange} name="password"></input>
            <button type="submit"> signup</button><br/>
            
        </form>
        {message!==null && message!==undefined   &&<p>{message}</p>}
    </div>

        
    
 )




}
export default testcase