const express = require('express');
const userRouter = express.Router();
const upload = require('../ultis/upload.js')

const {createUser, loginUser} = require('../Controllers/userController');

    //dest: process.cwd() + "/public/imgs"

userRouter.post("/sign-up", upload.single("file"), createUser);
userRouter.post("/login-user", loginUser);
//userRouter.get('/get-user', getUser)
//userRouter.post("/test",test)






module.exports = userRouter;