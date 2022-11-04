const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

router.route("/random").get(userController.getUserRandom);

module.exports = router;
