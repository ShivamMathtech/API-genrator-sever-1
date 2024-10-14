const wineTypes = [
  "Red Wine",
  "White Wine",
  "Rosé Wine",
  "Sparkling Wine",
  "Dessert Wine",
  "Fortified Wine",
  "Cabernet Sauvignon",
  "Merlot",
  "Pinot Noir",
  "Malbec",
  "Shiraz/Syrah",
  "Zinfandel",
  "Sangiovese",
  "Tempranillo",
  "Chardonnay",
  "Sauvignon Blanc",
  "Pinot Grigio",
  "Riesling",
  "Moscato",
  "Gewürztraminer",
  "Champagne",
  "Prosecco",
  "Cava",
  "Brut",
  "Lambrusco",
  "Port",
  "Sherry",
  "Madeira",
  "Marsala",
  "Ice Wine",
  "Tokaji",
  "Chianti",
  "Barolo",
  "Bordeaux",
  "Chablis",
  "Beaujolais",
  "Grüner Veltliner",
  "Viognier",
  "Petit Verdot",
  "Pet-Nat",
];

let winApi = [];

function wine_generator(count) {
  for (let i = 0; i < count; i++) {
    winApi.push({
      name: wineTypes[Math.floor(Math.random() * wineTypes.length)],
      price: Math.floor(Math.random() * 500) + 100,
      type: wineTypes[Math.floor(Math.random() * wineTypes.length)],
    });
  }
  return winApi;
}

const winsCtrle = (req, res) => {
  let server = Math.random().toFixed(1);
  let no_wines = req.query.count || 10;
  if (server > 0.5) {
    res.status(200).json({
      message: "Wines received successfully!",
      wine: wine_generator(no_wines),
    });
  } else {
    res.status(503).json({
      message: "server is busy.",
    });
  }
};

module.exports = winsCtrle;
