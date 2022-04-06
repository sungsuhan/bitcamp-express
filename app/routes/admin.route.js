const { signUp, signIn } = require('../controllers/user.controller');
module.exports = x => {x.app.post(`${x.url}/signUp`, signUp),
x.app.post(`${x.url}/signIn`, signIn)};


