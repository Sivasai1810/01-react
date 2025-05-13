function button(){
    const image="./src/assets/react.svg"
    const imagebump=(event)=>event.target.style.display='none';
return(
    <div>

   <img onClick={(event)=>imagebump(event)}  src={image}></img>
    </div>
)
}
// {/*         
//     <button onClick={()=>tracker()}>clickme bro</button>,
//     <h1> simply you fucking trio</h1> */}
//     //     let counter=0
// //     const tracker=()=>console.log(counter++) 
// //    const handleclick = () => console.log("hello bro")
// //    const printname=(name)=>console.log(`welcome${name}`)
// export default button


export default button;
