// Ejercicio 9 - Arrays

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompras = ["Papas", "Sal", "Harina", "Agua", "Arroz"];

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompras.splice(0, 0,  "Aceite de girasol");

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompras.splice(0, 1);

/////////////////////////////////////////////////////////////

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const listaPelis = [
    {nombre: "Sueños de libertad", director: "Frank Darabont", fecha: fechaSuenios = new Date ("march 23 1995")},
    {nombre: "Scarface", director: "Brian De Palma", fecha: fechaScarface = new Date ("dec 01 1983")},
    {nombre: "The Joker", director: "Todd Phillips", fecha: fechaJoker = new Date ("aug 31 2019")}    
];

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
let post2010 = new Date ("jan 01 2010");
const nuevaListaPelis = listaPelis.filter(fechaLimite => fechaLimite.fecha > post2010);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const listaDirectores = listaPelis.map(directores => directores.director);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulosPelis = listaPelis.map(titulo => titulo.nombre);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const directoresMasTitulos = listaDirectores.concat(titulosPelis);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const dirMasTit = [...listaDirectores, ...titulosPelis];


