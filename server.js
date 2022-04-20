import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors'
import db from './app/models/index.js'
import tokenRouter from './app/routes/token.js';
import todoController from './app/controllers/todoController.js'
import userController from './app/controllers/userController.js'

async function startServer() {
    dotenv.config()
    const app = express();
    const mongoUri = process.env.MONGO_URI
    const port = process
        .env
        .PORT
        app
        .use('/token', tokenRouter);
    app.use(express.static('public'));
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use(cors());
    app.use('/todo', todoController)
    app.use('/user', userController)

    const corsOptions = {
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200
    }

    db
        .mongoose
        .connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log(' ### 몽고DB 연결 성공 ### ')
        })
        .catch(err => {
            console.log(' 몽고DB와 연결 실패', err)
            process.exit();
        });
    app.listen(port, () => {
        console.log('***************** ***************** *****************')
        console.log('********** 서버가 정상적으로 실행되고 있습니다 *********')
        console.log('***************** ***************** *****************')
    })
    app.get('/', (req, res) => {
        res.json({"현재 시간 : ": new Date().toLocaleString()})
    })
    app.get('/api/now', cors(corsOptions), (req, res) => {
        res.json({"now": new Date().toLocaleString()})
    })

}
startServer()
