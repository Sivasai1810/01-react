import {useContext} from 'react'
import  {UserConstext} from './componentA'

function myComponentC(){ //props .//props.user
    const user=useContext(UserConstext)
    return (
        <div className="box">
            <h1>componentC  userbye:{user}</h1>  
        </div>
    )
}
export default myComponentC