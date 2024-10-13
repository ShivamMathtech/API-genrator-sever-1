let chowmeenNames = [
  "Crispy Chow Mein",
  "Soft Chow Mein",
  "Vegetable Chow Mein",
  "Chicken Chow Mein",
  "Beef Chow Mein",
  "Shrimp Chow Mein",
  "Pork Chow Mein",
  "Combo Chow Mein",
  "Singapore Chow Mein",
  "House Special Chow Mein",
  "Mushroom Chow Mein",
  "Chow Mein with Tofu",
];
let cingredients = [
  "Noodles",
  "Chicken",
  "Beef",
  "Shrimp",
  "Pork",
  "Tofu",
  "Bell Peppers",
  "Carrots",
  "Cabbage",
  "Onions",
  "Bean Sprouts",
  "Broccoli",
  "Mushrooms",
  "Garlic",
  "Ginger",
  "Soy Sauce",
  "Oyster Sauce",
  "Hoisin Sauce",
  "Sesame Oil",
  "Vegetable Oil",
  "Green Onions (Scallions)",
  "Sugar",
  "Pepper",
  "Cornstarch (for thickening)",
  "Water Chestnuts",
  "Bamboo Shoots",
];
let ingredients = [];
for (let i = 0; i < 4; i++) {
  ingredients.push(
    cingredients[Math.floor(Math.random() * cingredients.length)]
  );
}
let chowmeenApi = [];

// Controller function to handle chowmein requests
const chowmeenCtrls = (req, res) => {
  let server = Math.random().toFixed(1);

  function chowmeen_genrator() {
    let no_chowmeen = req.query.no_chowmeen || 10;
    for (let i = 0; i < no_chowmeen; i++) {
      chowmeenApi.push({
        name: chowmeenNames[Math.floor(Math.random() * chowmeenNames.length)],
        price: Math.floor(Math.random() * 100) + 10,
        description:
          "Chowmein made with beef, vegetables, and sometimes spicy peppers",
        categories: ["Chowmein", "Appetizer"],
        ingredients: ingredients,
        isSpicy: Math.random() < 0.5,
        isVegetarian: Math.random() < 0.5,
        isGlutenFree: Math.random() < 0.5,
        isDairyFree: Math.random() < 0.5,
      });
    }
    return chowmeenApi;
  }

  if (server > 0.5) {
    res.status(200).json({
      message: "Chowmein received successfully!",
      chowmein: chowmeen_genrator(),
    });
  } else {
    res.status(503).json({
      message: "Server is busy please try again! Sorry for the inconvenience",
    });
  }
};

module.exports = chowmeenCtrls;
