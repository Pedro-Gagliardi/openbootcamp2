// Ejercicio 10 - Objetos

const misDatos = {
    nombre: 'Pedro',
    apellido: 'Gagliardi',
    edad: 30,
    altura: 1.71,
    eresDesarrollador: true
}

let miEdad = misDatos.edad;

const datos = [misDatos, datosFrancisco = {nombre: 'Francisco', apellido: 'Grand', edad: 32, altura: 1.78, eresDesarrollador: false}, 
datosJavier = {nombre: 'Javier', apellido: 'Olivera', edad: 31, eresDesarrollador: false}]; 
console.log(datos);

const datosOrdenados = datos.sort((a, b) => b.edad - a.edad);
console.log(datosOrdenados);