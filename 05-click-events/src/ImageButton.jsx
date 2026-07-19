function ImageButton(){
    const imgURL = './src/assets/click.png'
    const handleClick = (e) => e.target.style.display = "none"
    return(
        <img onClick= {(e)=> handleClick(e)} src = {imgURL}></img>
    )
}
export default ImageButton