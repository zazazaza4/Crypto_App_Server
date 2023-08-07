const Exchange = require("../models/exchange.js");

const exchangeController = {};

exchangeController.getAllExchanges = async (req, res) => {
  try {
    const data = await Exchange.getAllExchanges();
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exchangeController.getExchangeById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Missing exchange ID" });
    }

    const data = await Exchange.getExchangeById(id);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exchangeController.getExchangeTickers = async (req, res) => {
  try {
    const { id } = req.params;
    const { page = 1 } = req.query;

    if (!id) {
      return res.status(400).json({ error: "Missing exchange ID" });
    }

    const tickers = await Exchange.getExchangeTickers(id, page);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exchangeController.getExchangeVolumeChart = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Missing exchange ID" });
    }

    const data = await Exchange.getExchangeVolumeChart(id);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = exchangeController;
