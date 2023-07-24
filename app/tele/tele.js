/*
// Assuming you're using the 'node-telegram-bot-api' library
const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_TELEGRAM_BOT_API_TOKEN' with your actual Telegram Bot API token
const bot = new TelegramBot('6337415994:AAEbWCoj8rx71yLilLJXiMwUlNnPG3PY2Qk', { polling: true });

bot.on('message', (msg) => {
  const userId = msg.from.id;
  console.log('Received message from user ID:', userId);
  // Your bot can now respond to the user using the user's Telegram ID
  bot.sendMessage(userId, 'Hello from your bot!');
});

*/

