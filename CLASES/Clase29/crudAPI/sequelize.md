
https://sequelize.org/

(async () => {
  const limit = 10;
  const offset = 20;
  const users = await getUsersInRange(limit, offset);
  console.log(users);
})();
Con esta configuración, estarías obteniendo 10 registros comenzando desde el vigésimo registro de la tabla Users. Puedes ajustar los valores de limit y offset según tus necesidades.


