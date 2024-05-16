// Your code here
function FoodBox({ food, deleteFood}) {
    
  return (
    <div style={{border:"1px solid gray"}}>
      <p>{food.name}</p>

      <img src={food.image}  style={{width:150}}/>

      <p>Calories: {food.calories}</p>
      <p>Servings {food.servings}</p>

      <p>
        <b>Total Calories: {food.servings * food.calories} </b> kcal
      </p>

      <button onClick={()=> deleteFood(food.id)} >Delete</button>
    </div>
  );
}

export default FoodBox;