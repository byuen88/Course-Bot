const Discord = require("discord.js");
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

module.exports = {
    name: 'setzoom',
    description: 'set the zoom links',
    execute(message, args) {
        if (message.member.roles.cache.find(role => role.name === "Professor") || message.member.roles.cache.find(role => role.name === "TA")) {
            if (args.length < 4) {
                const embed = new Discord.MessageEmbed()
                    .setColor('ff0000')
                    .setTitle('ERROR: Command expects a day, time, Zoom link, and at least one word of description. Try !setzoomhelp.')
                    return message.reply(embed);
              }
        
              var day = args.shift();
              var regEx = /^[1-5](,[1-5]){0,3}(,[1-5])?$/;
              if (!day.match(regEx)) {
                return message.reply("day is not in correct format");
              }

              var daysArray = day.split(",");
              var daysEnglish = '';
              if (daysArray.length !== 1) {
                daysArray.forEach((element) => {
                    daysEnglish += (daysOfWeek[element] + ", ");
                })
              } else {
                  daysEnglish = daysOfWeek[daysArray[0]] + ' ';
              }

              var time = args.shift();
              var regEx = /^(((0|1)[0-9])|(2[0-3]))[0-5][0-9]$/;
              if (!time.match(regEx)) {
                return message.reply("time is not in correct format");
              }
              var hour = time.substring(0,2);
              var minute = time.substring(2,4);

              var cronTime = '0 ' + minute + ' ' + hour + ' * * ' + day;

              var url = args.shift();
              var regEx = /https\:\/\/.*\.zoom\.us\/j\/.+?\b/
              if (!url.match(regEx)) {
                  message.reply("warning: that does not seem to be a zoom link!");
              }
              
              var desc = args.join(" ");
                   
              var CronJob = require('cron').CronJob;
              var job = new CronJob(cronTime, function() {
                message.channel.send('REMINDER: \n' + desc + '\nlink: ' + url);
              }, null, true, 'America/Vancouver');
              job.start();
              message.reply("you have successfully created a zoom reminder occurring every " + daysEnglish + "at " + hour + ":" + minute +'\n' +
                            "Reminder Preview: \n" + desc + '\nlink: ' + url);
        } else {
            message.reply('You do not have permission to use this command');
        }
    }
}