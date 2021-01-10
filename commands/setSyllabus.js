const Discord = require("discord.js");
const Datastore = require('nedb');

module.exports = {
    name: 'setsyllabus',
    description: 'set the link for the syllabus',
    execute(message, args) {
        if (message.member.roles.cache.find(role => role.name === "Professor") || message.member.roles.cache.find(role => role.name === "TA")) {
            if (args.length < 1) {
                const embed = new Discord.MessageEmbed()
                .setColor('ff0000')
                .setTitle('ERROR: Command expects a URL for the syllabus link')
                return message.reply(embed);
            } else {                
                const database = new Datastore('database.db');
                database.loadDatabase();
                let URL = args[0];
                database.insert({URL: args[0]});

                return message.reply('Syllabus link set');
                // return message.reply(database.find({}, (err, data) => {
                //     Response.json                
            }
        } else {
            message.reply('You do not have permission to use this command');
        }
    }
}