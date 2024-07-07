import express from 'express'
import routes from './router'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res)=>{
    console.log("Hello from server")
    res.status(200)
    res.send({message: "Hello from server"})
})

app.use('/api', routes)

export default app