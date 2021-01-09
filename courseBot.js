console.log('Loading Bot');

const Discord = require('discord.js');
const client = new Discord.Client();
client.login('Nzk3NTc0NjU0MDg4MTgzODM5.X_odRw.l9uCqUCihnaMfrOi7OEfTor8gf0')

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('Bot is Ready');
}