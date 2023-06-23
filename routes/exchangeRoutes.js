const express = require("express");
const exchangeController = require("../controllers/exchangeController.js");

const router = express.Router();

router.get("/exchanges", exchangeController.getAllExchanges);

router.get("/exchanges/:id/tickers", exchangeController.getExchangeTickers);

router.get(
  "/exchanges/:id/volume_chart",
  exchangeController.getExchangeVolumeChart
);

router.get("/exchanges/:id", exchangeController.getExchangeById);

module.exports = router;
