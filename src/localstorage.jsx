import Reacts from 'react'
import { useState,useEffect } from 'react'
const uselocalstorage = (key,intitalvalue) => {

    const [name, setName]=useState(
        localStorage.getItem(key)?
        localStorage.getItem(key):intitalvalue

    )
    useEffect(()=>{
        localStorage.setItem(key,name)
    },[key,name])
  return [name,setName]


}

export default uselocalstorage
//in this const [name,setName]=Localstorage('username',' ') in this step this will calls the localstorage with username and null overthere it checks the local storage checks is there any element or value with username if first time render no value there so it setname will be empty and then when evenry you change the input field it calls the useeffect it will create a value in localstorage username with setname it will display over there and then if we reloAad the customhook file it againcall the uselocal storage value git gets the key wtih  previous name so it will return the name it will print the name its clear this is the flow write is there any mistake