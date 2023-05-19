const express = require('express');

const userRouter = require('./userRouter');

const homePageRouter = require('./homePageRouter');

const detailRouter = require('./detailRouter');

const rootRouter = express.Router();

rootRouter.use("/user", userRouter)

rootRouter.use('/main', homePageRouter)

rootRouter.use('/detail', detailRouter)

module.exports = rootRouter;