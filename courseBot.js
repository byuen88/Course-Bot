console.log("Loading CourseBot");
const Discord = require("discord.js");
const Datastore = require('nedb');
const Keyv = require('keyv');

const fs = require('fs');
const { prefix, token } = require('./config.json');
const keyv = new Keyv();

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.login(token);

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', readyDiscord);

const database = new Datastore('database.db');
database.loadDatabase();

function readyDiscord() {
	console.log("CourseBot is Ready");
}

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args, Discord, client);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.on("message", function(message) {
    if(message.content.includes('answer')){
        message.reply("this better not be an answer to an assignment questions!");
	}
	
});


client.on("message", function(message) {
    if(message.content.includes('chegg')){
        message.reply("tsk tsk tsk");
	}
	
});
