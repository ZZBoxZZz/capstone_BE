const express = require('express');
const detailRouter = express.Router();
//const upload = require('../ultis/upload.js')

const { 
    getPictureAndHuman,
    getComment,
    createComment
 } = require('../Controllers/detailController');


detailRouter.use("/getPictureandHuman/:hinh_id", getPictureAndHuman);
detailRouter.use("/getComment/:hinh_id", getComment);
detailRouter.use("/createComment", createComment);



module.exports = detailRouter;