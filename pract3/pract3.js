//-----ejercicio5
let duplicado = (array) =>{
    nuevo=[]
    j=0
    for(i=0; i<array.length*2; i++)
    {
        if(i<array.length){
            nuevo.push(array[i])
        }
       else{
        nuevo.push(array[j])
        j++
       }
    }
console.log(nuevo)
return nuevo
}
duplicado(["uno","dos"])
//-----ejercicio6
let numPares = (numeros) =>{
    lista=[]
 for(i=0; i<=numeros.length; i++)
 {
   if(numeros[i]%2==0)lista.push(numeros[i])
}
if(lista.length!=0)console.log(lista)
else console.log("No hay numeros pares") 
return lista

}
numPares([2])
//----ejercicio7
let numMayor = (mayor) =>{
lista=0
for (i=0; i<=mayor.length;i++){
mayor[i]>lista?lista=mayor[i]:lista=lista
}
console.log("El numero mayor es: ",lista)
return lista
}
numMayor([10,200,3,6,7])