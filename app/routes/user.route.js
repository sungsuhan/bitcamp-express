const { signup, signin, userlist, profile } = require('../controllers/user.controller');
module.exports = x => {x.app.post(`${x.url}/sign-up`, signup),
x.app.post(`${x.url}/sign-in`, signin), 
x.app.get(`${x.url}/user-list`, userlist), 
x.app.get(`${x.url}/profile/:id`, profile)};

