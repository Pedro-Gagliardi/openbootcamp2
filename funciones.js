// Tarea funciones

///////////////////////////////////////// Punto 1

function verdadero() {
    console.log(true);
}

verdadero();

/////////////////////////////////////// Punto 2

let timeout = 5000;
const promesa = new Promise(() => {
    setTimeout(() => {    
        console.log("Hola, soy una promesa!");  
    }, timeout);
});

////////////////////////////////////// Punto 3 NO ME SALIÓ =(


// function* generarIndicePar() {
//     let i = 1;
//     while (true) {
//         i++
//         if(i === 2) {
//             return i;
//         }
//         yield i;
//     }
// }
///////// 





