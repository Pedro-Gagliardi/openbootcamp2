

function ingresarPar() {
    if (numero % 2 === 0) {
        console.log("Continuemos");        
    } else {
        throw new Error("El número debe ser par");
    }
};

let numero = 3;

try {
    ingresarPar();
} catch(e) {
    console.error(`El numero ingresado es ` + numero + `. ${e}`);
} finally {
    console.log("Terminado")
};
