const db = require('../models/index')
const UserSchema = db.user

exports.signup = (req,res) => {
    const {userId, pw, name, tel} = req.body
    console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
    console.log(`넘어온 ID 값 : ${userId}`)
    console.log(`넘어온 PW 값 : ${pw}`)
    console.log(`넘어온 이름 값 : ${name}`)
    console.log(`넘어온 번호 값 : ${tel}`)
    const user = new UserSchema({
        userId, pw, name, tel
    })
    user.save(() => {
        res.status(200).json({'result':'ok'})
    })
}

exports.signin = (req,res) => {
    const {name, pw} = req.body
    console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
    console.log(`ID 값 : ${name}`)
    console.log(`PW 값 : ${pw}`)
    const user = new UserSchema({
        name, pw
    })
    user.save(() => {
        res.status(200).json({'result':'ok'})
    })
}