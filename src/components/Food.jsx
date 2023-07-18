import React, { useState } from "react";
import b1 from "./Food_Images/breakfast-1.jpg";
import b2 from "./Food_Images/breakfast-2.jpg";
import l1 from "./Food_Images/lunch-1.jpg";
import l2 from "./Food_Images/lunch-2.jpg";
import l3 from "./Food_Images/lunch-3.jpg";
import l4 from "./Food_Images/lunch-4.jpg";
import d2 from "./Food_Images/dinner-2.jpg";
import d3 from "./Food_Images/dinner-3.jpg";
import d1 from "./Food_Images/dinner-1.jpg";
import b3 from "./Food_Images/breakfast-3.jpg";
import b4 from "./Food_Images/breakfast-4.jpeg";
import "./food.css";

const FoodComponent = () => {
  const [selectedDay, setSelectedDay] = useState("Monday");

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  const getMealDescription = () => {
    // Define the meal descriptions for each day
    const mealDescriptions = {
      Monday: {
        description: "Monday meals are here!!",
        meals: [
          {
            name: "Breakfast",
            description: "Poha",
            image: b1,
          },
          {
            name: "Lunch",
            description: "Chapati with Ladyfinger",
            image: l1,
          },
          {
            name: "Dinner",
            description: "Dal Rice",
            image: d1,
          },
        ],
      },
      Tuesday: {
        description: "Tuesday meals are here !!",
        meals: [
          {
            name: "Breakfast",
            description: "Idli-Sambar",
            image: b2,
          },
          {
            name: "Lunch",
            description: "Lemon-Rice",
            image: l2,
          },
          {
            name: "Dinner",
            description: "Butter Chicken",
            image: d2,
          },
        ],
      },
      Wednesday: {
        description: "Wednesday meals are here !!",
        meals: [
          {
            name: "Breakfast",
            description: "Sandwiches",
            image: b3,
          },
          {
            name: "Lunch",
            description: "Pao Bhaji",
            image: l3,
          },
          {
            name: "Dinner",
            description: "Dal Makhni",
            image: d3,
          },
        ],
      },
      Thursday: {
        description: "Thursday meals are here !!",
        meals: [
          {
            name: "Breakfast",
            description: "Omlete",
            image: b4,
          },
          {
            name: "Lunch",
            description: "Dosa",
            image: l4,
          },
          {
            name: "Dinner",
            description: "Description of Tuesday dinner meal",
            image: "path/to/dinner-image.jpg",
          },
        ],
      },
      Friday: {
        description: "Friday meals are here !!",
        meals: [
          {
            name: "Breakfast",
            description: "Description of Tuesday breakfast meal",
            image: "path/to/breakfast-image.jpg",
          },
          {
            name: "Lunch",
            description: "Description of Tuesday lunch meal",
            image: "path/to/lunch-image.jpg",
          },
          {
            name: "Dinner",
            description: "Description of Tuesday dinner meal",
            image: "path/to/dinner-image.jpg",
          },
        ],
      },
      Saturday: {
        description: "Tuesday meals are here !!",
        meals: [
          {
            name: "Breakfast",
            description: "Description of Tuesday breakfast meal",
            image: "path/to/breakfast-image.jpg",
          },
          {
            name: "Lunch",
            description: "Description of Tuesday lunch meal",
            image: "path/to/lunch-image.jpg",
          },
          {
            name: "Dinner",
            description: "Description of Tuesday dinner meal",
            image: "path/to/dinner-image.jpg",
          },
        ],
      },
      Sunday: {
        description: "Tuesday meals are here !!",
        meals: [
          {
            name: "Breakfast",
            description: "Description of Tuesday breakfast meal",
            image: "path/to/breakfast-image.jpg",
          },
          {
            name: "Lunch",
            description: "Description of Tuesday lunch meal",
            image: "path/to/lunch-image.jpg",
          },
          {
            name: "Dinner",
            description: "Description of Tuesday dinner meal",
            image: "path/to/dinner-image.jpg",
          },
        ],
      },
      // Add meal descriptions for the remaining days...
    };

    return mealDescriptions[selectedDay];
  };

  const mealDescription = getMealDescription();

  return (
    <section id="food" className="food">
      <h2 className="head">Food Menu</h2>
      <select
        className="food__dropdown"
        value={selectedDay}
        onChange={handleDayChange}
      >
        <option value="Monday">Monday</option>

        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>

      {mealDescription && (
        <div className="food-description">
          <h3>{selectedDay} Meals</h3>
          <p>{mealDescription.description}</p>

          <div className="meal-cards">
            {mealDescription.meals.map((meal, index) => (
              <div className="meal-card" key={index}>
                <div className="meal-card__image">
                  <img src={meal.image} alt={meal.name} />
                </div>
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
