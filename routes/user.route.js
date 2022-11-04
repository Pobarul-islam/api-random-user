const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

router.route("/random").get(userController.getUserRandom);
router.route("/all").get(userController.getAllUser);
router.route("/save").post(userController.saveUser);

module.exports = router;
