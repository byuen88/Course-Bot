const Discord = require("discord.js");
module.exports = {
	name: 'adminhelp',
	description: 'adminhelp',
	execute(message, args) {
        if (message.member.roles.cache.find(role => role.name === "Professor") || message.member.roles.cache.find(role => role.name === "TA")) {
            message.reply('My name is CourseBot. The following are the commands an admin can use.');
		const embed = new Discord.MessageEmbed()
            .setColor('0c6197')
            .setTitle('Exam Stats')
            .addFields(
                {name: 'Set Syllabus Link', value: '!setsyllabus', inline: false},
                {name: 'Set Zoom Reminder', value: '!setzoom', inline: false},
                {name: 'Set Zoom Reminder help', value: '!setzoomhelp', inline: false},
                {name: 'Update Exam Stats', value: '!updateexam', inline: false},
                {name: 'Role Reaction', value: '!role', inline: false},
            )
            .setTimestamp();
        return message.reply(embed);
        } else {
            message.reply('You do not have permission to use this command');
        }
		
	}
}