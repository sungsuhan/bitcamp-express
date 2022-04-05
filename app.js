require('dotenv').config();
var cors = require('cors')
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { port, MONGO_URI } = process.env;
const admin = require('./app/routes/admin.routes')
const basic = require('./app/routes/basic.routes')
const board = require('./app/routes/board.routes')
const game = require('./app/routes/game.routes')
const todo = require('./app/routes/todo.routes')
const user = require('./app/routes/user.routes')
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
require('./app/routes/board.routes')('/api/board', app)
app.use('/api/admin', admin)
app.use('/api/basic', basic)
app.use('/api/board', board)
app.use('/api/game', game)
app.use('/api/todo', todo)
app.use('/api/user', user)
var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));
app.listen(port, () => {
  console.log({"현재 시간 : ":new Date().toLocaleString()})
})

app.get('/', (req, res) => {
  res.json({"현재 시간 : ":new Date().toLocaleString()})
})
app.get('/api/now', cors(corsOptions),(req, res) => {
  res.json({"now":new Date().toLocaleString()})
})
app.get('/', (req, res) => {
  res.json({"현재 시간 : ":new Date().toLocaleString()})
})
app.get('/api/now', cors(corsOptions),(req, res) => {
  res.json({"now":new Date().toLocaleString()})
})

function bmi(payload) {
  const {name, height, weight} = payload
  console.log(' ### 진입 ### ')
  let _height = Number(height);
  let _weight = Number(weight);
  
  let bmi = _weight*10000/Math.pow(_height,2);

  let output = Math.round(bmi);
  var result = {name, height, weight}

  console.log(`계산중인 값들 : ${JSON.stringify(result)}`)
  if (output < 18.5)
    result.bmi = "저체중"
  if (output >= 18.5 && output<= 25)
    result.bmi = "보통"
  if (output > 25 && output <= 30)
    result.bmi = "과체중"
  if (output > 30)
    result.bmi = "비만"
    console.log(`계산 끝난 값들 : ${JSON.stringify(result)}`)

  return result
}
app.post("/api/basic/bmi", (req,res) => {
  const {name, height, weight} = req.body
  console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
  console.log(`name 값 : ${name}`)
  console.log(`height 값 : ${height}`)
  console.log(`weight 값 : ${weight}`)
  const json = bmi(req.body)
  console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
  res.json(json)
})

function calc(payload) {
  const {num1, opcode, num2} = payload
  console.log(' ### 진입 ### ')
  let _num1 = Number(num1);
  let _num2 = Number(num2);
  let res = 0;
  var result = {num1, opcode, num2, res}

  console.log(`계산중인 값들 : ${JSON.stringify(result)}`)
  if(opcode == '+') {
    result.res = _num1 + _num2;
  }
  else if(opcode == '-') {
    result.res = _num1 - _num2; 
  }
  else if(opcode == '*') {
    result.res = _num1 * _num2; 
  }
  else if(opcode == '/') {
    result.res = _num1 / _num2; 
  }
  if (opcode == '%') {
    result.res = _num1 % _num2
  }
  console.log(`계산 끝난 값들 : ${JSON.stringify(result)}`)
  
  return result
}

app.post("/api/basic/calc", (req,res) => {
  const {num1, opcode, num2} = req.body
  console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
  console.log(`숫자1 값 : ${num1}`)
  console.log(`연산자 값 : ${opcode}`)
  console.log(`숫자2 값 : ${num2}`)
  const json = calc(req.body)
  console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
  res.json(json)
})

app.post("/api/basic/calc", (req,res) => {
  const {num1, opcode, num2} = req.body
  console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
  console.log(`숫자1 값 : ${num1}`)
  console.log(`연산자 값 : ${opcode}`)
  console.log(`숫자2 값 : ${num2}`)
  const json = calc(req.body)
  console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
  res.json(json)
})


