// Tarea funciones

///////////////////////////////////////// Punto 1

function verdadero() {
    return true;
}

/////////////////////////////////////// Punto 2

let timeout = 5000;
const promesa = new Promise(() => {
    setTimeout(() => {    
        console.log("Hola, soy una promesa!");  
    }, timeout);
});

////////////////////////////////////// Punto 3 NO ME SALIÓ =(

    function* indicesPares() {
        let i = 0;
        while(true) {
            yield i += 2;
        }
    }






