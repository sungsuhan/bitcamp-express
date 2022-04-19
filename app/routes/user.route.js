const { join, login, getUser, profile } = require('../controllers/user.controller');
const { verifyToken } = require('./middlewares');

module.exports = x => {
    console.log(' ### user.route 로 들어옴 ###')
    x.app.post(`${x.url}/join`, join);
    x.app.post(`${x.url}/login`, verifyToken, login);
    x.app.get(`${x.url}/getUser`, getUser);
    x.app.get(`${x.url}/profile/:id`, profile);
}

