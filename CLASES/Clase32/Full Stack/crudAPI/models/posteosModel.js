const db = require ("../data/db.js")

const {DataTypes} = require ("sequelize")

const posteosModel = db.define ("posteos",{
    titulo:{type:DataTypes.STRING},
    contenido:{type:DataTypes.STRING}
})
module.exports = posteosModel