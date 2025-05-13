import proptypes from "prop-types";
function student(props){
    return(props.isLoggedIn ? <h1>welcome {props.username}</h1>:<h1> you to need to login to continue </h1>
    )
//     <div>
//          <p> Name:{props.name}</p>
//          <p> Age:{props.age}</p>
//          <p> Isstundent{ props.isstudent   ?"yes"  :  "no"}</p>
// <h1> welcome to  the club</h1>  
// </div>

}
// student.proptypes={
// name:proptypes.string,
// age:proptypes.number,
// isstudent:proptypes.bool
// };
// student.defaultProps = {
//     name:"default",
//     age:0,
//     isstudent:false
// }; 

export default student;