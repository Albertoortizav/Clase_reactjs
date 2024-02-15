//--------Ejercicio1
const sumaDeNumeros =(num)=>{
    cont=0
    lista=[]
for(i=0; i<=num; i++)
{
 if(i%2==0)
 {
  cont=i+num
  lista.push(cont)
 } 
}
console.log(lista)
return cont
}
sumaDeNumeros(11)

//--------Ejercicio2
let vocales= (vocal) =>{
    cont=0
    vocal=vocal.toLowerCase()
 for(i=0; i<=vocal.length; i++){
   if(vocal[i]=="a" || vocal[i]=="e" ||vocal[i]=="i" || vocal[i]=="o" || vocal[i]=="u")
   {
    cont++
   }
 }
 console.log("El numero de vocales son :", cont)
}
vocales("pedro pica papas")
