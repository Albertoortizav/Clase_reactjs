//----Ejercicio8
const misDatos ={  
    "nombre":"ALberto",
    "Apellido": "Ortiz",
    "Edad":24,
    "ciudad":"Xalapa",
    "estado":"veracruz"
}


let obtenerDatos = (dato)=>{
    return misDatos[dato]
    
}
console.log(obtenerDatos(process.argv[2]))
//------ejercicio9
const agregar = {

}
let integrarDatos = (nuevo,propiedad) => {
  agregar[nuevo]=propiedad
  return agregar[nuevo]
}
integrarDatos(process.argv[2],process.argv[3])
console.log(agregar)
//-------ejercicio10
const primerJson ={
    "ciudad":"xalapa",
    "estado":"veracruz"
}
const segundoJson ={
    "ciudad":"veracruz",
    "estado":"veracruz"
}
let comparacion = (dato1) =>{
if(primerJson[dato1]==segundoJson[dato1])return "Son los mismos"
else
return "no son los mismos"
}

console.log(comparacion(process.argv[2]))