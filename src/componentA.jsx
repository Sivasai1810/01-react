import { useState,createContext } from 'react'
import ComponentB from './componentB.jsx'
export  const UserConstext=createContext()
function myComponentA(){
    const [user,setUser]= useState("brocode")
    return (
        <div className="box">
            <h1> componentA</h1>
            <p> username {user}</p>
        <UserConstext.Provider value={user}>
     <ComponentB  user={user}/>
        </UserConstext.Provider>

           
        </div>
    )
}
export default myComponentA