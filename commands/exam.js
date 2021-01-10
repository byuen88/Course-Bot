const Discord = require("discord.js");
module.exports = {
    name: 'exam',
    description: 'exam',
    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setColor('0c6197')
            .setTitle('Midterm2 Stats')
            .addFields(
                {name: 'Mean', value: '69', inline: false},
                {name: 'Median', value: '72', inline: false},
                {name: 'High', value: '98', inline: false},
                {name: 'Low', value: '4', inline: false},
            )
            .setTimestamp();
        return message.channel.send(embed);
    }
}
