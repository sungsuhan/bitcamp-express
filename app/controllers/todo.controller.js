const db = require('../models/index')
const TodoSchema = db.todo

exports.todo = (req,res) => {
    new TodoSchema(req.body).save(()=>{
        res.status(200).json({'result':'ok'}) 
    })
    
}


exports.todolist = (req,res) => {
    console.log(`### todo Controller access ###`)
    TodoSchema.find()
    .exec((err, todos) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({ success: true, todos }) 
    })
}

