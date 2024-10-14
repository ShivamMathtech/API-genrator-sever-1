const cakeTypes = [
  "Chocolate Cake",
  "Vanilla Cake",
  "Red Velvet Cake",
  "Cheesecake",
  "Black Forest Cake",
  "Pineapple Cake",
  "Carrot Cake",
  "Lemon Cake",
  "Marble Cake",
  "Coffee Cake",
  "Fruit Cake",
  "Butter Cake",
  "Sponge Cake",
  "Strawberry Cake",
  "Angel Food Cake",
  "Chiffon Cake",
  "Cupcake",
  "Funfetti Cake",
  "Tiramisu Cake",
  "Coconut Cake",
  "Opera Cake",
  "Mousse Cake",
  "Ice Cream Cake",
  "Molten Lava Cake",
  "Pumpkin Cake",
  "Matcha Cake",
];
const cakeIngredients = [
  "All-purpose flour",
  "Sugar",
  "Baking powder",
  "Baking soda",
  "Salt",
  "Butter",
  "Eggs",
  "Milk",
  "Vanilla extract",
  "Vegetable oil",
  "Buttermilk",
  "Cocoa powder",
  "Chocolate chips",
  "Heavy cream",
  "Yogurt",
  "Lemon zest",
  "Almond flour",
  "Cornstarch",
  "Powdered sugar",
  "Food coloring",
  "Cream cheese",
  "Fruits (strawberries, bananas, etc.)",
  "Nuts (walnuts, almonds, etc.)",
  "Coconut flakes",
  "Baking chocolate",
  "Gelatin",
];
let ingredients = [];
for (let i = 0; i < ingredients.length; i++) {
  ingredients.push(
    cakeIngredients[Math.floor(Math.random() * cakeIngredients.length)]
  );
}
const cakeCategories = [
  "Layer Cakes",
  "Sponge Cakes",
  "Butter Cakes",
  "Pound Cakes",
  "Cheesecakes",
  "Chiffon Cakes",
  "Flourless Cakes",
  "Ice Cream Cakes",
  "Fruit Cakes",
  "Carrot Cakes",
  "Red Velvet Cakes",
  "Mousse Cakes",
  "Cupcakes",
  "Tiramisu Cakes",
  "Bundt Cakes",
  "Sheet Cakes",
  "Upside-Down Cakes",
  "Angel Food Cakes",
  "Genoise Cakes",
  "Opera Cakes",
  "Birthday Cakes",
  "Wedding Cakes",
  "Holiday Cakes",
  "Tres Leches Cakes",
  "Mud Cakes",
  "Black Forest Cakes",
];

let cakeApi = [];
function cakegenrator(no_cake) {
  for (let i = 0; i < no_cake; i++) {
    cakeApi.push({
      type: cakeTypes[Math.floor(Math.random() * cakeTypes.length)],
      price: Math.floor(Math.random() * 100) + 1,
      ingredients: showIngredient,
      categories:
        cakeCategoriess[Math.floor(Math.random() * cakeCategories.length)],
    });
  }
}

const cakeCtrls = (req, res) => {
  let server = Math.random().toFixed(1);
  let no_cake = req.query.count || 5;
  function cakegenrator(no_cake) {
    for (let i = 0; i < no_cake; i++) {
      cakeApi.push({
        type: cakeTypes[Math.floor(Math.random() * cakeTypes.length)],
        price: Math.floor(Math.random() * 100) + 1,
        ingredients: ingredients,
        categories:
          cakeCategories[Math.floor(Math.random() * cakeCategories.length)],
      });
    }
    return cakeApi;
  }

  if (server > 0.5) {
    res.status(200).json({
      message: "Cakes received successfully!",
      cake: cakegenrator(req.query.count || 10),
    });
  } else {
    res.status(503).json({
      message: "Server is Busy",
    });
  }
};

module.exports = cakeCtrls;
