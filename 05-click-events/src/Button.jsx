function Button(){
    let count = 0
    const handleClick = () => console.log("ouch!")
    const handleClick2 = (name) => console.log(`${name} stop clicking me!!`)
    const handleClick3 = (name) =>{
        if (count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`)
        }else{
            console.log(`${name} stop clicking me!`)
        }
    }
    const handleClick4 = (e) => e.target.textContent = "ouch"

    return(
        // <button onClick = {handleClick}>click me</button>
        // <button onClick = {()=>handleClick2("mt")}>click me</button>
        // <button onClick = {()=>handleClick3("mt")}>click me</button>
        // <button onClick = {(e)=>handleClick4(e)}>click me</button>
        <button onDoubleClick = {(e)=>handleClick4(e)}>click me</button>
    );
}
export default Button