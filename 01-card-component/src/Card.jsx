import pizzaImg from './assets/pizza.png'
function Card(){
    return(
        <div className='card'>
            <img className='card-img' src={pizzaImg} alt="profileImg" ></img>
            <h2 className='card-title'>Chicken Supreme Pizza</h2>
            <p className='card-text'>A delicious combination of grilled chicken,
                 mushrooms, bell peppers, onions, 
                 and mozzarella cheese, baked to perfection 
                 on a crispy crust.</p>
        </div>
    );
}
export default Card