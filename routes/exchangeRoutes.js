const express = require("express");
const exchangeController = require("../controllers/exchangeController.js");

const router = express.Router();

router.get("/", exchangeController.getAllExchanges);

router.get("/:id", exchangeController.getExchangeById);

router.get("/:id/tickers", exchangeController.getExchangeTickers);

router.get("/:id/volume_chart", exchangeController.getExchangeVolumeChart);

module.exports = router;
