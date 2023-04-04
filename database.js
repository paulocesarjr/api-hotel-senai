

const pg = require('pg')
const database = new pg.Client('postgres://rxfrhsgn:1n2BoiZQSkbzFF5hhY6r0cvsGsqLqWSh@babar.db.elephantsql.com/rxfrhsgn')

database.connect((erro) => {
    if (erro) {
        return console.log('Não foi possível se conectar ao ElephantSQL')
    } else {
        return console.log('Conectado ao ElephantSQL')
    }
})

module.exports = database