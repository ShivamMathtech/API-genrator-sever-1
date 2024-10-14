const maggiFlavors = [
  "Masala Maggi",
  "Chicken Maggi",
  "Egg Maggi",
  "Vegetable Maggi",
  "Cheese Maggi",
  "Curry Maggi",
  "Paneer Maggi",
  "Chili Garlic Maggi",
  "Tomato Maggi",
  "Barbeque Maggi",
  "Pasta Maggi",
  "Butter Maggi",
];
const maggiApi = [];
function maggi_genratore(maggi_count) {
  for (let i = 1; i <= maggi_count; i++) {
    maggiApi.push({
      flavor: maggiFlavors[Math.floor(Math.random() * maggiFlavors.length)],
      price: Math.floor(Math.random() * 20) + 5,
      description: "A flavorful and delicious maggi recipe.",
    });
  }
  return maggiApi;
}

const maggiCtrls = (req, res) => {
  let server = Math.random().toFixed(1);
  const maggi_count = req.query.maggi_count || 5;
  if (server > 0.5) {
    res.status(200).json({
      message: "Maggi received successfully!",
      maggi: maggi_genratore(maggi_count),
    });
  } else {
    res.status(503).json({ message: "Server Busy" });
  }
};
module.exports = maggiCtrls;
