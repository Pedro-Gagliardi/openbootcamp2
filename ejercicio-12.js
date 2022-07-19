
// Ejercicio 12 ---> Clases

class Estudiante {
    constructor(nombre, asignatura) {
        this.nombre = nombre;
        this.asignatura = asignatura;
    };

    obtenDatos() {
        console.log(this.nombre, this.asignatura);
    }
};


const nuevo_estudiante = new Estudiante("Pedro", ["Javascript", "HTML", "CSS"]);
nuevo_estudiante.obtenDatos();

