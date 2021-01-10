module.exports = {
    name: 'setZoom',
    description: 'start',
    execute(message, args) {
        if (message.member.roles.cache.find(role => role.name === "Professor") || message.member.roles.cache.find(role => role.name === "TA")) {
            message.reply("Testing");
        } else {
            message.reply('You do not have permission to use this command');
        }
    }
}