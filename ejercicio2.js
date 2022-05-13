// Ejercicio entregable "Listas, objetos y fechas"


const fechaLibroFav = new Date(1951, 6, 16);
const miNacimiento = new Date(1991, 8, 30);
const libroFavorito = {
    titulo: "El guardián entre el centeno",
    autor: "J. D. Salinger",
    fecha: fechaLibroFav,
    url: "https//www.librosdemario.com/el-guardian-entre-el-centeno-7-leer-online-gratis" // No sé si logré comprender la propiedad url, disculpas.
}

const misDatos = ["Pedro", 30, true, miNacimiento, libroFavorito];
console.log(misDatos);


