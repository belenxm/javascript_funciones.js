//- La fecha de hoy

const fecha = new Date
console.log(fecha)

// - La fecha de tu nacimiento

const fecha1 = new Date (1991, 6, 20, 1, 23, 52, 192)
console.log(fecha1)

//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

var fechaNacimiento = new Date( 1991, 6, 20)
console.log(fecha > fechaNacimiento)


//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

const mesNacimiento = new Date(1991, 20, 6)
console.log(mesNacimiento.getMonth())

//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)

var añoNacimiento = new Date (1991, 6, 20)
console.log(añoNacimiento.getFullYear())
 