// Ejércicio "Números con Js"

let miAlturaCm = 171;
let miAlturaMts = 1.71;
let miPesoKg = 66.7;
let miAlturaRedondeada = miAlturaMts.toFixed();
let miPesoRedondeado = parseInt(miPesoKg); // Lo iba a hacer con Math.floor(), pero como no estaba como contenido en el video decidí hacerlo así
let maxValorJs = Number.MAX_VALUE + 1 === Number.MAX_VALUE;

console.log(miAlturaRedondeada);
console.log(miPesoRedondeado);
console.log(maxValorJs);
