import { useState,useEffect,useRef } from "react";
function mycomponent(){
    //let [number,setNumber]=useState(0)
    const inputref1=useRef("null")
        const inputref2=useRef("null")
            const inputref3=useRef("null")
            useEffect(()=>{
                console.log("page has been rendered")
            })

    const handleChangeEvent1=()=>{
       // setNumber(n=>n+1)
    //    myRef.current++;
    //    console.log(myRef.current)
   //inputref1.current.focus()
        inputref1.current.style.backgroundColor="yellow";
         inputref2.current.style.backgroundColor="";
          inputref3.current.style.backgroundColor="";

    }
     const handleChangeEvent2=()=>{
 inputref2.current.focus()
  inputref1.current.style.backgroundColor="";
        inputref2.current.style.backgroundColor="yellow";
         inputref3.current.style.backgroundColor="";

    
    }


         const handleChangeEvent3=()=>{
 inputref3.current.focus()
 inputref1.current.style.backgroundColor="";
        inputref2.current.style.backgroundColor="";
        inputref3.current.style.backgroundColor="yellow";

    
    }

    // useEffect(()=>{
    // console.log("react rendered")
    // })
    return(
        <div>
<button onClick={handleChangeEvent1}>
    CLICKME! 
</button>
<input type="text" ref={inputref1}/>
<button onClick={handleChangeEvent2}>
    CLICKME! 
</button>
<input type="text" ref={inputref2}/>
<button onClick={handleChangeEvent3}>
    CLICKME! 
</button>
<input type="text" ref={inputref3}/>
        </div>
    )
}
export default mycomponent