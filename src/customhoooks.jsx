import Localstorage from "./localstorage.jsx";
function customHooks(){
    
const [name,setName]=Localstorage('username',' ')
 return(
    <div>
<input type="text" placeholder="enter the name" value={name} onChange={(event)=>setName(event.target.value)}/>
<p> Hello{name} !</p>
    </div>
 )
}
export default customHooks