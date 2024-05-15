/* POO PILARES */

/* 
ABSTRACCION :
Abstraer, es eliminar los detalles inncesarios para solo nos enfocamos en los aspectos que son necesarios para el contexto o sistema que estamos desarrollando.

ENCAPSULACION:
Se centra en ocultar los detalles que no son relevantes para el exterior
Es la agrupación de datos (propiedades) y los métodos que actúan sobre esas propiedades de manera que el acceso a esos datos está restringido desde fuera del paquete (clase).

HERENCIA :
Es la forma en la que una clase (hija) hereda de otra clase (padre) sus métodos y atributos.
La herencia permite la reutilización de código de una clase en otra y es ideal implementarla cuando los objetos tienen similitudes entre sí.


POLIMORFISMO 
Se refiere a la capacidad de realizar una misma acción en diferentes formas.
<b>Polimorfismo</b> es una palabra griega que significa <b>"con muchas formas"</b>

Ejemplo si tenemos una clase A con método M y la clase B que hereda de A, la clase B puede utilizar el mismo método M de la clase A,pero con una realización (algo) diferente.
*/

// INSTANCIAMOS LA CLASE LIBRO


class Libros  {
    #autor
    #titulo
    #precio
    #stock
    #id
      constructor (autor, titulo, precio, stock ,id) {
                 this.#autor = autor,
                 this.#titulo = titulo,
                 this.#precio = precio,
                 this.#stock = stock,
                 this.#id = id
          
      }
      verInfo () { // metodo que muestra la info
          let info = (`Info del libro : ${this.#titulo}, Autor: ${this.#autor}, precio ${this.#precio}, id: ${this.#id}`)
        return this.#stock>0 ? info+= ` Stock: ${this.#stock}` : info+= " No hay Stock disponible"
      }

}
/* 
info = info + "No hay Stock disponible"
info+= "No hay Stock disponible" */

const libro1 = new Libros ("Guy des Cars","El Solitario",11000,2,1)
const libro2= new Libros ("E. Sacheri","Papeles En El Viento",30000,0,2)

/* console.log(libro1.titulo); */

console.log(libro1.titulo);

console.log(libro1.verInfo());



class Comics extends Libros {
    #volumen
    #ilustradores

  constructor (autor, titulo, precio, stock ,id,volumen,ilustradores){
  super (autor, titulo, precio, stock ,id),
  this.#volumen = volumen,
  this.#ilustradores= ilustradores
  }
 infoComic() { let info = `Ilustradores : ${this.#ilustradores}, volumen: ${this.#volumen}`
return `${this.verInfo()}, ${info}`
}

}

const comic1 = new Comics ("Stanl LEE", "spider man",15000,0,0,132,["ilustrador1","ilustradora21"])


console.log(comic1.infoComic());