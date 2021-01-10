const { DiscordAPIError } = require("discord.js");

const Discord = require("discord.js");
module.exports = {
    name: 'updateexam',
    description: 'updates exam stats',
    execute(message, args) {
        if (message.member.roles.cache.find(role => role.name === "Professor") || message.member.roles.cache.find(role => role.name === "TA")) {
            if (args.length < 5) {
                const embed = new Discord.MessageEmbed()
                .setColor('ff0000')
                .setTitle('ERROR: Command expects the exam mean, exam median, exam high, exam low, and exam name')
                return message.reply(embed);
            } else {
                let mean = args[0];
                let median = args[1];
                let high = args[2];
                let low = args[3];
                let name = args.slice(Math.max(args.length - 4, 0));

                return message.reply('Exam stats updated');
            }
        } else {
            message.reply('You do not have permission to use this command');
        }
    }
}