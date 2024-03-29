const express = require("express")
const app = express()
const userRoutes = require("./src/routes/user")
const port =3000

app.use(express.json())

app.get('/',(req,res)=>{
    res.send({message: "API Kodemia repaso"})
})
app.use("/users",userRoutes)

app.listen(port, ()=>{
    console.log("Server is ready in port: ",port)
})