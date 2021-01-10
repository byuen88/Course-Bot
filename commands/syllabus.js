// const { syllabus } = require('./config.json');
module.exports = {
    name: 'syllabus',
    description: 'syllabus',
    execute(message, args) {
        message.reply("https://www.students.cs.ubc.ca/~cs-210/");
    }
}