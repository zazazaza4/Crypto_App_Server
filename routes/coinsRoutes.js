const express = require("express");
const coinsController = require("../controllers/coinsController.js");

const router = express.Router();

router.get("/coins", coinsController.getAllCoins);

router.get("/search", coinsController.getCoinsBySearching);

router.get("/trending", coinsController.getTopTrendingCoins);

router.get("/coins/:id", coinsController.getCoinById);

module.exports = router;
