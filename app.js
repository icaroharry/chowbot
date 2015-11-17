var TelegramBot = require('node-telegram-bot-api');
var request = require('request');

var options = {
  polling: true
};

var token = process.env.TELEGRAM_BOT_TOKEN || '141314625:AAG4DlFQG0y7qAgQ5Ly1S14uyOLcMH7hNzw';

var bot = new TelegramBot(token, options);

bot.getMe().then(function (me) {
  console.log('Hi my name is %s!', me.username);
});

// Matches /photo
bot.onText(/\/random/, function (msg) {
  var chatId = msg.chat.id;
  var rand = Math.floor(Math.random() * 17);
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

// Matches maconha
bot.onText(/maconha/, function (mesg) {
  var chatId = mesg.chat.id;
  var rand = Math.floor(Math.random() * 18);
  // From file
  var msg = '';
  switch(rand){
    case 0:
      msg = 'Quero';
      break;
    case 1:
      msg = 'ôo tras a seda bandido';
      break;
    case 2:
      msg = 'Fez o corre, Jão?';
      break;  
    case 3:
      msg = 'Maconha? Me vê 2 litros';
      break;
    case 4:
      msg = 'Tem aí, Zé?';
      break;
    case 5:
      msg = 'Tem mas acabou';
      break;
    case 6:
      msg = 'Quero de novo.';
      break;
    case 7:
      msg = 'Alguém é Jesus pra salvar nois?';
      break;
    case 8:
      msg = 'Berin, CD é maconha?';
      break;
    case 9:
      msg = 'É CD Zé! Fala CD.';
      break;
    case 10:
      msg = 'Gordo, bola uma tora aí';
      break;
    case 11:
      msg = 'Passa a bola, Romário';
      break;
    case 12:
      msg = 'Cremosim, Mateus?';
      break;
    case 13:
      msg = 'maconha? Buguei';
      break;
    case 14:
      msg = 'Ondou uma bate forte';
      break;
    case 15:
      msg = 'Vou apertar, mas não vou acender agora';
      break;
    case 16:
      msg = 'Sérgio é maconheiro?';
      break;
    case 17:
      msg = 'Alguém falou balde?';
      break;
  }

  bot.sendMessage(chatId, msg);
});

bot.onText(/pedra/, function (mesg) {
  var chatId = mesg.chat.id;
  var rand = Math.floor(Math.random() * 2);
  // From file
  var msg = '';
  switch(rand){
    case 0:
      msg = 'Não fala pedra não, Zé';
      break;
    case 1:
      msg = 'Ta lombrado';
      break;
  }

  bot.sendMessage(chatId, msg);
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

// get a x-chow
bot.onText(/\/xchow/, function (msg) {
  var chatId = msg.chat.id;
  var rand = Math.floor(Math.random() * 10);
  // From file
  var msg = '';
  switch(rand){
    case 0:
      msg = 'Eu invoco o Furacão de Bugs!!!!';
      break;
    case 1:
      msg = 'Quero ver passar por cima do meu Mojito!';
      break;
    case 2:
      msg = 'Meu ruivo vai te enfeitiçar!';
      break;  
    case 3:
      msg = 'Vou implantar a ditadura chowmunista';
      break;
    case 4:
      msg = 'Não adianta esconder as putarias fechando a porta!';
      break;
    case 5:
      msg = 'Controlo sua mente e te levo para o mundo da raposinha';
      break;
    case 6:
      msg = 'Minha beleza sufoca. Vou sugar suas energias.';
      break;
    case 7:
      msg = 'Não há frio que resista ao meu exército de moletons.';
      break;
    case 8:
      msg = 'O olho vermelho não é o que vocês estão pensando.';
      break;
    case 9:
      msg = 'Pão de batata.';
      break;            
  }
  var photo = __dirname + '/img/xchow/' + rand + '.jpg';
  bot.sendPhoto(chatId, photo, {caption: msg});
});


// Matches a x-chow
bot.onText(/\/natal/, function (msg) {
  var chatId = msg.chat.id;
  // From file
  var photo = __dirname + '/img/izaunatal.jpg';
  bot.sendPhoto(chatId, photo, {caption: "Filis Natau"});
});

