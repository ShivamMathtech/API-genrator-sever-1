const burgersCtrl = (req, res) => {
  // Logic to fetch burgers from a database or API
  const burgerNames = [
    "Classic Cheeseburger",
    "Bacon Burger",
    "Mushroom Swiss Burger",
    "Barbecue Bacon Burger",
    "Veggie Burger",
    "Spicy Jalapeño Burger",
    "Double Beef Burger",
    "Hawaiian Burger",
    "Black Bean Burger",
    "Buffalo Chicken Burger",
    "Guacamole Burger",
    "Mac & Cheese Burger",
    "Peanut Butter Burger",
    "Teriyaki Burger",
    "Crispy Chicken Burger",
    "Greek Burger",
    "Sriracha Burger",
    "Pesto Chicken Burger",
    "Rodeo Burger",
    "Brisket Burger",
  ];
  const burgerPrices = [
    9.99, // Classic Cheeseburger
    10.99, // Bacon Burger
    11.49, // Mushroom Swiss Burger
    12.99, // Barbecue Bacon Burger
    8.99, // Veggie Burger
    10.49, // Spicy Jalapeño Burger
    13.99, // Double Beef Burger
    11.99, // Hawaiian Burger
    9.49, // Black Bean Burger
    12.49, // Buffalo Chicken Burger
    10.99, // Guacamole Burger
    11.49, // Mac & Cheese Burger
    10.99, // Peanut Butter Burger
    11.99, // Teriyaki Burger
    12.49, // Crispy Chicken Burger
    11.49, // Greek Burger
    10.99, // Sriracha Burger
    12.99, // Pesto Chicken Burger
    11.99, // Rodeo Burger
    13.49, // Brisket Burger
  ];
  const burgerIngredients = [
    "Beef Patty",
    "Cheddar Cheese",
    "Lettuce",
    "Tomato",
    "Onion",
    "Pickles",
    "Bacon",
    "Mushrooms",
    "Swiss Cheese",
    "BBQ Sauce",
    "Ketchup",
    "Mustard",
    "Mayo",
    "Jalapeños",
    "Avocado",
    "Guacamole",
    "Spinach",
    "Black Beans",
    "Chickpeas",
    "Crispy Chicken",
    "Teriyaki Sauce",
    "Sriracha Sauce",
    "Peanut Butter",
    "Pesto",
    "Feta Cheese",
    "Red Onion",
    "Arugula",
    "Fresh Basil",
    "Pineapple",
    "Egg (Fried or Poached)",
  ];
  let burgerIngredent = [];
  for (let i = 0; i < 4; i++) {
    burgerIngredent.push(
      burgerIngredients[Math.floor(Math.random() * burgerIngredients.length)]
    );
  }
  const burgerCategories = [
    "Beef",
    "Chicken",
    "Vegetarian",
    "Vegan",
    "Fish/Seafood",
    "Spicy",
    "Gourmet",
    "Classic",
    "Barbecue",
    "Breakfast",
    "Fusion",
    "Low-Carb",
    "Gluten-Free",
    "Healthy",
  ];

  let burger_api = [];
  function burger_genrator() {
    const no_brgr = req.query.no_brgr || 10;
    for (let i = 0; i < no_brgr; i++) {
      burger_api.push({
        name: burgerNames[Math.floor(Math.random() * burgerNames.length)],
        price: burgerPrices[Math.floor(Math.random() * burgerPrices.length)],
        ingredients: burgerIngredent,
        categories:
          burgerCategories[Math.floor(Math.random() * burgerCategories.length)],
      });
    }
    return burger_api;
  }
  let server = Math.random().toFixed(1);
  if (server > 0.5) {
    res.status(200).json({
      message: "Burgers received successfully!",
      burger: burger_genrator(),
    });
  } else {
    res.status(503).json({
      message: "Server is busy please try again ! Sorry for the inconvenience",
    });
  }
};

module.exports = burgersCtrl;
