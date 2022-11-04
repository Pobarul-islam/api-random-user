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

module.exports.saveUser = (req, res) => {
  const newUser = req.body;
  if (
    newUser.name &&
    newUser.id &&
    newUser.gender &&
    newUser.address &&
    newUser.contact &&
    newUser.photoUrl
  ) {
    data.push(newUser);
    res.json(newUser);
  } else {
    res.send(`plese follow the description down below:
    {"id": 2,
    "name": "Abul kabul",
    "gender": "male",
    "contact": "229-326-7620",
    "address": "2872 Private Lane Albany, GA 31707",
    "photoUrl": "https://i.ibb.co/DRNbMbf/download-1.jpg"}
    `);
  }
};

