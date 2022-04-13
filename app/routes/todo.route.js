const { todo, todolist } = require('../controllers/todo.controller');
module.exports = x =>  {x.app.post(`${x.url}/todo`, todo),
x.app.get(`${x.url}/todo-list`, todolist)};
