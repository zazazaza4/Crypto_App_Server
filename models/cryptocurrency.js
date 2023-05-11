const axios = require("axios");

const BASE_URL = "https://pro-api.coinmarketcap.com/v1";

class Cryptocurrency {
  static async getTopCryptocurrencies(limit = 10) {
    const response = await axios.get(
      `${BASE_URL}/cryptocurrency/listings/latest`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY,
        },
        params: {
          limit,
        },
      }
    );
    return response.data.data;
  }

  static async getCryptocurrencyById(id) {
    const response = await axios.get(`${BASE_URL}/cryptocurrency/info`, {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY,
      },
      params: {
        id,
      },
    });
    return response.data.data[id];
  }
}

module.exports = Cryptocurrency;
