import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app = express()
app.use(cors());

app.post('/join', cors(corsOptions),(req, res) => {
    const service = new UserService()
    res.status(200).json(service.getBmi(req, res))
})

export default app