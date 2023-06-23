const express = require("express");
const exchangeController = require("../controllers/exchangeController.js");

const router = express.Router();

router.get("/list", exchangeController.getAllExchanges);

router.get("/list/:id/tickers", exchangeController.getExchangeTickers);

router.get("/list/:id/volume_chart", exchangeController.getExchangeVolumeChart);

router.get("/list/:id", exchangeController.getExchangeById);

module.exports = router;
