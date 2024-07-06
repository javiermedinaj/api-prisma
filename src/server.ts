import express from 'express'

const app = express()

app.get('/', (req,res)=>{
    console.log("Hello from server")
    res.status(200)
    res.send({message: "Hello from server"})
})

export default app