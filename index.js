const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//variaveis locais
const porta = 7470

//importando modulos locais
const db = require("./db/connection.js")

//bodyparser
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));


app.listen(porta, function(){
	console.log("rodando em http://localhost:" + porta)
})

