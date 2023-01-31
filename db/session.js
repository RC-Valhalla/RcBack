const Sequelize = require("sequelize")
const sequelize = require("./connection.js")

const Login = sequelize.define("Login", {
	id:{
	type:Sequelize.SMALLINT,
	primaryKey:true,
	autoIncrement:true	
	},
	
	fname:{
	  type:Sequelize.CHAR,
	  allowNull:false
	},
       
	lname:{
	  type:Sequelize.CHAR,
	  allowNull:false
	},
	
	email:{
	   type:Sequelize.STRING,
	   unique:true,
	   allowNull:false
	},

	pass:{
	   type:Sequelize.SMALLINT,
	   allowNull:false
	}

}) 
const user = sequelize.define("user",{
//adicione o id como uma chave estrangeira
	nickname:{
		type:Sequelize.CHAR(30),
		allowNull:false
	},

	bio:{
		type:Sequelize.TEXT('tiny')
	},

	profile:{
		type:Sequelize.BLOB
	},
})
const userAdm = sequelize.define("useradm", {
//adicione o id como uma chave estrangeira
	nickname:{
		type:Sequelize.CHAR(30),
		allowNull:false
	},

	bio:{
		type:Sequelize.TEXT('tiny')
	},

	profile:{
		type:Sequelize.BLOB
	},

	job:{
		type:Sequelize.CHAR(25),
		allowNull:false
	},

	element:{
		type:Sequelize.STRING(50)
	},

	mastodon:{
		type:Sequelize.STRING(50)	
	},
	
	other:{
		type:Sequelize.STRING(50)
	}
})
