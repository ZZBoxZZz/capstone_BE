const { Sequelize } = require('sequelize');
const { successCode, errorCode, failCode } = require('../ultis/respone');
const Op = Sequelize.Op;

const initModel = require('../Models/init-models');

const sequelize = require('../Models/index');
const models = initModel(sequelize);
const fs = require('fs');
const bcrypt = require('bcrypt');


const getPictureAndHuman = async (req, res) =>{
    try {
        const { hinh_id } = req.params;
        const data = await models.hinh_anh.findOne({
          where: {
            hinh_id
          },
          attributes: ['ten_hinh', 'nguoi_dung_id']
        });
        successCode(res, "lấy data thành công", data);
      } catch (err) {
        errorCode(res, err.message, err);
      }

}

const getComment = async (req, res) =>{
    try {
        const { hinh_id } = req.params;
        const data = await models.binh_luan.findByPk(hinh_id); 
        successCode(res, "lấy data thành công", data);
      } catch (err) {
        errorCode(res, err.message, err);
      }

}

const createComment = async (req, res) => {
    try {
        const { nguoi_dung_id, hinh_id, ngay_binh_luan, noi_dung } = req.body;
        const newData = {nguoi_dung_id, hinh_id, ngay_binh_luan, noi_dung}
        await models.binh_luan.create(newData);
        successCode(res, "lấy data thành công", newData);
      } catch (err) {
        errorCode(res, err.message, err);
      }
    };



module.exports = {
    getPictureAndHuman,
    getComment,
    createComment
}