const express = require("express");
const cryptocurrencyController = require("../controllers/cryptocurrencyController.js");

const router = express.Router();

router.get(
  "/cryptocurrencies",
  cryptocurrencyController.getTopCryptocurrencies
);
router.get(
  "/cryptocurrencies/:id",
  cryptocurrencyController.getCryptocurrencyById
);

module.exports = router;
