const { signup, signin, userlist } = require('../controllers/user.controller');
module.exports = x => {x.app.post(`${x.url}/sign-up`, signup),
x.app.post(`${x.url}/sign-in`, signin), x.app.get(`${x.url}/user-list`, userlist)};

