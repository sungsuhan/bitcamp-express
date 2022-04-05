const { Router } = require('express');
const express = require('express');
const { write } = require('../controller/board.controller');
const boardRouter = express.Router();

boardRouter.use((req, res, next) => {
    console.log(' ### 게시판 서버 ### ');
    next();
});

boardRouter.post("/write", write)

module.exports = boardRouter;

