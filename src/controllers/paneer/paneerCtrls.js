const paneerRecipes = [
  "Paneer Butter Masala",
  "Palak Paneer",
  "Shahi Paneer",
  "Kadai Paneer",
  "Paneer Tikka",
  "Paneer Bhurji",
  "Chilli Paneer",
  "Paneer Pasanda",
  "Matar Paneer",
  "Paneer Tikka Masala",
  "Paneer Do Pyaza",
  "Paneer Lababdar",
  "Paneer 65",
  "Malai Paneer",
  "Tandoori Paneer",
  "Paneer Kofta",
  "Paneer Jalfrezi",
  "Afgani Paneer",
  "Paneer Biryani",
  "Achari Paneer",
  "Methi Malai Paneer",
  "Paneer Makhanwala",
  "Paneer Tawa Masala",
  "Paneer Korma",
  "Paneer Pulao",
  "Saag Paneer",
];
let paneerApi = [];
const paneerCtrls = (req, res) => {
  let server = Math.random().toFixed(1);
  function paneer_genrator() {
    let count = req.query.count || 5;
    for (let i = 0; i < count; i++) {
      paneerApi.push({
        name: paneerRecipes[Math.floor(Math.random() * paneerRecipes.length)],
        price: Math.floor(Math.random() * 100) + 10,
        quantity: Math.floor(Math.random() * 100) + 1,
      });
    }
    if (server > 0.5) {
      res.status(200).json({
        message: "Paneer received successfully!",
        paneer: paneerApi,
      });
    } else {
      res.status(503).json({
        message: "Server is busy please try again! Sorry for the inconvenience",
      });
    }
  }
  paneer_genrator();
};

module.exports = paneerCtrls;
