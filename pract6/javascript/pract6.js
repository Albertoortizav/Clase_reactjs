const fs =require('fs')

let crearDirectorio = (creador,nombre) =>{
if(creador.toLowerCase()=="init"){
 fs.mkdir(nombre,(error)=>{
    if(error) throw error
    console.log("Directorio creado")
    fs.writeFile((nombre + "/index.html"),"",(error) =>{
        if(error) throw error
        console.log("Elemento index.html creado en ",nombre)
    })
    fs.copyFile("pract6.js", nombre + "/pract6.js", (error) =>{
        if(error) throw error
    })
 }) 
}
else if(creador.toLowerCase()=="javascript"){
    fs.mkdir(nombre,(error)=>{
       if(error) throw error
       console.log("Directorio creado")
       fs.writeFile((nombre + "/functions.js"),"",(error) =>{
           if(error) throw error
           console.log("Elemento functions.js creado en ",nombre)
       })
       fs.copyFile("pract6.js", nombre + "/pract6.js", (error) =>{
           if(error) throw error
       })
    }) 
   }
   else if(creador.toLowerCase()=="css"){
    fs.mkdir(nombre,(error)=>{
       if(error) throw error
       console.log("Directorio creado")
       fs.writeFile((nombre + "/style.css"),"",(error) =>{
           if(error) throw error
           console.log("Elemento style.css creado en ",nombre)
       })
       fs.copyFile("pract6.js", nombre + "/pract6.js", (error) =>{
           if(error) throw error
       })
    }) 
   }
else if(creador.toLowerCase()=="html"){
    fs.writeFile( nombre,"",(error) =>{
        if(error) throw error
        console.log("Elemento html creado")
    })
}
else if(creador.toLowerCase()=="js"){
    fs.writeFile( nombre,"",(error) =>{
        if(error) throw error
        console.log("Elemento js creado")
    })
}
else if(creador.toLowerCase()=="style"){
    fs.writeFile( nombre,"",(error) =>{
        if(error) throw error
        console.log("Elemento css creado")
    })
}
}

crearDirectorio(process.argv[2], process.argv[3])