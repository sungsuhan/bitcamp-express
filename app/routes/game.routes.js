const express = require('express');
const gameRouter = express.Router();

gameRouter.use((req, res, next) => {
    console.log(' ### 게임 서버 ### ');
    next();
});




module.exports = gameRouter;