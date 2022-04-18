const { join, getuser, profile } = require('../controllers/user.controller');

module.exports = x => {
    console.log(' ### user.route 로 들어옴 ###')
    x.app.post(`${x.url}/join`, join);
    x.app.get(`${x.url}/getuser`, getuser);
    x.app.get(`${x.url}/profile/:id`, profile);
}

