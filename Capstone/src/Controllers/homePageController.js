const { Sequelize } = require('sequelize');
const { successCode, errorCode, failCode } = require('../ultis/respone');
const Op = Sequelize.Op;

const initModel = require('../Models/init-models');

const sequelize = require('../Models/index');
const models = initModel(sequelize);
const fs = require('fs');
const bcrypt = require('bcrypt');

const getPicture = async (req, res) =>{

    try{
        let data = await models.hinh_anh.findAll({
            attributes: ['duong_dan']
        });
        //res.status(200).send(data)
        successCode(res, "lấy data thành công", data);
    } catch(err){
        //res.status(500).send("lỗi BE");
        errorCode(res, "Lỗi BE","");
    }
}

const getPictureByName = async (req, res) => {
    try {
        const { ten_hinh } = req.params;
        const data = await models.hinh_anh.findOne({
          where: {
            ten_hinh
          },
          attributes: ['duong_dan']
        });
        successCode(res, "lấy data thành công", data);
      } catch (err) {
        errorCode(res, err.message, err);
      }
    }





module.exports = {
    getPicture,
    getPictureByName

};