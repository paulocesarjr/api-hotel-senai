const pg = require("pg")

const database = new pg.Client("postgres://rxfrhsgn:1n2BoiZQSkbzFF5hhY6r0cvsGsqLqWSh@babar.db.elephantsql.com/rxfrhsgn")

database.connect((erro) => {
    if (erro) {
        return console.log("Não foi possível conectar-se ao ElephantSQL", erro)

    } else {
        return console.log("Successfully connecting to ElephantSQL")
    }
})

module.exports = database