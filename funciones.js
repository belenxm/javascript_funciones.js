// - Una función sin parámetros que devuelva siempre "true"

function siempreVerdadero() {
    return true;
  }


console.log(siempreVerdadero)





//- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

function promesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hola soy una promesa");
        }, 5000);
    });
}




//- Una función generadora de índices pares automáticos

function generadora() {
    let i = 0;
    return function () {
        return i++;
    }
}
