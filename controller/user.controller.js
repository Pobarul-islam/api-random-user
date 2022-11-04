const data = require("../public/user.json");

module.exports.getUserRandom = (req, res) => {
  const randomUser = data[Math.round(Math.random() * (data.length - 1))];
  res.json(randomUser);
};


