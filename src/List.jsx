import propTypes from 'prop-types';
function List(props){
    // const fruits = [{id:1,name:"apple",calories:95},
    //                 {id:2,name:"orange",calories:45},
    //                 {id:3,name:"banana",calories:105},
    //                 {id:4,name:"coconut",calories:159},
    //                 {id:5,name:"pineapple",calories:37}
    //                 ];

    //fruits.sort((a,b)=>a.name.localeCompare(b.name)); // Alphabetical
    //fruits.sort((a,b)=>b.name.localeCompare(a.name)); // Reverse Alphabetical
    //fruits.sort((a,b)=>a.calories-b.calories); // Numeric
    //fruits.sort((a,b)=>b.calories-a.calories); // Reverse Numeric

    //const lowCalFruits = fruits.filter(fruit=>fruit.calories<100); // low calories fruits
    // const highCalFruits = fruits.filter(fruit=>fruit.calories>100); // high calories fruits
    
    // const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
    //                                         {highCalFruit.name}: &nbsp;
    //                                         <b>{highCalFruit.calories}</b></li>);

    const catergory = props.catergory;
    const itemList = props.items;
    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>);
    return(
        <>
        <h3 className="list-category">{catergory}</h3>
        <ol className="list-items">{listItems}</ol>
        </>  
    );
}
List.propTypes={
    catergory: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({
                                        id: propTypes.number,
                                        name: propTypes.string,
                                        calories: propTypes.number
                                    })),
}
List.defaultProps = {
    catergory: "Category",
    items: [],
}
export default List;