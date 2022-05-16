// Ejercicio strings

let nombre = "Pedro";
let apellido = "Gagliardi";
let estudiante = nombre.concat(" " + apellido)
let estudianteMayus = `${nombre.toLocaleUpperCase()}` + " " + `${apellido.toLocaleUpperCase()}`;
let estudianteMinus = `${nombre.toLocaleLowerCase()}` + " " + `${apellido.toLocaleLowerCase()}`;
let nroStrEstudiante = estudiante.length;
let inicialNombre = nombre.charAt(0);
let finalApellido = apellido.charAt(8);
let sacarEspacios = estudiante.trim();
let comprobarNombre = estudiante.includes(nombre);

console.log(nombre);
console.log(apellido)
console.log(estudiante)
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(nroStrEstudiante);
console.log(inicialNombre);
console.log(finalApellido);
console.log(sacarEspacios);
console.log(comprobarNombre);

