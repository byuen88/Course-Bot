const Discord = require("discord.js");
module.exports = {
    name: 'setzoom',
    description: 'set the zoom links',
    execute(message, args) {
        if (message.member.roles.cache.find(role => role.name === "Professor") || message.member.roles.cache.find(role => role.name === "TA")) {
            if (args.length < 4) {
                const embed = new Discord.MessageEmbed()
                    .setColor('ff0000')
                    .setTitle('ERROR: Command expects a day, time, Zoom link, and at least one word of description')
                    return message.reply(embed);
              }
        
              var day = args[0];
              var regEx = /^[1-5]{1,5}$/;
              if (!day.match(regEx)) {
                return message.reply("day is not in correct format");
              }
        
              var time = args[1];
              var regEx = /^(((0|1)[0-9])|(2[0-3]))[0-5][0-9]$/;
              if (!time.match(regEx)) {
                return message.reply("time is not in correct format");
              }
        
              message.reply("success");
              var CronJob = require('cron').CronJob;
              var job = new CronJob('0 * 20 * * *', function() {
                message.channel.send('reminder!');
                console.log('You will see this message every second');
              }, null, true, 'America/Vancouver');
              job.start();
        } else {
            message.reply('You do not have permission to use this command');
        }
    }
}