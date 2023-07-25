// Assuming you're using the 'node-telegram-bot-api' library
const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_TELEGRAM_BOT_API_TOKEN' with your actual Telegram Bot API token
const bot = new TelegramBot(secrets.bot_token_no, { polling: true });

console.log('file runs');

bot.on("polling_error", console.log);
let gimme;

bot.on('message', (msg) => {
  const userId = msg.from.id;
  const user_name = msg.from.username;
  console.log('Received message from user ID:', userId);
  // message.from_user.username
  console.log('Received message from username:', user_name);
  const tele_id = user_name; // Replace "your_tele_id_value" with the actual value of tele_id

  const route = `https://gymbro-mysql-6b313f0f66bb.herokuapp.com/api/bookingtele/${tele_id}`;
  fetch(route, {
      method: 'GET',
      headers: {
          "Content-Type": "application/json"
      },
  })
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
      gimme = data;
      console.log(gimme.date);
      console.log(gimme.start_time);
      console.log(gimme.end_time);
      const message = `Hey Gymbro! We have booked you in for a slot on ${gimme.date} at ${gimme.start_time} to ${gimme.end_time}. Hope to see you there!`;
      bot.sendMessage(userId, message)
        .then(() => {
            console.log('Message sent successfully.');
        })
        .catch((error) => {
            console.error('Error sending message:', error);
        });
  })
  .catch((error) => {
      console.error(error);
  })

});

