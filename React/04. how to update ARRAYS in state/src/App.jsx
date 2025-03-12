import { React, useState } from "react";

function App() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;

    document.getElementById("foodInput").value = "";

    setFoods((f) => [...foods, newFood]);
  }

  function handleRemoveFood(index) {

    setFoods(foods.filter((_, i) => {
      return i !== index
    }))
  }

  return (
    <>
      <div>
        <h2>List of Foods</h2>

        <ul>
          {foods.map((food, index) => {
            return (
              <li key={index} onClick={() => handleRemoveFood(index)}>
                {food}
              </li>
            );
          })}
        </ul>

        <input type="text" id="foodInput" placeholder="Enter food name" />
        <button onClick={handleAddFood}>Add Food</button>
      </div>
    </>
  );
}

export default App;
