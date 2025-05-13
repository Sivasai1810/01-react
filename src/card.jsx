import profilepic from "./assets/react.svg"
function card(){
    return(
        <div className="card">
        <img classname="card-image " src={profilepic} alt="arey babu this is profile pic"></img>,
        <h2 className="card-heading">this is sai new profile picture</h2>,
        <p className="card-para">anyways the war has been started</p>
</div>
    )

}
export default card
