const Sequelize = require("sequelize")
const sequelize = new Sequelize("rcnews", "nodejs", "12345", {
	host:"localhost" ,
	dialect:'mysql'
})



// checking connection
sequelize.authenticate().then(function(){
	console.log("connection with database established")
}).catch(function(error){
	console.log("an error found "+error)
})

module.exports = sequelize;

//importando models
const sessiondb = require("./session.js")
const useradm = require("./useradm.js")
