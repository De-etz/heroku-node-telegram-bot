var token = process.env.TOKEN;

var Bot = require('node-telegram-bot-api');
var bot;

if(process.env.NODE_ENV === 'production') {
	bot = new Bot(token);
	bot.setWebHook(process.env.HEROKU_URL + bot.token);
}
else {
	bot = new Bot(token, { polling: true });
}

console.log('Bot server started in the ' + process.env.NODE_ENV + ' mode');

const fam = "/fam";


bot.onText(/^/, function (msg) {
	if (msg.text.toString().toLowerCase().includes("namaste") || msg.text.toString().toLowerCase().includes("hi")) {
		var name = msg.from.first_name;
		bot.sendMessage(msg.chat.id, 'Namaste, ' + name + ' Ji!').then(function () {
		// reply sent!
		}
	});
});

module.exports = bot;
