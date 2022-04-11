const { join, login } = require('../controllers/user.controller');
module.exports = x => {x.app.post(`${x.url}/join`, join),
x.app.post(`${x.url}/login`, login)};
