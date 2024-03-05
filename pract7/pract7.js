/*let example = new Promise((resolve,reject) =>{

setTimeout(()=>{
    reject ({"resolve":"example"})
}, 1000)

})

example
.then((message)=>{
 console.log(message)
})

.catch((message)=>{
console.log(message)
})

.finally(()=>{
    console.log("aqui finaliza el proceso")
})

function getUser(id){
return new Promise((resolve,reject)=>{
    if(id==1){
        resolve({id :1, name :"john", lasname : "doe"})
    }
    else{
        reject(new Error("user not found"))
    }
})
}

getUser(2)
.then((user)=>{
 console.log(user)
})
.catch((error)=>{
    console.log(error)
}) 

async function name(params){

}
(async ()=>{
    try {
        
    } catch (error) {
        
    }
})() */


const fs =require("fs")




/*const writeFile = (archivo,nombre) =>{
 return new Promise((resolve,reject) =>{
    fs.writeFile(nombre,"'Hola que tal'",(error)=>{
       archivo.toLowerCase()=="init"?resolve(archivo, console.log("Elemento creado")):reject(error)
    })
 })
}
writeFile(process.argv[2],process.argv[3])

const readFile = (file)=>{
 return new Promise((resolve,reject)=>{
    fs.readFile(file,"utf-8", (error,data)=>{
        if(data) resolve(console.log(data))
        else reject(error)
    })
 })
}
readFile(process.argv[2])

const appendFile = (nombre) =>{
    return new Promise ((resolve,reject)=>{
        fs.appendFile(nombre,"'se agregara este texto'",(error)=>{
            nombre? resolve(console.log("Informacion agregada al archivo, revisar")):reject(error)
        })
    })
}

appendFile(process.argv[2])

const unlink = (nombre) =>{
    return new Promise ((resolve,reject)=>{
        fs.unlink(nombre,(error) =>{
            nombre? resolve(console.log("Archivo borrado")):reject(error)
        })
    })
}
unlink(process.argv[2])

const writeFile = async (archivo,nombre) =>{

    await new Promise((resolve) =>{
       fs.writeFile(nombre,"'Hola que tal'",(error)=>{
          if(archivo.toLowerCase()=="init") return resolve(archivo, console.log("Elemento creado"))
        else  throw new Error (error)
       })
    })
   }
   writeFile(process.argv[2],process.argv[3])

   const readFile = async (file)=>{
    await new Promise((resolve)=>{
       fs.readFile(file,"utf-8", (error,data)=>{
           if(data) return resolve(console.log(data))
           else throw (error)
       })
    })
   }
   readFile(process.argv[2])

   const appendFile = async (nombre) =>{
    await new Promise ((resolve)=>{
        fs.appendFile(nombre,"'se agregara este texto'",(error)=>{
           if(nombre) resolve(console.log("Informacion agregada al archivo, revisar"))
            else throw (error)
        })
    })
}

appendFile(process.argv[2])*/

const unlink =async (nombre) =>{
    await new Promise (resolve=>{
        fs.unlink(nombre,(error) =>{
            if("./"+nombre==="./js.js")return resolve((console.log("Archivo borrado")))
            else throw new Error (error)
        })
    })
    }

unlink(process.argv[2])