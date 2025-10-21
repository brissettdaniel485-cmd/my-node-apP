const TelegramBot = require('node-telegram-bot-api');

// Load token from environment variables (set in Render dashboard)
const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
  console.error('Error: TELEGRAM_BOT_TOKEN is not set!');
  process.exit(1);
}

// Create bot instance
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Hello! Bot is running.');
});

// Example command for testing
bot.onText(/\/ping/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Pong!');
});

console.log('Telegram bot started successfully!');
