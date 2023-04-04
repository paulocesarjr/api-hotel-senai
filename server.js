const express = require('express')
const bodyParser = require('body-parser')
const port = 3000
const rotasHospede = require("./rotas/hospede")

const app = express()
app.use(bodyParser.json())
app.use(rotasHospede)

app.listen(port, () => {
    console.log('API executando')
})