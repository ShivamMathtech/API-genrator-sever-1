const shakeNames = [
  "Chocolate Shake",
  "Vanilla Shake",
  "Strawberry Shake",
  "Banana Shake",
  "Mango Shake",
  "Oreo Shake",
  "Peanut Butter Shake",
  "Coffee Shake",
  "Blueberry Shake",
  "Pineapple Shake",
  "Mint Chocolate Chip Shake",
  "Cookies and Cream Shake",
  "Almond Shake",
  "Protein Shake",
  "Avocado Shake",
  "Caramel Shake",
  "Matcha Shake",
  "Nutella Shake",
  "Butterscotch Shake",
  "Coconut Shake",
  "Raspberry Shake",
  "Peach Shake",
  "Kiwi Shake",
  "Cherry Shake",
  "Mocha Shake",
  "Vanilla Chai Shake",
];

const shakeApi = [];
function shakeGenrator(count) {
  for (let i = 0; i < count; i++) {
    shakeApi.push({
      name: shakeNames[Math.floor(Math.random() * shakeNames.length)],
      price: Math.floor(Math.random() * 100) + 10,
      description: "A refreshing and creamy dessert",
      categories: ["Dessert", "Shake"],
      ingredients: [
        "Milk",
        "Sugar",
        "Egg",
        "Flour",
        "Cocoa Powder",
        "Vanilla Extract",
      ],
      isGlutenFree: Math.random() < 0.5,
      isVegan: Math.random() < 0.5,
      isVegetarian: Math.random() < 0.5,
    });
  }
  return shakeApi;
}

const shakeCtrls = (req, res) => {
  let server = Math.random().toFixed(1); // Random server status between 0 and 1
  let count = req.query.count || 5;
  if (server > 0.5) {
    res.status(200).json({
      shakes: shakeGenrator(count),
    });
  } else {
    res.status(503).json({
      message: "Server is busy, please try again later",
    });
  }
};

module.exports = shakeCtrls;
