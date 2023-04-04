const database = require("../database");

exports.cadastrarHospede = (req, res)=>{
    const query = "INSERT INTO hospede (nome) values ($1);"
    const values = [req.body.nome]
    database.query(query, values).then(
        (resultado)=>{
            res.status(200).send({result: "sucesso"})
        },
        (erro)=> {
            res.status(400).send({erro: erro})
        }
    )
}