const Discord = require("discord.js");
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
                let URL = args[0];

                return message.reply('Syllabus link set');
            }
        } else {
            message.reply('You do not have permission to use this command');
        }
    }
}