const db = require('../models/index')
const UserSchema = db.user

exports.join = (req,res) => {
    console.log(' ### 진행 4: 노드서버에 진입함' + JSON.stringify(req.body))
    
    new UserSchema(req.body).save(()=>{
        res.status(200).json({'result':'ok'}) 
    })
    
}

exports.login = (req,res) => {
    const {userid, password} = req.body
    console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
    console.log(`ID 값 : ${userid}`)
    console.log(`PW 값 : ${password}`)
    const user = new UserSchema({
        userid, password
    })
    user.save(() => {
        res.status(200).json({'result':'ok'})
    })
}

exports.userlist = (req,res) => {
    console.log(`### user Controller access ###`)
    UserSchema.find()
    .exec((err, users) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({ success: true, users }) 
    })
}

exports.profile = (req, res) => {
    console.log(`### user profile access ###`)
    UserSchema.find({userid: req.params.id})
    .exec((err, user) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({ success: true, user })
    })
    
}