// Ejercicio 10 - Fechas

const fecha = new Date();
const miFechaNacimiento = new Date(1991, 08, 30);

let hoyEsMasTarde = fecha > miFechaNacimiento;
let miDiaNacimiento = miFechaNacimiento.getDate();
let miMesNacimiento = miFechaNacimiento.getMonth() + 1;
let miAnioNacimiento = miFechaNacimiento.getFullYear();

