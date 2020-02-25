const Sequelize = require('sequelize')

const database = 'pizza_luvrs'
const host = 'pizza-db.cunw0bmqhjiw.us-east-1.rds.amazonaws.com'
const username = 'root'
const password = 'interOP123'

const pgClient = new Sequelize(
database,
username,
password,
{
host:host,
dialect:'postgres'
}
)

const Pizza = pgClient.define('pizza',{
id:{
 type: Sequelize.STRING,
 primaryKey: true
},
name:{
type:Sequelize.STRING
},
toppings:{
type:Sequelize.STRING
},
img:{
type:Sequelize.STRING
},
username:{
type:Sequelize.STRING
},
created:{
type:Sequelize.BIGINT
}
})

Pizza.sync().then(() =>{
  console.log('postgres connection ready')
})

module.exports = Pizza