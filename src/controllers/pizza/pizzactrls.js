const pizza = (req, res) => {
  const no_pizza = req.query.no_pizza;
  const pizzaNames = [
    "Margherita",
    "Pepperoni",
    "BBQ Chicken",
    "Hawaiian",
    "Meat Lovers",
    "Veggie Supreme",
    "Four Cheese",
    "Buffalo Chicken",
    "Mushroom & Spinach",
    "Pesto Chicken",
    "Sausage & Peppers",
    "Mediterranean",
    "Chicken Alfredo",
    "Philly Cheesesteak",
    "Taco Pizza",
    "White Pizza",
    "Italian Sausage",
    "Cheese Lovers",
    "Capricciosa",
    "Funghi (Mushroom)",
    "Diavola (Spicy Salami)",
    "Bianca (White Sauce)",
    "Marinara",
    "Quattro Stagioni (Four Seasons)",
    "Carbonara",
    "Prosciutto & Arugula",
    "Salami & Olive",
    "Greek Pizza",
    "Spinach & Feta",
    "Truffle Pizza",
  ];
  const pizzaPrices = [
    8.99, // Margherita
    9.99, // Pepperoni
    12.99, // BBQ Chicken
    11.49, // Hawaiian
    14.99, // Meat Lovers
    13.99, // Veggie Supreme
    10.99, // Four Cheese
    12.49, // Buffalo Chicken
    11.99, // Mushroom & Spinach
    13.49, // Pesto Chicken
    12.99, // Sausage & Peppers
    14.49, // Mediterranean
    13.99, // Chicken Alfredo
    15.49, // Philly Cheesesteak
    13.99, // Taco Pizza
    9.99, // White Pizza
    12.99, // Italian Sausage
    8.49, // Cheese Lovers
    13.99, // Capricciosa
    11.49, // Funghi (Mushroom)
    12.99, // Diavola (Spicy Salami)
    10.99, // Bianca (White Sauce)
    7.99, // Marinara
    15.99, // Quattro Stagioni (Four Seasons)
    14.99, // Carbonara
    16.49, // Prosciutto & Arugula
    12.49, // Salami & Olive
    13.99, // Greek Pizza
    12.99, // Spinach & Feta
    17.49, // Truffle Pizza
  ];
  const pizzaIngredients = [
    "Tomato Sauce",
    "Mozzarella Cheese",
    "Pepperoni",
    "Mushrooms",
    "Onions",
    "Green Peppers",
    "Black Olives",
    "Italian Sausage",
    "Ham",
    "Bacon",
    "Chicken",
    "BBQ Sauce",
    "Pineapple",
    "Spinach",
    "Fresh Basil",
    "Parmesan Cheese",
    "Feta Cheese",
    "Ricotta Cheese",
    "Anchovies",
    "Jalapeños",
    "Cherry Tomatoes",
    "Artichokes",
    "Prosciutto",
    "Arugula",
    "Red Onion",
    "Pesto",
    "Garlic",
    "Oregano",
    "Truffle Oil",
    "Sun-dried Tomatoes",
  ];

  const pizzaCategories = [
    "Vegetarian",
    "Meat",
    "Chicken",
    "Seafood",
    "Gourmet",
    "Cheese Lovers",
    "Spicy",
    "Classic",
    "Vegan",
    "Gluten-Free",
  ];
  let server = Math.random().toFixed(1);
  let PizzaApi = [];
  let pingredent = [];
  for (let i = 0; i <= 4; i++) {
    pingredent.push(
      pizzaIngredients[Math.floor(Math.random() * pizzaIngredients.length)]
    );
  }
  //   no_pizza = res.query.no_pizza;
  function pizza_genrator(count = 10) {
    // console.log(req.query.no_pizza);
    for (let i = 0; i < req.query.no_pizza; i++) {
      PizzaApi.push({
        name: pizzaNames[Math.floor(Math.random() * pizzaNames.length)],
        price: pizzaPrices[Math.floor(Math.random() * pizzaPrices.length)],
        ingrident: pingredent,
        category:
          pizzaCategories[Math.floor(Math.random() * pizzaCategories.length)],
      });
    }
    return PizzaApi;
  }

  if (server > 0.5) {
    res.status(200).json({
      Pizza: pizza_genrator(),
    });
  } else {
    res.status(503).json({
      message: "Server Busy",
    });
  }
};

module.exports = pizza;
