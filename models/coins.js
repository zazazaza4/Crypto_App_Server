const axios = require("axios");
const { BASE_URL } = require("../consts.js");

class Coins {
  static async getTopTrendingCoins(currency = "usd") {
    try {
      const [coinsRes, btcPriceRes] = await Promise.all([
        axios.get(`${BASE_URL}/search/trending`),
        axios.get(
          `${BASE_URL}/search/trending/simple/price?ids=bitcoin&vs_currencies=${currency}`
        ),
      ]);

      const btcPrice = btcPriceRes.data.bitcoin.usd;

      const data = coinsRes.data.coins.map((coin) => {
        const { name, large, id, price_btc } = coin.item;

        const priceUsd = (price_btc * btcPrice).toFixed(6);
        const priceBtc = price_btc.toFixed(6);

        return {
          id,
          name,
          priceBtc,
          priceUsd,
          image: large,
        };
      });

      return data;
    } catch (error) {
      return new Error(error);
    }
  }

  static async getCoinById(id) {
    try {
      const { data } = await axios.get(`${BASE_URL}/coins/${id}`, {
        params: {
          localization: false,
          market_data: true,
        },
      });
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getAllCoins(page = 1, limit = 30, currency = "usd") {
    try {
      const { data } = await axios.get(`${BASE_URL}/coins/markets`, {
        params: {
          vs_currency: currency,
          order: "market_cap_desc",
          per_page: limit,
          page,
          sparkline: false,
          locale: "en",
        },
      });

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getCoinsBySearching(query = "") {
    try {
      const { data } = await axios.get(`${BASE_URL}/coins/markets`, {
        params: {
          vs_currency: query,
          order: "market_cap_desc",
          per_page: 10,
          page: 1,
          sparkline: false,
          locale: "en",
        },
      });

      const formattedData = data.map((coin) => ({
        id: coin.id,
        name: coin.name,
        image: coin.image,
      }));

      return formattedData;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = Coins;
