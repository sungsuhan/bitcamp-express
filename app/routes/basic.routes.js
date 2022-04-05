const express = require('express');
const basicRouter = express.Router();

basicRouter.use((req, res, next) => {
    console.log(' ### 기초 서버 ### ');
    next();
});





module.exports = basicRouter;