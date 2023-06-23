const express = require("express");
const coinsController = require("../controllers/coinsController.js");

const router = express.Router();

router.get("/list", coinsController.getAllCoins);

router.get("/search", coinsController.getCoinsBySearching);

router.get("/trending", coinsController.getTopTrendingCoins);

router.get("/list/:id", coinsController.getCoinById);

module.exports = router;
