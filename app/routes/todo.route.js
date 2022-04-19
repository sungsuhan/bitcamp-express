const { addTodo, getTodo } = require('../controllers/todo.controller');
module.exports = x => {
    console.log(' ### todo.route 로 들어옴 ###')
    x.app.post(`${x.url}/add`, addTodo);
    x.app.get(`${x.url}/get`, getTodo);
} 
