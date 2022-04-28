const db = require('../models/index')
const TeamSchema = db.team

exports.teamList = (req,res) => {
    new TeamSchema(req.body).save(()=>{
        res.status(200).json({'result':'ok'}) 
    })
    
}