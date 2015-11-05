var TelegramBot = require('node-telegram-bot-api');
var request = require('request');

var token = process.env.TELEGRAM_BOT_TOKEN || '141314625:AAG4DlFQG0y7qAgQ5Ly1S14uyOLcMH7hNzw';
var port = process.env.PORT || 8443;
var host = process.env.HOST;

var options = {
  webHook: {
    port: port,
    host: host,
    key: __dirname+'/key.pem',
    cert: __dirname+'/crt.pem'
  }
};
console.log(port);
console.log(host);

var bot = new TelegramBot(token, options);

bot.setWebHook(host+'/'+token, __dirname+'/crt.pem');

bot.getMe().then(function (me) {
  console.log('Hi my name is %s!', me.username);
});

// Matches /photo
bot.onText(/\/random/, function (msg) {
  var chatId = msg.chat.id;
  var rand = Math.floor(Math.random() * 10);
  // From file
  var photo = __dirname + '/img/' + rand + '.jpg';
  bot.sendPhoto(chatId, photo, {caption: "Chowmitos"});
});

// Matches /photo
bot.onText(/to com frio/, function (msg) {
  var chatId = msg.chat.id;
  var rand = Math.floor(Math.random() * 10);
  // From file
  var photo = __dirname + '/img/7.jpg';
  bot.sendPhoto(chatId, photo, {caption: "toma aqui"});
});

// Matches /badzona
bot.onText(/\/badzona/, function (msg) {
  var chatId = msg.chat.id;
  var audio = __dirname + '/audio/0.ogg';
  
  bot.sendAudio(chatId, audio);
});

// Matches /bad
bot.onText(/\/tanabad/, function (msg) {
  var chatId = msg.chat.id;
  var opts = {
      reply_to_message_id: msg.message_id,
      reply_markup: JSON.stringify({
        keyboard: [
          ['SIM'],
          ['SIM']]
      })
    };
    bot.sendMessage(chatId, 'Ce ta na bad?', opts);
});

bot.onText(/\/echo (.+)/, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = match[1];
  bot.sendMessage(chatId, resp);
});