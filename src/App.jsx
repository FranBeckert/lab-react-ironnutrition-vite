import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = foodId => {
    const filteredFoods = foods.filter(food => {
      return food.id !== foodId;
    })
    setFoods(filteredFoods);
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      {foods.map((food) => (<FoodBox key={food.id} food={food} deleteFood={deleteFood}/>))}
      
    </div>
  );
}

export default App;
