import express from 'express'
import routes from './router'
import morgan from 'morgan'
import cors from 'cors'
import {protect} from './modules/auth'
import { createNewUser, signIn } from './handlers/user' 

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

app.use('/api', protect, routes)
app.post('/user', createNewUser)
app.post('/signin', signIn)

export default app