const TelegramBot = require('node-telegram-bot-api');
const { telegramToken, finnhubKey, chatId } = require('./config/config');
const { getStockPrice } = require('./utils/finnhub');

// Check for missing environment variables
if (!telegramToken || !finnhubKey || !chatId) {
  console.error('Error: Missing environment variables!');
  process.exit(1);
}

// Create bot instance
const bot = new TelegramBot(telegramToken, { polling: true });

// Basic commands
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(chatId, 'Bot is now active and running!');
});

bot.onText(/\/ping/, (msg) => {
  bot.sendMessage(chatId, 'Pong!');
});

// Command to get stock price from Finnhub
bot.onText(/\/price (.+)/, async (msg, match) => {
  const symbol = match[1].toUpperCase();
  const price = await getStockPrice(symbol, finnhubKey);
  if (price !== null) {
    bot.sendMessage(chatId, `${symbol} current price: $${price}`);
  } else {
    bot.sendMessage(chatId, `Error fetching price for ${symbol}`);
  }
});

// Example: Add more automation commands below
// bot.onText(/\/yourcommand/, async (msg) => { ... });

console.log('Telegram bot started successfully!');
