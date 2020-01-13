const { Model, DataTypes } = require("sequelize");

class Paciente extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING
        }, { sequelize });
    }
}

module.exports = Paciente;