import React, { useState } from "react";
import "./food.css";

const FoodComponent = () => {
  const [selectedMeal, setSelectedMeal] = useState("breakfast");

  const getMealDescription = () => {
    const mealDescriptions = {
      breakfast: {
        description: "Breakfast meals are here!!",
        meals: [
          {
            name: "Poha",
            description: "Poha is a popular Indian breakfast dish.",
          },
          {
            name: "Poha",
            description: "Poha is a popular Indian breakfast dish.",
          },
          {
            name: "Poha",
            description: "Poha is a popular Indian breakfast dish.",
          },
          // Add more breakfast options...
        ],
      },
      lunch: {
        description: "Lunch meals are here !!",
        meals: [
          {
            name: "Chapati with Ladyfinger",
            description: "Chapati served with ladyfinger curry.",
          },
          // Add more lunch options...
        ],
      },
      dinner: {
        description: "Dinner meals are here !!",
        meals: [
          {
            name: "Dal Rice",
            description: "Dal served with rice.",
          },
          // Add more dinner options...
        ],
      },
    };

    return mealDescriptions[selectedMeal];
  };

  const mealDescription = getMealDescription();

  return (
    <section id="food" className="food">
      <h2 className="head">Food Menu</h2>
      <div className="food__buttons">
        <button
          className={selectedMeal === "breakfast" ? "active" : ""}
          onClick={() => setSelectedMeal("breakfast")}
        >
          Breakfast
        </button>
        <button
          className={selectedMeal === "lunch" ? "active" : ""}
          onClick={() => setSelectedMeal("lunch")}
        >
          Lunch
        </button>
        <button
          className={selectedMeal === "dinner" ? "active" : ""}
          onClick={() => setSelectedMeal("dinner")}
        >
          Dinner
        </button>
      </div>

      {mealDescription && (
        <div className="food-description">
          <h3>
            {selectedMeal.charAt(0).toUpperCase() + selectedMeal.slice(1)} Meals
          </h3>
          <p>{mealDescription.description}</p>

          <div className="meal-cards">
            {mealDescription.meals.map((meal, index) => (
              <div
                className={`meal-card ${
                  selectedMeal === "breakfast" ? "active" : ""
                }`}
                key={index}
              >
                <div className="meal-card__info">
                  <h4>{meal.name}</h4>
                  <p>{meal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default FoodComponent;
