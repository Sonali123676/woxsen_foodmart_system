import React, { useState } from "react";
import "./food.css";

const FoodComponent = () => {
  const [selectedDay, setSelectedDay] = useState("monday"); // Default selected day is Monday

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const [selectedMeal, setSelectedMeal] = useState("breakfast");

  const getMealDescription = () => {
    const mealDescriptions = {
      monday: {
        breakfast: {
          meals: [
            {
              name: "Boiled Eggs & Omelette",
            },
            {
              name: "Bread/Jam/Butter",
            },
            {
              name: "Idly/Wada",
            },
            {
              name: "Tea/Coffee/Milk",
            },
            {
              name: "Sprouts/Corn Flakes",
            },
            // breakfast options...
          ],
        },
        lunch: {
          meals: [
            {
              name: "Plain Rice",
            },
            {
              name: "Corn Pulao",
            },
            {
              name: "Moong Dal",
            },
            {
              name: "Mix Veg Curry",
            },
            {
              name: "Egg Curry",
            },
            {
              name: "Chapathi",
            },
            {
              name: "Butter Milk",
            },
            {
              name: "Semiya Kheer",
            },
            {
              name: "Mango Pickle",
            },
            {
              name: "Green Salad",
            },
            // lunch options...
          ],
        },
        dinner: {
          meals: [
            {
              name: "Plain Rice",
            },
            {
              name: "Dal Thadka",
            },
            {
              name: "Chole",
            },
            {
              name: "Bhature",
            },
            {
              name: "Cabbage Porial",
            },
            {
              name: "Dal Kichidi",
            },
            {
              name: "Veg Soup",
            },
            {
              name: "Pulka",
            },
            {
              name: "Veg Soup",
            },
            {
              name: "Curd",
            },
            {
              name: "Banana",
            },
            // dinner options...
          ],
        },
      },
      tuesday: {
        breakfast: {
          meals: [
            {
              name: "Boiled Eggs & Omelette",
            },
            {
              name: "Bread/Jam/Butter/CornFlakes",
            },
            {
              name: "Bonda/Poha/Sprouts",
            },
            {
              name: "Tea/Coffee/Milk/BlackTea",
            },
            {
              name: "Sprouts/Corn Flakes",
            },
            // breakfast options...
          ],
        },
        lunch: {
          meals: [
            {
              name: "Plain Rice",
            },
            {
              name: "Curd Rice",
            },
            {
              name: "Dal Pakhoni",
            },
            {
              name: "Beerakaya Alu",
            },
            {
              name: "Gobi Tomato Dum",
            },
            {
              name: "Chapathi",
            },
            {
              name: "Rasam",
            },
            {
              name: "Vegetable Chatney",
            },
            {
              name: "Green Salad",
            },
            // lunch options...
          ],
        },
        dinner: {
          meals: [
            {
              name: "Plain Rice",
            },
            {
              name: "Palak Dal",
            },
            {
              name: "Mushroom Capsicum",
            },
            {
              name: "Bhendi Dum",
            },
            {
              name: "Dal Kichidi",
            },
            {
              name: "Chapathi",
            },

            {
              name: "Banana",
            },
            // dinner options...
          ],
        },
      },
      // Add descriptions for other days...
    };
    return mealDescriptions[selectedDay][selectedMeal];
  };

  const mealDescription = getMealDescription();

  return (
    <section id="food" className="food">
      <h2 className="head">Food Menu</h2>
      {/* Add the dropdown list */}
      <div className="day-dropdown">
        <label htmlFor="day">Select a day:</label>
        <select
          id="day"
          name="day"
          value={selectedDay}
          onChange={handleDayChange}
        >
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
          <option value="sunday">Sunday</option>
          {/* Add options for other days */}
        </select>
      </div>

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
