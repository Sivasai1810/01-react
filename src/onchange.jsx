import { useState } from "react"

////// textarea ,input,select,radio
function onchanges(){
     const [name,setName]=useState("");
    const [comment ,setComment]=useState("")
const [payment,setPayment]=useState("")
    const mycomponent=(event)=>{
      setComment(event.target.value)
    }
    const handlepaymentcard=(event)=>{
         setPayment(event.target.value)
    }
 return (
    <div>
     
<input  value={name} onChange={mycomponent}/>
 <p>Name: {name}</p>    
 <textarea type="text" value={comment}   placeholder="if you want any customization pls enter the detials " onChange={mycomponent}/>
 <p>comment:{comment}</p>,
 <select  value={payment} onChange={handlepaymentcard}>
<option value=""> select an option </option>
<option value=" visa "> visa</option>
<option value=" mastercard"> mastercard</option>
<option value="giftcard">giftcard</option>
 </select>
 <p>
   payment:{payment}
 </p>

 </div>
 )   
}
export default onchanges