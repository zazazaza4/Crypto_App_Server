const Coins = require("../models/coins.js");

const coinsController = {};

coinsController.getTopTrendingCoins = async (req, res) => {
  const { currency = "usd" } = req.query;
  try {
    const data = await Coins.getTopTrendingCoins(currency);
    res.status(200).send({ data });
  } catch (e) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

coinsController.getAllCoins = async (req, res) => {
  try {
    const { page = 1, limit = 30, currency = "usd" } = req.query;
    const data = await Coins.getAllCoins(page, limit, currency);
    res.status(200).json({ data });
  } catch (error) {
    console.error("Error:", error);

    res.status(500).json({ error: "Internal Server Error" });
  }
};

coinsController.getCoinsBySearching = async (req, res) => {
  try {
    const { keyword } = req.query;
    const data = await Coins.getCoinsBySearching(keyword);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

coinsController.getCoinById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Missing cryptocurrency ID" });
    }

    const data = await Coins.getCoinById(id);
    res.status(200).send({ data });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = coinsController;
