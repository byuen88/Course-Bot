const sqlite3 = require('sqlite3').verbose()

const create = () => {
    let database = new sqlite3.Database('./test-database.sqlite')
    database.close()
}

module.exports = {
    create
}