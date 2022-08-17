// Sesión 4 - Strings (cadena de caracteres)

let str_dbl = "Hola soy un texto con comillas dobles";
let str_sng = "Hola soy un texto con comilla simples";

console.log(str_dbl);
console.log(str_sng);

let str_comillas_simples = "El otro día me dijo: \"vea  sacar la basura\""; // para que se vean la comillas reales en el string
console.log(str_comillas_simples);

/////////// Comillas invertidas (backticks)

let str_backticks = "Hola, esto es un string con backsticks";
console.log(str_backticks);

let nombre = "Pedro";
let saludo = `Hola ${nombre}, bienvenido`;

console.log(saludo);

//Plantillas HTML

let plantila = `
<html>
    <h1>Página web de ${nombre}</h1>
    <p>Esto es un párafo</p>
</html>
`;
console.log(plantila);

//// Introducción de variables en html

let libros = ["Harry Potter", "Rayuela", "El principito"];