console.log("Loading CourseBot");

require('dotenv').config();

const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log("CourseBot is Ready");
}

client.on('message', gotMessage);

function gotMessage(msg) {
    console.log(msg.content);
    if (msg.content === '!hello') {
        msg.reply('My name is CourseBot. Nice to meet you!');
    }
}