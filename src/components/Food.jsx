import React, { useState } from "react";
import "./food.css";

const FoodComponent = () => {
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [selectedRiceOption, setSelectedRiceOption] = useState(null);

  const getMealDescription = () => {
    const mealDescriptions = {
      breakfast: {
        description:
          "Daily:Boiled Egg & Omlette,Bread/Jam/Butter,Tea/coffe/Milk,Sprouts/Corn flakes",
        meals: [
          {
            name: "Idly/Wada",
            description:
              "Idli is a healthy breakfast that is served with delicious coconut chutney and sambar",
          },
          {
            name: "Mysoor Boonda/Upma",
            description:
              "Mysore bonda is a healthy snack crunchy on the outer side and soft and spongy in the inner side of the dumpling",
          },
          {
            name: "Uthapam",
            description:
              "Uthapam is a savory South Indian pancake made from fermented rice and lentil batter, often topped with vegetables.",
          },
          {
            name: "Puri/Poha",
            description:
              "Poha is a traditional Indian breakfast dish made from flattened rice, often cooked with onions, peas, and spices.",
          },
          {
            name: "Idli Wada",
            description:
              "Idli is a healthy breakfast that is served with delicious coconut chutney and sambar",
          },
          {
            name: "Dosa",
            description:
              "Dosa is a popular South Indian fermented crepe made from rice and black gram batter.",
          },
          {
            name: "Aloo Parantha",
            description:
              "Aloo Paratha is a delicious Indian flatbread stuffed with spiced mashed potatoes and cooked on a griddle until golden and crispy.",
          },
          // Add more breakfast options...
        ],
      },
      lunch: {
        description: "Lunch meals are here !!",
        meals: [
          {
            name: "Plain Rice",
          },
          {
            name: "Chapathi",
          },
          {
            name: "Green Salad",
          },

          {
            name: "Rice Varieties",

            options: [
              {
                name: "Corn Pulao",
              },
              {
                name: "Curd Rice",
              },
              {
                name: "Bagara Rice",
              },
              {
                name: "Sambar Rice",
              },
              {
                name: "Lemon Rice",
              },
            ],
          },

          {
            name: "Veg Varieties",

            options: [
              {
                name: "Moong Dal",
              },
              {
                name: "Dal Thadka",
              },
              {
                name: "lal Chana",
              },
              {
                name: "Veg Biryani",
              },
            ],
          },
          {
            name: "NonVeg Varieties",

            options: [
              {
                name: "Egg Curry",
              },
              {
                name: "Chicken Curry",
              },
              {
                name: "Rogani Chicken",
              },
              {
                name: "Beerakaya Curry",
              },
            ],
          },
          {
            name: "Sides",

            options: [
              {
                name: "Mango Pickle",
              },
              {
                name: "Green Chatney",
              },
            ],
          },
          {
            name: "Sweet Varieties",

            options: [
              {
                name: "Semiya kheer",
              },
              {
                name: "Suji Ka Halwa",
              },
              {
                name: "Fruit Custurd",
              },
              {
                name: "Jibe Gaja",
              },
            ],
          },
          {
            name: "Drink Varieties",
            description: "Choose from various Sweet options.",
            options: [
              {
                name: "Butter Milk",
              },
              {
                name: "Lemon juice",
              },
              {
                name: "Mango Juice",
              },
              {
                name: "Rasna",
              },
              {
                name: "Roohafza",
              },
            ],
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

  const handleRiceOptionChange = (option) => {
    setSelectedRiceOption(option);
  };

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

                  {selectedMeal === "lunch" &&
                  (meal.name === "Rice Varieties" ||
                    meal.name === "NonVeg Varieties" ||
                    meal.name === "Veg Varieties" ||
                    meal.name === "Drink Varieties" ||
                    meal.name === "Sweet Varieties" ||
                    meal.name === "Sides") ? (
                    <div className="options-buttons">
                      <h5 style={{ color: "GrayText", marginBottom: "5px" }}>
                        Choose among them
                      </h5>
                      {meal.options.map((option, optionIndex) => (
                        <button
                          key={optionIndex}
                          className={`option-button ${
                            selectedRiceOption === option.name ? "active" : ""
                          }`}
                          onClick={() => handleRiceOptionChange(option.name)}
                        >
                          {option.name}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p>{meal.description}</p>
                  )}
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
