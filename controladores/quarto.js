const database = require('./../database')

exports.cadastrarQuarto = (req, res, next) => {    
    const { descricao } = req.body
    const query = 'INSERT INTO quarto(descricao) VALUES ($1)'
    const values = [ descricao ]

    database.query(query, values).then(() => {
        res.status(200).send({ mensagem: 'Quarto cadastrado' })
        database.query = 'SELECT * FROM quarto'
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
}