const express = require('express');
const rota = express.Router();

rota.get("/panel",function (req, res){
	res.render("dashboard.html")
})
rota.get("/panel/fundos", function(req, res){
	res.render("fundos.html")
})

rota.get("/panel/perfil", function(req, res){
	res.render("perfil.html")
})

rota.get("/post", (req, res)=>{
	res.render("post.html")
})


module.exports = rota;
