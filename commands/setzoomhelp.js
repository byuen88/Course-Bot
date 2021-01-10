const Discord = require("discord.js");

module.exports = {
    name: 'setzoomhelp',
    description: 'set the zoom links',
    execute(message, args) {
        if (message.member.roles.cache.find(role => role.name === "Professor") || message.member.roles.cache.find(role => role.name === "TA")) {
            message.reply('This command lets you set a reminder for certain times on desired days.');
            const embed = new Discord.MessageEmbed()
                .setColor('0c6197')
                .setTitle('Zoom Reminder Help')
                .addFields(
                    {name: 'Syntax', value: '!setzoom \'day\' \'time\' \'zoom_link\' \'description\'', inline: false},
                    {name: 'Day', value: "1-5 correspond to Mon - Fri. List the days you want the reminder to occur as a comma separated list. e.g. \'1,3,5\' will send a reminder on Monday, Wednesday and Friday.", inline: false},
                    {name: 'Time', value: 'choose a time for your reminder based on 24hr clock. e.g. 0800 is 8:00AM, 2359 is 11:59PM', inline: false},
                    {name: 'Zoom Link', value: 'insert your zoom link here. you can insert other links but it will warn you that it isn\'t zoom.', inline: false},
                    {name: 'Description', value: 'a description of your reminder', inline: false},
                )
                .setTimestamp();
            return message.reply(embed);
        } else {
            message.reply('You do not have permission to use this command');
        }
    }
}