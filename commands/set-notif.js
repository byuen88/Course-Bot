module.exports = {
    name: 'set-notif',
    description: 'ass',
    execute(message, args) {
        if (message.member.roles.cache.has('Professor')) {
            message.reply("aosidjfasd");
        } else {
            message.reply("ur mom is gay");
        }
    }
}