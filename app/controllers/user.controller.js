const db = require('../models/index')
const UserSchema = db.user

exports.join = (req,res) => {
    console.log(' ### 진행 4: 노드서버에 진입함' + JSON.stringify(req.body))
    new UserSchema(req.body).save(()=>{
        res.status(200).json({'result':'ok'}) 
    })
}

exports.login = (req, res) => {
    console.log(`### user login access ###`)
    UserSchema.find({userid: req.params.id, password: req.paranms.password})
    .exec((err, user) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({ success: true, user })
    })
}

exports.getUser = (req,res) => {
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