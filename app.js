require('dotenv').config();
var cors = require('cors')
const express = require('express');
const app = express();
const { port, MONGO_URI } = process.env;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const APP = './app/routes'
//require(`${APP}/admin.route`)({url:'/api/admin',app})
require(`${APP}/basic.route`)({url:'/api/basic',app})
require(`${APP}/board.route`)({url:'/api/board',app})
//require(`${APP}/game.route`)({url:'/api/game',app})
//require(`${APP}/todo.route`)({url:'/api/todo',app})
require(`${APP}/user.route`)({url:'/api/user',app})

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}

const db = require('./app/models/index')
db.mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(' 몽고DB 연결 설정 ')
    console.log('db.url', db.url)
    console.log('db.mongoose', db.mongoose)
    console.log('db.user.db', db.user.db)
  })
  .catch(err => { console.log(' 몽고DB와 연결 실패', err )
        process.exit();
});

app.listen(port, () => {
  console.log('***************** ***************** *****************')
  console.log('***************** ***************** *****************')
  console.log('********** 서버가 정상적으로 실행되고 있습니다 *********')
  console.log('***************** ***************** *****************')
  console.log('***************** ***************** *****************')
})

app.get('/', (req, res) => {
  res.json({"현재 시간 : ":new Date().toLocaleString()})
})
app.get('/api/now', cors(corsOptions),(req, res) => {
  res.json({"now":new Date().toLocaleString()})
})

