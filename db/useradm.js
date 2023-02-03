const Sequelize = require("sequelize")
const sequelize = require("./connection")

const wallet = sequelize.define("wallet", {

	btcw:{
		type:Sequelize.STRING(42),
		allowNull:false,
		unique:true
	    },

	monerow:{
		type:Sequelize.STRING(95),
		allowNull:true,
		unique:true
	     },

	paypal:{
		type:Sequelize.STRING(60),
		allowNull:true
	}

})

const gallery = sequelize.define("gallery", {

	postid:{
		type:Sequelize.SMALLINT,

	},

	images:{
		type:Sequelize.BLOB,
		allowNull:true
		}
})

const post = sequelize.define("post", {

	postid:{
		type:Sequelize.STRING(60),
		primarykey:true
	},
	
	 title:{
		type:Sequelize.STRING(50),
		unique:true,	
	}, 

	date:{
		type:Sequelize.DATE,
		allowNull:false
	},

	summary:{
		type:Sequelize.TEXT("tiny"), 
		allowNull:false
	},

	cover:{
		type:Sequelize.BLOB,
		allowNull:false
	},

	text:{
		type:Sequelize.TEXT,
		allowNull:false
	}

})

// sync models
//wallet.sync()
//gallery.sync()
//post.sync()

module.exports
