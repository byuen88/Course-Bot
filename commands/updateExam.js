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
                let mean = args.shift();
                let median = args.shift();
                let high = args.shift();
                let low = args.shift();
                let name = args.join(" ");

                return message.reply('Exam information has been updated');
            }
        } else {
            message.reply('You do not have permission to use this command');
        }
    }
}