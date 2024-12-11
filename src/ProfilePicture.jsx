function ProfilePicture(){
    const imageUrl = '../public/profile.jpg';
    // const handleClick = ()=>console.log("OUCH!");
    const handleClick = (e)=>e.target.style.display = "none";

    return(
        <img onClick={(e)=>handleClick(e)}src={imageUrl}></img>
    );
}
export default ProfilePicture