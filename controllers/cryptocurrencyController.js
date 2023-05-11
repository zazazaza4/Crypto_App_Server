const Cryptocurrency = require("../models/cryptocurrency.js");

const cryptocurrencyController = {};

cryptocurrencyController.getTopCryptocurrencies = async (req, res) => {
  const limit = req.query.limit || 10;
  const cryptocurrencies = await Cryptocurrency.getTopCryptocurrencies(limit);
  res.status(200).send({ cryptocurrencies });
};

cryptocurrencyController.getCryptocurrencyById = async (req, res) => {
  const cryptocurrency = await Cryptocurrency.getCryptocurrencyById(
    req.params.id
  );
  res.send("cryptocurrency", { cryptocurrency });
};

module.exports = cryptocurrencyController;
