//Crea un nuevo proyecto de Node

//- Instala la dependencia Winston

//- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

function msjError(mensaje) {
    throw new Error(mensaje);
} 
//- Registra el error en un archivo a través de un try...catch

try {
generarError("Mensaje personalizado")

}
catch(error) {
    console.log("Ha ocurrido un Error")
    console.log("Mensaje de error:", error.mensaje);
}
finally{
    console.log("Finalizando")

} 