const { Router } = require('express');
const express = require('express');
const userRouter = express.Router();

userRouter.use((req, res, next) => {
  console.log(' ### 유저 서버 ### ');
  next();
});

userRouter.post("/sign-up", (req,res) => {
  const {userId, pw, name, tel} = req.body
  console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
  console.log(`ID 값 : ${userId}`)
  console.log(`PW 값 : ${pw}`)
  console.log(`이름 값 : ${name}`)
  console.log(`번호 값 : ${tel}`)
  res.json(req.body)
})

userRouter.post("/sign-in", (req,res) => {
  const {name, pw} = req.body
  console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
  console.log(`ID 값 : ${name}`)
  console.log(`PW 값 : ${pw}`)
  res.json(req.body)
})

module.exports = userRouter;



