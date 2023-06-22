const axios = require("axios");
const { BASE_URL } = require("../consts.js");

class Exchange {
  static async getAllExchanges() {
    try {
      const { data } = await axios.get(`${BASE_URL}/exchanges`);
      return data;
    } catch (error) {
      return new Error(error);
    }
  }

  static async getExchangeById(id) {
    try {
      const { data } = await axios.get(`${BASE_URL}/exchanges/${id}`);
      return data;
    } catch (error) {
      return new Error(error);
    }
  }

  static async getExchangeTickers(id, page = 1) {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/exchanges/${id}/tickers?page=${page}`
      );
      return data;
    } catch (error) {
      return new Error(error);
    }
  }

  static async getExchangeVolumeChart(id) {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/exchanges/${id}/volume_chart`
      );
      return data;
    } catch (error) {
      return new Error(error);
    }
  }
}

module.exports = Exchange;
