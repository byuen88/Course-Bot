const Discord = require("discord.js");
module.exports = {
	name: 'help',
	description: 'help',
	execute(message, args) {
		message.reply('My name is CourseBot. Nice to meet you!');
		const embed = new Discord.MessageEmbed()
            .setColor('0c6197')
            .setTitle('Exam Stats')
            .addFields(
				{name: 'Course Syllabus', value: '!syllabus', inline: false},
                {name: 'Exam Stats', value: '!exam', inline: false},
            )
            .setTimestamp();
        return message.reply(embed);
	}
}