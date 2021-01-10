const Discord = require("discord.js");

module.exports = {
    name: 'role',
    description: "Sets up a reaction role message",
    async execute(message, args, Discord, client) {
        const channel = '797927880335032330';
        const sec101 = message.guild.roles.cache.find(role => role.name === "101");
        const sec102 = message.guild.roles.cache.find(role => role.name === "102");

        const sec101Emoji = '🍉';
        const sec102Emoji = '☕';

        let embed = new Discord.MessageEmbed()
            .setColor('e42643')
            .setTitle('React to select your section')
            .setDescription('Section-specific information will be sent out based on your role\n\n'
                + `${sec101Emoji} for section 101\n`
                + `${sec102Emoji} for section 102`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(sec101Emoji);
        messageEmbed.react(sec102Emoji);


        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === sec101Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(sec101);
                }
                if (reaction.emoji.name === sec102Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(sec102);
                }
            } else {
                return;
            }

        });

        client.on('messageReactionRemove', async (reaction, user) => {

            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;


            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === sec101Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(sec101);
                }
                if (reaction.emoji.name === sec102Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(sec102);
                }
            } else {
                return;
            }
        });
    }
}

