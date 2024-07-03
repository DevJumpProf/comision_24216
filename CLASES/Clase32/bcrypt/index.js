const bcryptjs = require ("bcryptjs")

/* console.log(bcryptjs); */

// input password registro
let inputPassword = "Pass12345"

let hash = bcryptjs.hashSync (inputPassword ,8)
/*  Salt */

console.log(hash);

// input password Logueo
let passwordLogueo = "Pass12345"

let comparacion = bcryptjs.compareSync(passwordLogueo,hash)

console.log(comparacion);