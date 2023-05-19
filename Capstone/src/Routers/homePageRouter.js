const express = require('express');
const homePageRouter = express.Router();
//const upload = require('../ultis/upload.js')

const { 
    getPicture,
    getPictureByName
 } = require('../Controllers/homePageController');
// userRouter.post("/sign-up", upload.single("file"), createUser);
// userRouter.get("/login", loginUser);
//userRouter.get('/get-user', getUser)
//userRouter.post("/test",test)

homePageRouter.get('/homePage-info', getPicture);
homePageRouter.get('/homePageByName/:ten_hinh', getPictureByName);




module.exports = homePageRouter;