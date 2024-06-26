const {Sequelize} = require ("sequelize")


/* nombre de la base datos - user - contraseña - {donde esta alojada la bd?, lenguaje,puerto} */
const db = new Sequelize ("posteos24126","root","",{
    host: "localhost",
    dialect:"mysql",
    port:3306
})
module.exports = db