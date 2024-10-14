const beerTypes = [
  "Lager",
  "Pale Lager",
  "Pilsner",
  "Amber Lager",
  "Dark Lager",
  "Helles",
  "Bock",
  "Doppelbock",
  "Pale Ale",
  "India Pale Ale (IPA)",
  "Double IPA",
  "New England IPA",
  "Brown Ale",
  "Porter",
  "Stout",
  "Imperial Stout",
  "Milk Stout",
  "Dry Stout",
  "Wheat Beer",
  "Hefeweizen",
  "Witbier",
  "Saison",
  "Blonde Ale",
  "Amber Ale",
  "Barleywine",
  "Scotch Ale",
  "Cream Ale",
  "Belgian Dubbel",
  "Belgian Tripel",
  "Belgian Quadruple",
  "Sour Beer",
  "Gose",
  "Berliner Weisse",
  "Lambic",
  "Fruit Beer",
  "Pumpkin Ale",
  "Rye Beer",
  "Wild Ale",
  "Session IPA",
  "Kolsch",
];
const beerApi = [];
function beerGenratior(count) {
  for (let i = 0; i < count; i++) {
    beerApi.push({
      name: beerTypes[Math.floor(Math.random() * beerTypes.length)],
      price: Math.floor(Math.random() * 100) + 10,
      description: `A ${
        beerTypes[Math.floor(Math.random() * beerTypes.length)]
      } beer`,
    });
  }
  return beerApi;
}

const beerCtrls = (req, res) => {
  const count = req.query.count || 10;
  let server = Math.random().toFixed(1);
  if (server > 0.5) {
    res.status(200).json({
      beers: beerGenratior(count),
    });
  } else {
    res.status(503).json({
      message: "Server is Busy",
    });
  }
};

module.exports = beerCtrls;
