const db = require('../models/index')
const UserSchema = db.user

exports.signup = (req,res) => {
    new UserSchema(req.body).save(()=>{
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

exports.userlist = (req,res) => {
    console.log(`### userController access ###`)
    UserSchema.find()
    .exec((err, users) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({ success: true, users }) 
    })
}
