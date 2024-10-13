let noodlesname = [
  "Spaghetti",
  "Fettuccine",
  "Linguine",
  "Penne",
  "Fusilli",
  "Macaroni",
  "Ramen",
  "Udon",
  "Soba",
  "Rice Noodles",
  "Glass Noodles",
  "Vermicelli",
  "Chow Mein Noodles",
  "Egg Noodles",
  "Tagliatelle",
  "Cavatappi",
  "Rotini",
  "Orzo",
  "Ditalini",
  "Gnocchi",
  "Ziti",
  "Campanelle",
  "Pappardelle",
  "Lasagna Noodles",
  "Shirataki Noodles",
  "Kuy Teav (Rice Noodles)",
  "Bun (Vietnamese Rice Noodles)",
  "Cheung Fun (Rice Noodles)",
  "Soba (Buckwheat Noodles)",
  "Somyeon (Korean Wheat Noodles)",
  "Naengmyeon (Cold Buckwheat Noodles)",
  "Yaki Soba (Stir-Fried Noodles)",
  "Cabbage Noodles",
  "Chitarra",
  "Pici",
  "Mafaldini",
  "Bavette",
  "Trofie",
  "Fregula",
  "Pasta di Semola",
  "Pasta Fresca",
  "Cappellini",
  "Casoncelli",
  "Garganelli",
  "Pasta alla Chitarra",
];
let categories = [
  "Wheat Noodles",
  "Rice Noodles",
  "Specialty Noodles",
  "Short Pasta Shapes",
  "Fresh Noodles",
];
let ingredient = [
  "Wheat Flour",
  "Eggs",
  "Rice Flour",
  "Buckwheat Flour",
  "Mung Bean Starch",
  "Water",
  "Salt",
  "Alkaline Water (Lye Water)",
  "Corn Starch",
  "Tapioca Starch",
  "Soy Sauce",
  "Vegetable Oil",
  "Sesame Oil",
  "Flavorings (like garlic, onion powder)",
];
let showIngredient = [];
for (let i = 0; i < 4; i++) {
  showIngredient.push(
    ingredient[Math.floor(Math.random() * ingredient.length)]
  );
}
let noodlesApi = [];

const noodlesCtrl = (req, res) => {
  function noodlesApi_genrator() {
    let no_noodles = req.query.no_noodles || 10;
    for (let i = 0; i < no_noodles; i++) {
      noodlesApi.push({
        name: noodlesname[Math.floor(Math.random() * noodlesname.length)],
        price: Math.floor(Math.random() * 100) + 1,
        ingredients: showIngredient,
        categories: categories[Math.floor(Math.random() * categories.length)],
      });
    }
    return noodlesApi;
  }
  let server = Math.random().toFixed(1);
  if (server > 0.5) {
    res.status(200).json({
      noodles: noodlesApi_genrator(),
    });
  } else {
    res.status(503).json({
      message: "Server is Busy",
    });
  }
};
module.exports = noodlesCtrl;
