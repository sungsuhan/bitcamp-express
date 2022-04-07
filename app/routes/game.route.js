const { teamList } = require('../controllers/game.controller');
module.exports = x => {x.app.post(`${x.url}/team-list`, teamList),
x.app.post(`${x.url}/team-list`, teamList)};
