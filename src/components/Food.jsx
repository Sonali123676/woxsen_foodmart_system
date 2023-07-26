import React, { useState } from "react";
import "./food.css";

const FoodComponent = () => {
  const [selectedMeal, setSelectedMeal] = useState("breakfast");

  const getMealDescription = () => {
    const mealDescriptions = {
      breakfast: {
        description: "Daily:Boiled Egg & Omlette,Bread/Jam/Butter,Tea/coffe/Milk,Sprouts/Corn flakes",
        meals: [
          {
            name: "Idly/Wada",
            description: "Idli is a healthy breakfast that is served with delicious coconut chutney and sambar",
          },
          {
            name: "Mysoor Boonda/Upma",
            description: "Mysore bonda is a healthy snack crunchy on the outer side and soft and spongy in the inner side of the dumpling",
          },
          {
            name: "Uthapam",
            description: "Uthapam is a savory South Indian pancake made from fermented rice and lentil batter, often topped with vegetables.",
          },
          {
            name: "Puri/Poha",
            description: "Poha is a traditional Indian breakfast dish made from flattened rice, often cooked with onions, peas, and spices.",
          },
          {
            name: "Idli Wada",
            description: "Idli is a healthy breakfast that is served with delicious coconut chutney and sambar",
          },
          {
            name: "Dosa",
            description: "Dosa is a popular South Indian fermented crepe made from rice and black gram batter.",
          },
          {
            name: "Aloo Parantha",
            description: "Aloo Paratha is a delicious Indian flatbread stuffed with spiced mashed potatoes and cooked on a griddle until golden and crispy.",
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
        description: "Daily:Rice,Curd,Banana,Milk,Chapati",
        meals: [
          {
            name: "Dal Tadka",
            
          },
          {
            name: "Palak Dal",
            
          },
          {
            name: "Tomato Dal",
            
          },
          {
            name: "Dal Fry",
            
          },
          {
            name: "Dal Lasoni",
            
          },
          {
            name: "Methi Dal",
            
          },
          {
            name: "Masoor Dal",
           
          },
          {
            name: "Chole Bhature",
           
          },
          {
            name: "Veg Kofta",
            
          },
          {
            name: "Khichdi Katta",
           
          },
          {
            name: "Veg Noodles",
           
          },
          {
            name: "Capsicum Paneer",
           
          },
          {
            name: "Egg Bhurji",
           
          },
          {
            name: "Gobi Mnachurian wet",
            
          },
          {
            name: "Beans Tomato Curry",
            
          },
          {
            name: "Egg Fried Rice",
           
          },
          {
            name: "Mirchi Bhaji",
           
          },
          {
            name: "Palak Corn curry",
            
          },
          {
            name: "Cabbage Porial",
            
          },
          {
            name: "Cabbage Pakoda",
            
          },
          {
            name: "Veg Fried Rice",
            
          },
          {
            name: "Veg Soup",
           
          },
          {
            name: "Veg Tehri",
           
          },
          {
            name: "Crispy Veg",
            
          },
          {
            name: "Garlic Rice",
           
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
