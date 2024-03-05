const fs=require("fs")
const path="./src/utils/users.json"
async function readFile(json){
return await new Promise ((resolve,reject)=>{
    fs.readFile(path,"utf-8",(error,data)=>{
        if(error){
            reject(error)
        }
        else{
            resolve(JSON.parse(data))
        }
    })
})
}

async function writeFile(data){
    return await new Promise ((resolve,reject)=>{
        fs.writeFile(path,JSON.stringify(data,null,4),(error)=>{
            if(error){
                reject(error)
            }
            else{
                resolve(data)
            }
        })
    })
    }
    

async function createUser(user){
    try {
       let users = await readFile()
       users.push(user)
       return await writeFile(users) 
    } catch (error) {
        return null
    }
}
async function getUsers(){
    try {
        return await readFile()
    } catch (error) {
        return null
    }
}

async function updateUser(user){
try {
    let users = await readFile()
    for(let index=0; index<users.length;index++){
        if(id==users[i].id){
        users[i]=user
        break
        }
    }
    return await writeFile(users)
} catch (error) {
    return null
}
}

async function deleteUser(id){
    try {
        let users = await readFile()
        for(let index=0; index<users.length;index++){
            if(id==users[i].id){
           users.pop(i)
           break
            }
        }
        return await writeFile(users)
    } catch (error) {
        return null
    }
    }

    module.exports={
        createUser,
        getUsers,
        updateUser,
        deleteUser
    }