const express = require('express')
const bodyParser = require('body-parser')
const port = 3000

const app = express()
app.use(bodyParser.json())

const quartoRoutes = require('./rotas/quarto.js')
app.use("/quarto", quartoRoutes)

app.listen(port, () => {
    console.log('API executando')
})
