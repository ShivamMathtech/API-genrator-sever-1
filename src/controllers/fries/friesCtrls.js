const friesCtrls = (req, res) => {
  const friesTypes = [
    "Regular French Fries",
    "Curly Fries",
    "Sweet Potato Fries",
    "Loaded Fries",
    "Crinkle-Cut Fries",
    "Steak Fries",
    "Waffle Fries",
    "Shoestring Fries",
    "Garlic Fries",
    "Chili Cheese Fries",
    "Truffle Fries",
    "Spicy Fries",
    "Parmesan Fries",
    "Onion Rings",
    "Poutine",
  ];
  const friesPrices = [
    2.99, // Regular French Fries
    3.49, // Curly Fries
    3.99, // Sweet Potato Fries
    4.49, // Loaded Fries
    2.99, // Crinkle-Cut Fries
    3.49, // Steak Fries
    3.99, // Waffle Fries
    2.99, // Shoestring Fries
    3.49, // Garlic Fries
    4.99, // Chili Cheese Fries
    4.49, // Truffle Fries
    3.49, // Spicy Fries
    3.99, // Parmesan Fries
    3.49, // Onion Rings
    5.99, // Poutine
  ];
  const friesIngredients = [
    "Salt",
    "Pepper",
    "Garlic Powder",
    "Parmesan Cheese",
    "Chili Powder",
    "Paprika",
    "Oregano",
    "Cayenne Pepper",
    "Truffle Oil",
    "Bacon Bits",
    "Cheddar Cheese Sauce",
    "Sour Cream",
    "Green Onions",
    "Jalapeños",
    "Buffalo Sauce",
    "Ranch Dressing",
    "Guacamole",
    "Ketchup",
    "Mayonnaise",
    "BBQ Sauce",
  ];
  const friesCategories = [
    "Classic Fries",
    "Sweet Potato Fries",
    "Loaded Fries",
    "Spicy Fries",
    "Specialty Fries",
    "Healthy Options",
    "Gourmet Fries",
    "Curly and Waffle Fries",
    "Dipped Fries",
    "Cheesy Fries",
  ];
  const friApi = [];
  let count_fries = req.query.fries || 10;
  const ingredients = [];
  for (let i = 0; i < 4; i++) {
    ingredients.push(
      friesIngredients[Math.floor(Math.random() * friesIngredients.length)]
    );
  }
  function fri_genrator() {
    for (let i = 0; i < count_fries; i++) {
      const fri_type =
        friesTypes[Math.floor(Math.random() * friesTypes.length)];
      const fri_price =
        friesPrices[Math.floor(Math.random() * friesPrices.length)];

      const fri_category =
        friesCategories[Math.floor(Math.random() * friesCategories.length)];
      friApi.push({
        type: fri_type,
        price: fri_price,
        ingredients: ingredients,
        category: fri_category,
      });
    }
    return friApi;
  }
  let server = Math.random().toFixed(1);
  if (server > 0.5) {
    res.status(200).json({
      fries: fri_genrator(),
    });
  } else {
    res.status(503).json({
      message: "Server is Busy",
    });
  }
};

module.exports = friesCtrls;
