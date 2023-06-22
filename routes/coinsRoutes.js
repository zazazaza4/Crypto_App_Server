const express = require("express");
const coinsController = require("../controllers/coinsController.js");

const router = express.Router();

router.get("/", coinsController.getAllCoins);

router.get("/:id", coinsController.getCoinById);

router.get("/search/:id", coinsController.getCoinsBySearching);

router.get("/trending", coinsController.getTopTrendingCoins);

module.exports = router;
