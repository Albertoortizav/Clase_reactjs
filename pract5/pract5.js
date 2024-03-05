
const fs =require("fs")

const file = (archivo) =>{
fs.readFile(archivo,"utf-8",(error,data)=>{
    if(error) throw error
    arch =JSON.parse(data)
     arch.read=true
     nuevo= JSON.stringify(arch, "\n")
    fs.writeFile(archivo,nuevo,(err)=>{
        if(err) throw err

        console.log(nuevo)
    })
})

}

file(process.argv[2])