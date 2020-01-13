const  Sequelize  =  require('sequelize')
const  dbConfig  =  require('../config/database')

const  Paciente  =  require('../models/paciente')

const  connection  =  new  Sequelize(dbConfig);

Paciente.init(connection);

module.exports  =  connection;