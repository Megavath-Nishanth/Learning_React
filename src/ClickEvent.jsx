function ClickEvent(){
    // const handleClick = ()=>console.log("OUCH!");
    // const handleClick2 = (name)=>console.log(`${name} stop clicking me!`);
    // return(
    //     <button onClick={()=>handleClick2("Nishanth")}>Click Me</button>
    // );
    // return(
    //     <button onClick={handleClick}>Click Me</button>
    // );
    // let count = 0;
    // const handleClick=(name)=>{
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} times`);
    //     }
    //     else{
    //         console.log(`${name} stop clicking me!`);
    //     }
    // };
    // return(
    //     <button onClick={()=>handleClick("Nishanth")}>Click Me</button>
    // );
    // const handleClick=(e)=> console.log(e);
    const handleClick=(e)=> e.target.textContent = "OUCH!";
    return(
        <button onClick={(e)=>handleClick(e)}>Click Me</button>
    );
}
export default ClickEvent