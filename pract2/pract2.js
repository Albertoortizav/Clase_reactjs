//------ejercicio3
const numeroPrimo = (num) =>{
cont=0
    for(i=0; i<=num; i++) if(num%i==0)cont++
cont==2?console.log("Es un numero primo"):console.log("No es primo")
    return cont
}
numeroPrimo(5)
//----ejercicio4
const areaTriangulo = (base,altura)=>{
area=(base*altura)/2
console.log("El area del trianfgulo es: ",area)
return area
}

areaTriangulo(3,6)
