import { set } from 'mongoose'
import {useState ,useEffect } from 'react'
function mycomponent(){
    const [width, setWidth] = useState(window.innerWidth);
const [height, setHeight] = useState(window.innerHeight);
     const [count ,setCount]=useState(0)
     const [color,setColor]=useState("green")
     //when every react re render update the title using use effect
    //  useEffect(()=>{
    //      document.title=`count: ${count}, ${color}`
    //      console.log( "1)runs for every time re render")
    //  })
    //  useEffect(()=>{
    //    console.log(" 2)only ones when the component mount or fisrt time renders")
    //  },[])
//  useEffect(()=>{
//      document.title=`count: ${count}, ${color}`
//     console.log("3)runs on mount first time render of the compnent  and also when every value changes ")
// },[color,count])
useEffect(() => {
  window.addEventListener("resize", handleResize);
  console.log("EVENT LISTENER ADDED");

  return () => {
    window.removeEventListener("resize", handleResize);
    console.log("EVENT LISTENER REMOVED");
  };
}, []);
function handleResize() {
  setWidth(window.innerWidth);
  setHeight(window.innerHeight);
}

 document.title=`count: ${count}, ${color}` 

    
     const handleAddEvent=()=>{
        setCount(c=>count+1)
     }
      const handleSubtractEvent=()=>{
        setCount(c=>count-1)
     }
      const handleChangeColor=()=>{
        setColor(c=>c==="green" ?"red":"green")
      }
    return (
        <div>
            <p style={{color:color}}> counter: {count}</p>
            <button onClick={handleAddEvent}>ADD</button>
              <button onClick={handleSubtractEvent}>Subtract</button>
              <button onClick={handleChangeColor}>CHANGE COLOR</button>
              <p>Window Width: {width}px</p>
<p>Window Height: {height}px</p>

        </div>
    )


}
export default mycomponent