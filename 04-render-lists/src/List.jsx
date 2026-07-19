function List (props){
    const itemList = props.items


    // itemList.sort(( a,b ) => a.calories - b.calories)    /*کالری صعودی*/
    // itemList.sort(( a,b ) => b.calories - a.calories)    /*کالری نزولی*/
    // itemList.sort(( a,b ) => a.name.localeCompare(b.name))   /*حروف صعودی*/ 
    // itemList.sort(( a,b ) => b.name.localeCompare(a.name))  /*حروف نزولی*/

    const lowCalorieFruits = itemList.filter(fruit => fruit.calories < 100)
    const highCalorieFruits = itemList.filter(fruit => fruit.calories >= 100)


    const low = lowCalorieFruits.map(fruit => <li key = {itemList.id}>
                                            {fruit.name}: &nbsp;
                                            <b>{fruit.calories}</b></li>)


    const listItems = itemList.map(fruit => <li key = {fruit.id}>
                                            {fruit.name}: &nbsp;
                                            <b>{fruit.calories}</b></li>)
    return(
        <>
            <h3 className="category">{props.category}</h3>
            <ol className="list">{listItems}</ol>
            <br></br>

            {props.category === "Fruits" && <><h4>low calorie fruits</h4><ol className="low">{low}</ol><br></br></>}
        </>
        
    );
}
export default List