import { useContext } from "react";
import ComponentC from './componentC.jsx'
function myComponentB(){//user={props.user}  (props
    return (
        <div className="box">
            <h1> componentB</h1>
            <ComponentC  />
        </div>
    )
}
export default myComponentB