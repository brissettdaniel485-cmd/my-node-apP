const axios = require('axios');

async function getStockPrice(symbol, apiKey) {
  try {
    const res = await axios.get(
      `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`
    );
    return res.data.c; // Current price
  } catch (err) {
    console.error(`Finnhub API error: ${err}`);
    return null;
  }
}

module.exports = {
  getStockPrice,
};
