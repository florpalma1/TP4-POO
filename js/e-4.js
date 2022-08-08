// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto {
    constructor(codigo,nombre,precio){
        this.codigo=codigo;
        this.nombre=nombre;
        this.precio=precio;
    }
    imprimeDatos(){
        document.write(`
        <ul>
        <li>Codigo: ${this.codigo}</li>
        <li>Nombre: ${this.nombre}</li>
        <li>Precio: ${this.precio}</li>
        </ul>
        `);
    }
}

let celular1 = new Producto('10%ff','Samsung galaxy A32','$75.999');
let celular2 = new Producto('superMama','Samsung galaxy S20 FE','$141.999');
let celular3 = new Producto('blackFriday','Samsung galaxy M23','$85.999');

let celular= [celular1,celular2,celular3];

for(let indice= 0;indice<celular.length; indice++){
    celular[indice].imprimeDatos();
}