const controler = require('./controler/curso-controler')
const userControler = require("./controler/user-controler")
var bodyParser = require('body-parser')

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;


app.listen(port)
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    next();
});
app.get("/cursos", async(req, res) => {
    res.send(await controler.listar())
})
app.post("/cursos", async(req, res) => {
    res.send(await controler.adicionar(req.body))
})
app.put("/cursos/:id", async(req, res) => {
    res.send(await controler.atualizar(req.body, req.params.id))
})
app.delete("/cursos/:id", async(req, res) => {
    res.send(await controler.deletar(req.params.id))
})
app.get("/cursos/:id", async(req, res) => {
    res.send(await controler.listIndice(req.params.id))
})

app.post("/usuario", async(req, res) => {
    res.send(await userControler.adicionar(req.body))
})

app.get("/usuario/:email", async(req, res) => {
    res.send(await userControler.listar(req.params.email))
})
app.get("/usuario/breno", async(req, res) => {
    res.send(await userControler.listar(req.params.email))
})

console.log('servidor ouvindo na porta ' + port);