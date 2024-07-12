https://www.npmjs.com/package/express-validator

express-validator

//error 422. Esto podría deberse a que los datos no cumplen con los requisitos esperados por la API.

https://developer.mozilla.org/es/docs/Web/HTTP/Status




-------------------------------
Doc oficial express-validator
https://express-validator.github.io/docs/guides/getting-started
https://express-validator.github.io/docs/api/validation-chain/#not

https://www.npmjs.com/package/express-validator
-------------------------------------
express.urlencoded
 express.urlencoded:  actúa como middleware al procesar los datos enviados desde el cliente al servidor a través de formularios HTML o solicitudes POST.

 express.urlencoded es un ejemplo de un middleware que se encarga de analizar los datos enviados en el cuerpo (body) de una solicitud y convertirlos en un formato utilizable.

 Aquí, el parámetro extended se establece en false para indicar que solo se analizarán datos simples, no objetos complejos. Si se establece en true, también se analizarán objetos anidados.

---------------------------------------------------------------------------------------------------

La función express.json() es una función de middleware integrada en Express. Analiza las requests entrantes con cargas JSON y se basa en body-parser .
express.json() es un método incorporado en express para reconocer el Objeto de Solicitud entrante como un Objeto JSON. Este método se llama middleware en su aplicación utilizando el código: app.use(express.json());

--------------------------------------------------------------------------------------------------
 express.json() y express.urlencoded
¿Qué es el middleware? Son esos métodos / funciones / operaciones los que se denominan ENTRE procesar la Solicitud y enviar la Respuesta en su método de solicitud.

Cuando hablando de express.json() y express.urlencoded() piense específicamente sobre las solicitudes POST ( i.e. el objeto de solicitud .post ) y las solicitudes PUT ( i.e. el objeto de solicitud .put )

NO NECESITAS express.json() y express.urlencoded() para obtener solicitudes o solicitudes de DELETE.

NECESITAS express.json() y express.urlencoded() para solicitudes POST y PUT, porque en ambas solicitudes estás envío de datos (en forma de algún objeto de datos) al servidor y usted está pidiendo al servidor que acepte o almacene esos datos (objeto), que están encerrados en el cuerpo (es decir. req.body) de esa solicitud (POST o PUT)

Express le proporciona middleware para tratar los datos (entrantes) (objeto) en el cuerpo de la solicitud.

a. express.json() es un método incorporado en express para reconocer el Objeto de Solicitud entrante como un Objeto JSON. Este método se llama middleware en su aplicación utilizando el código: app.use(express.json());

b. express.urlencoded() es un método incorporado en express para reconocer el Objeto de Solicitud entrante como cadenas o matrices. Este método se llama middleware en su aplicación utilizando el código: app.use(express.urlencoded());

-----------------------------------------------------------------------------------------
express.json() es un middleware express integrado que convierte el cuerpo de la solicitud a JSON. 

express.urlencoded() al igual que express.json() convierte el cuerpo de la solicitud a JSON, también lleva a cabo otras funcionalidades como: convertir datos de formulario a JSON, etc.
​

------------------------
Middlewares: bodyParser.json() y bodyParser.urlencoded({ extended: true }) son utilizados para parsear los datos del cuerpo de las solicitudes HTTP en formatos application/json y application/x-www-form-urlencoded, respectivamente.


------

Middleware para Parsear application/json
javascript
Copiar código
app.use(bodyParser.json());
Explicación Detallada
Qué hace:

Este middleware permite que tu aplicación Express pueda entender y manejar datos en formato JSON en el cuerpo de las solicitudes HTTP.
Contexto:

Cuando un cliente (por ejemplo, un navegador web o una aplicación móvil) envía datos JSON en el cuerpo de una solicitud HTTP POST, PUT, PATCH, etc., este middleware convierte esos datos en un objeto JavaScript accesible a través de req.body.
Ejemplo de Solicitud:

Supongamos que un cliente envía una solicitud POST con un cuerpo JSON:
json
Copiar código
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "secretpassword"
}
Con este middleware, estos datos se pueden acceder en tu ruta de manejo como req.body.username, req.body.email, y req.body.password.
Por qué es útil:

Hace que trabajar con datos JSON en solicitudes HTTP sea sencillo y directo.
Sin este middleware, tendrías que escribir lógica personalizada para interpretar el cuerpo de las solicitudes JSON.
Middleware para Parsear application/x-www-form-urlencoded
javascript
Copiar código
app.use(bodyParser.urlencoded({ extended: true }));
Explicación Detallada
Qué hace:

Este middleware permite que tu aplicación Express pueda entender y manejar datos codificados como application/x-www-form-urlencoded en el cuerpo de las solicitudes HTTP.
Contexto:

Este tipo de codificación es el método estándar para enviar datos de formularios HTML a través de solicitudes HTTP POST.
Convierte los datos del formulario en un formato URL-encoded, donde cada par clave-valor se une con &, y las claves y los valores se codifican por URL.
Por ejemplo, un formulario con los campos username, email, y password enviaría los datos como:
css
Copiar código
username=john_doe&email=john@example.com&password=secretpassword
Parámetro extended:

El parámetro extended puede ser true o false.
extended: true:
Usa la librería qs para analizar los datos del formulario.
Permite el anidamiento y el análisis de objetos complejos.
extended: false:
Usa la librería querystring para analizar los datos del formulario.
Sólo permite analizar datos de formulario planos (sin anidamientos).
Ejemplo de Solicitud:

Supongamos que un cliente envía una solicitud POST con datos del formulario:
html
Copiar código
<form action="/register" method="POST">
  <input type="text" name="username" value="john_doe">
  <input type="email" name="email" value="john@example.com">
  <input type="password" name="password" value="secretpassword">
  <button type="submit">Register</button>
</form>
Con este middleware, estos datos se pueden acceder en tu ruta de manejo como req.body.username, req.body.email, y req.body.password.
Por qué es útil:

Facilita la interpretación y el manejo de los datos enviados desde formularios HTML.
Sin este middleware, tendrías que escribir lógica personalizada para interpretar los datos del formulario.