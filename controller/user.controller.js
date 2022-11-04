const data = require("../public/user.json");

module.exports.getUserRandom = (req, res) => {
  const randomUser = data[Math.round(Math.random() * (data.length - 1))];
  res.json(randomUser);
};

module.exports.getAllUser = (req, res) => {
  const limit = req.query.limit || 10;
  const limitedData = data.slice(0, limit);
  res.json(limitedData);
};
