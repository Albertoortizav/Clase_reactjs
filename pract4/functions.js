//----Ejercicio8
const misDatos = {
    nombre:"Alberto",
    apellido: "Ortiz",
    edad:24,
    ciudad:"Xalapa"
}
let datosPersonales =(datos)=>{
     return misDatos[datos.toLowerCase()]
}
console.log(datosPersonales(process.argv[2]))
//-----Ejercicio9
const otrosDatos = {

}
let listaNueva = (dato,dato2) =>{
let resultado= Object.assign(otrosDatos,dato)
return resultado
}
console.log(listaNueva(process.argv[2],process.argv[3]))